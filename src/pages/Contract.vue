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
          :class="{ disabled: isProcessing, loading: isProcessing }"
          :disabled="isProcessing || !boxesIsReady"
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
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// import api from '@/utils/api'
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
    show: true
  }),

  mounted() {
    this.generatePageBlocks()
  },

  methods: {
    ...mapActions('logger', [
      'showLogger',
      'endLogger',
      'clearLogger'
    ]),

    ...mapActions('pages', [
      'generatePageBlocks'
    ]),

    ...mapActions('result', [
      'initResultProcess',
      'sendResult',
      'clearResults'
    ]),

    handlerSubmit() {
      this.showLogger(true)
      this.initResultProcess()
    },

    handleGenerate() {
      this.resetSettings()
      this.generatePageBlocks()
      this.$nextTick(() => {
        this.isGenerating = false
      })
    },

    resetSettings() {
      this.isGenerating = true
      this.show = false
      this.clearResults()
      this.clearLogger()
      this.$nextTick(() => {
        this.show = true
      })
    }
  },

  computed: {
    ...mapState('result', [
      'isProcessing',
      'progress'
    ]),

    pages() {
      return this.$store.state.pages.blocks
    },

    boxesIsReady() {
      return this.$store.getters['box/isReady']
    },

    isReadyForSending() {
      return this.$store.getters['result/isReadyForSending']
    }
  },
  watch: {
    isReadyForSending(val) {
      if (val) {
        this.sendResult().then(() => {
          this.endLogger({
            message: 'JSON is saved successfully',
            status: 'success'
          })
        }).catch((e) => {
          this.endLogger({
            message: 'Error JSON',
            status: 'error'
          })
          throw new Error(e)
        })
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
