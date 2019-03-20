<template>
  <div>
    <div v-html="text"></div>
    <div v-html="summary"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('logger', [
      'text',
      'summary'
    ])
  }
}
</script>
