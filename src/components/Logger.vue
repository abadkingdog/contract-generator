<template>
  <div>
    <div v-html="text"></div>
    <div v-html="summary"></div>
  </div>
</template>

<script>
import EventBus from '@/utils/event-bus'
import { ADD_LOG, FINISH_LOG } from '@/constants/events'

export default {
  data: () => ({
    text: '',
    summary: ''
  }),

  mounted() {
    EventBus.$on(ADD_LOG, ({ message, status = '', description = '' }) => {
      this.text += this.getMessage({ message, status, description })
    })
    EventBus.$on(FINISH_LOG, ({ message, status = '', description = '' }) => {
      this.summary = this.getMessage({ message, status, description })
    })
  },

  methods: {
    getMessage({ status, message, description }) {
      switch (status) {
        case 'success':
          return `<div class="ui text success" title="${description}">${message}</div>`
        case 'error':
          return `<div class="ui text error" title="${description}">${message}</div>`
        default:
          return `<div class="ui text">${message}</div>`
      }
    }
  }
}
</script>
