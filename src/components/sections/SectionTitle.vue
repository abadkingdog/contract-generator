<template>
  <h1>{{ title }}</h1>
</template>

<script>
import random from 'lodash/random'
import coordMixin from '@/mixins/coords'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 'SectionTitle',

  mixins: [coordMixin],

  data: () => ({
    lipsum: null
  }),

  computed: {
    title() {
      const randValue = random(7)
      return randValue > 0 ? this.lipsum.generate(randValue) : ''
    }
  },

  created() {
    this.lipsum = new LoremIpsum()
  }
}
</script>

<style lang="less" scoped>
  h1 {
    padding-top: 1em;
    padding-bottom: 1em;
    text-align: center;
    &:first-letter {
      text-transform: uppercase;
    }
  }
</style>
