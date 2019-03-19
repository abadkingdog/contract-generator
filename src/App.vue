<template>
  <div id="app">
    <Contract />
    <modal
      v-if="isVisible"
      :is-saving="isSaving"
      @close="showLogger(false)"
    >
      <h3 slot="header">{{ logHeader }}</h3>
      <div slot="content">
        <logger />
      </div>
    </modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Contract from '@/pages/Contract'
import Modal from '@/components/Modal'
import Logger from '@/components/Logger'

export default {
  name: 'App',

  components: {
    Contract,
    Modal,
    Logger
  },

  methods: {
    ...mapActions('logger', [
      'showLogger',
    ]),
  },

  computed: {
    ...mapState('logger', [
      'isVisible',
      'isSaving'
    ]),

    logHeader() {
      return this.isSaving ? 'Waiting' : 'Saved'
    }
  }
}
</script>
