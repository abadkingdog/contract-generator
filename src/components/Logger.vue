<template>
  <div class="scrolling content">
    <p v-if="!text">we're converting html to images...</p>
    <div v-html="text"></div>
    <div v-html="summary"></div>
    <div v-if="duration">
      <hr>
      Finished. Time is {{ duration }}s
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  updated() {
    const elem = this.$el
    elem.scrollTop = elem.clientHeight
  },

  computed: {
    ...mapState('logger', [
      'text',
      'summary',
      'duration'
    ])
  }
}
</script>
