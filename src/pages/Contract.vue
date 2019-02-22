<template>
  <div class="contract">
    <div class="ui sidebar inverted vertical menu left visible">
      <setting-form
        :disabled="isGenerating"
        @update="handleGenerate"
        @switchDebugMode="handlerDebug"
      >
        <div class="ui red tiny progress">
          <div class="bar" :style="{ width: progress + '%' }"></div>
        </div>
        <button
          class="ui red button fluid"
          :class="{ disabled: !isReady, loading: isLoading }"
          :disabled="!isReady || isLoading"
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
    imageUploadStatus: '',
    show: true,
    debugMode: true,
    pagesCount: 1,
    settings: {
      fontFamilies: [],
    },
    contractDetails: [],
    contractImages: [],
    progress: 0
  }),

  methods: {
    async handlerSubmit() {
      console.log('submit', this.contractDetails, this.contractImages)
      this.isLoading = true
      this.imageUploadStatus = 'start'

      // TODO: get images first
      // this.sendJSON(this.contractDetails)
      // await this.sendImage(this.contractImages)
      // await api.uploadImages(this.contractImages).then((res) => {
      //   this.$toastr
      //     .h('Success IMAGES')
      //     .s(res.message)
      //   this.isLoading = false
      // }).catch((e) => {
      //   this.$toastr
      //     .h('Error IMAGES')
      //     .e(e)
      //   this.isLoading = false
      //   throw new Error(e)
      // })
      // const data = await imageToFromData(this.contractImages)
      // await api.uploadImages(data).then((res) => {
      //   console.log(res)
      //   this.$toastr
      //     .h('Success IMAGES')
      //     .s(res.message)
      //   this.isLoading = false
      // }).catch((e) => {
      //   this.$toastr
      //     .h('Error IMAGES')
      //     .e(e)
      //   this.isLoading = false
      //   throw new Error(e)
      // })
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
    },

    handlePageData({ sections, order, fontFamily }) {
      this.contractDetails[order] = {
        sections,
        fontFamily
      }
    },

    handleImage({ order, image }) {
      const name = `image_${order}`
      this.contractDetails[order] = { ...this.contractDetails, image: name }
      this.contractImages[name] = image
      this.setProgress()
    },

    handlerDebug(mode) {
      this.debugMode = mode
    },

    setProgress() {
      const max = parseInt(this.pagesCount, 10)
      const cur = this.contractDetails.filter(s => s.image).length
      console.log('image', this.pagesCount, cur)
      this.progress = cur === max ? 100 : parseInt(cur * 100 / max, 10)
    },

    resetSettings() {
      this.isGenerating = true
      this.progress = 0
      this.contractDetails = []
      this.contractImages = []
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
    }
  },

  watch: {
    pagesCount: {
      deep: true,
      handler(val) {
        this.pagesCount = val
      }
    },

    progress(val) {
      this.isReady = val === 100
      this.isGenerating = val !== 100
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
