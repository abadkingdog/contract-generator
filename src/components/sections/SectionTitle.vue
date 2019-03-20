<template>
  <h1 ref="box">{{ title }}</h1>
</template>

<script>
import random from 'lodash/random'
import coordMixin from '@/mixins/coords'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 'SectionTitle',

  mixins: [coordMixin],

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
