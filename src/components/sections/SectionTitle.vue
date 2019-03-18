<template>
  <h1>{{ title }}</h1>
</template>

<script>
import random from 'lodash/random'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 'SectionTitle',

  data: () => ({
    lipsum: new LoremIpsum()
  }),

  computed: {
    title() {
      const randValue = random(7)
      return randValue > 0 ? this.lipsum.generate(randValue) : ''
    }
  }
}
</script>

<style lang="less" scoped>
  h1 {
    display: inline-block;
    font-size: 2em;
  }
</style>
