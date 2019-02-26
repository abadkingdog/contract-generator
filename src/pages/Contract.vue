<template>
  <div class="contract">
    <div class="ui sidebar inverted vertical menu left visible">
      <setting-form
        :disabled="isGenerating"
        :debug-mode="debugMode"
        @update="handleGenerate"
        @switchDebugMode="handlerDebug"
      >
        <div class="ui red tiny progress">
          <div class="bar" :style="{ width: progress + '%' }"></div>
        </div>
        <button
          class="ui red button fluid"
          :class="{ disabled: isLoading, loading: isLoading }"
          :disabled="isLoading"
          @click="handlerSubmit"
        >
          Save
        </button>
      </setting-form>
    </div>
    <div class="pusher">
      <div class="fix">
        <div class="ui basic segment">
          <template v-if="show">
            <page
              v-for="page in pages"
              :key="page.id"
              :order="page.id"
              :sections="page.sections"
              :settings="settings"
              :debug-mode="debugMode"
              :image-upload-status="imageUploadStatus"
              @updatePageData="handlePageData"
              @updateImage="handleImage"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import api from '@/utils/api'
import { SECTION_LIST } from '@/constants/sections'
import { DEBUG_MODE } from '@/constants/settings'
import Page from '@/components/Page'
import SettingForm from '@/components/SettingForm'

const SECTIONS = shuffle(SECTION_LIST)

export default {
  name: 'Contract',
  components: {
    Page,
    SettingForm
  },

  data: () => ({
    isGenerating: false,
    isLoading: false,
    isReady: false,
    show: true,
    debugMode: DEBUG_MODE,
    pagesCount: 1,
    settings: {
      fontFamilies: [],
    },
    contractDetails: [],
    progress: 0
  }),

  methods: {
    handlerSubmit() {
      this.isLoading = true
      // magic
    },

    async sendJSON(details) {
      await api.uploadJSON(details).then((res) => {
        this.$toastr
          .h('Success JSON')
          .s(res.message)
        this.isLoading = false
      }).catch((e) => {
        this.$toastr
          .h('Error JSON')
          .e(e)
        this.isLoading = false
        throw new Error(e)
      })
    },

    handleGenerate({ pages, fontFamilies }) {
      this.resetSettings()
      this.settings = { ...this.settings, fontFamilies }
      this.pagesCount = pages

      this.$nextTick(() => {
        this.isGenerating = false
      })
    },

    handlePageData({ sections, order, fontFamily }) {
      this.contractDetails[order] = {
        sections,
        fontFamily
      }
    },

    handleImage({ order, image }) {
      console.log(order, image)
      const pageDetails = { ...this.contractDetails[order], image }
      this.contractDetails = Object.assign([...this.contractDetails], { [order]: pageDetails })
      this.setProgress()
    },

    handlerDebug(mode) {
      localStorage.setItem('debugMode', !!mode)
      this.debugMode = mode
    },

    setProgress() {
      const max = parseInt(this.pagesCount, 10)
      const cur = this.contractDetails.filter(s => s.image).length
      this.progress = cur === max ? 100 : parseInt(cur * 100 / max, 10)
    },

    resetSettings() {
      this.isGenerating = true
      this.progress = 0
      this.contractDetails = []
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },

  computed: {
    pages() {
      const pages = []
      for (let i = 0; i < this.pagesCount; i++) {
        pages.push({
          id: i,
          sections: SECTIONS
        })
      }
      return pages
    },

    imageUploadStatus() {
      if (this.isLoading === true) {
        return 'start'
      }
      return ''
    }
  },

  watch: {
    progress(val) {
      this.isReady = val === 100
    },

    contractDetails: {
      deep: true,
      handler(details) {
        const len = details.length
        const imglen = details.filter(d => d.image).length
        if (len > 0 && len === imglen) {
          this.sendJSON(details)
        }
      }
    }
  }
}
</script>

<style scoped>
  .contract {
    background: #fcfcfc;
    padding: 20px 0;
  }
  .fix {
    padding-right: 260px;
  }
  .ui.progress .bar {
    min-width: 1%;
  }
</style>
