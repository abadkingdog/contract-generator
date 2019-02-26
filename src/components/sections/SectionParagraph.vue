<template>
  <p ref="box">
    {{ text }}
  </p>
</template>

<script>
import random from 'lodash/random'
import coordMixin from '@/mixins/coords'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 'SectionParagraph',

  mixins: [coordMixin],

  data: () => ({
    lipsum: null
  }),

  created() {
    this.lipsum = new LoremIpsum()
  },

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
  margin-bottom: 1.5em;
}
a {
  color: #42b983;
}
</style>
