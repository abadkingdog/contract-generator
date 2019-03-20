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
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
