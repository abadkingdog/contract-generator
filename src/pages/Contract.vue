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
          <pages
            v-if="show"
            :pages="pages"
            :settings="settings"
            :debug-mode="debugMode"
            :image-upload-status="imageUploadStatus"
            :progress.sync="progress"
            @updateDetails="handleDetails"
          />
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
import Pages from '@/components/Pages'
import SettingForm from '@/components/SettingForm'

const SECTIONS = shuffle(SECTION_LIST)

export default {
  name: 'Contract',
  components: {
    Pages,
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

    handlerDebug(mode) {
      localStorage.setItem('debugMode', !!mode)
      this.debugMode = mode
    },

    handleDetails(details) {
      this.sendJSON(details)
    },

    resetSettings() {
      this.isGenerating = true
      this.progress = 0
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

    // uses in mixin
    imageUploadStatus() {
      return this.isLoading === true ? 'start' : ''
    }
  },

  watch: {
    progress(val) {
      this.isReady = val === 100
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
