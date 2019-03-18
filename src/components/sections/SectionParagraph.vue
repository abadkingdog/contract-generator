<template>
  <p>
    {{ text }}
  </p>
</template>

<script>
import random from 'lodash/random'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 'SectionParagraph',

  data: () => ({
    lipsum: new LoremIpsum()
  }),

  computed: {
    text() {
      const randValue = random(80)
      return this.lipsum.generate(randValue)
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 1.5em !important;
}
a {
  color: #42b983;
}
</style>
