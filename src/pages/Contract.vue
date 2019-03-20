<template>
  <div class="contract">
    <div class="ui sidebar inverted vertical menu left visible">
      <setting-form
        :disabled="isGenerating || !boxesIsReady"
        @generate="handleGenerate"
      >
        <div class="ui red tiny progress">
          <div class="bar" :style="{ width: progress + '%' }"></div>
        </div>
        <button
          class="ui red button fluid"
          :class="{ disabled: isLoading, loading: isLoading }"
          :disabled="isLoading || !boxesIsReady"
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
            :page-blocks="pageBlocks"
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
import { mapActions, mapState } from 'vuex'
import api from '@/utils/api'
import Pages from '@/components/Pages'
import SettingForm from '@/components/SettingForm'

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
    progress: 0
  }),

  mounted() {
    this.generatePageBlocks()
  },

  methods: {
    ...mapActions('logger', [
      'showLogger',
      'endLogger'
    ]),

    ...mapActions('pages', [
      'generatePageBlocks'
    ]),

    ...mapActions('result', [
      'initResultProcess'
    ]),

    handlerSubmit() {
      this.initResultProcess()

      this.isLoading = true
      // TODO:
      // this.showLogger(true)
      // magic
    },

    async sendJSON(details) {
      await api.uploadJSON(details).then((res) => {
        this.endLogger({
          message: 'JSON is saved successfully',
          status: 'success',
          description: res.message
        })
        this.isLoading = false
      }).catch((e) => {
        this.endLogger({
          message: 'Error JSON',
          status: 'error'
        })
        this.isLoading = false
        throw new Error(e)
      })
    },

    handleGenerate() {
      this.resetSettings()
      this.generatePageBlocks()
      this.$nextTick(() => {
        this.isGenerating = false
      })
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
    ...mapState('result', [
      'isProcessing'
    ]),

    pages() {
      return this.$store.state.pages.blocks
    },

    // uses in mixin
    imageUploadStatus() {
      return this.isLoading === true ? 'start' : ''
    },

    pageBlocks() {
      return this.$store.state.pages.blocks
    },

    boxesIsReady() {
      return this.$store.getters['box/isReady']
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
