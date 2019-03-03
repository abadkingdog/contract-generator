<template>
  <div id="app">
    <Contract />
    <modal
      v-if="showLogger"
      :is-saving="isSaving"
      @close="showLogger = false"
    >
      <h3 slot="header">{{ logHeader }}</h3>
      <div slot="content">
        <logger />
      </div>
    </modal>
  </div>
</template>

<script>
import Contract from '@/pages/Contract'
import Modal from '@/components/Modal'
import Logger from '@/components/Logger'
import EventBus from '@/utils/event-bus'
import { SHOW_LOGGER, FINISH_LOG } from '@/constants/events'

export default {
  name: 'App',
  data: () => ({
    showLogger: false,
    isSaving: true
  }),

  components: {
    Contract,
    Modal,
    Logger
  },

  mounted() {
    EventBus.$on(SHOW_LOGGER, (payload) => {
      this.showLogger = payload
      this.isSaving = payload
    })

    EventBus.$on(FINISH_LOG, () => {
      this.isSaving = false
    })
  },

  computed: {
    logHeader() {
      return this.isSaving ? 'Waiting' : 'Saved'
    }
  }
}
</script>
