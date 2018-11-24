<template>
  <h1>{{title}}</h1>
</template>

<script>
import random from 'lodash/random'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 's-title',

  data: () => ({
    lipsum: null
  }),

  created () {
    this.lipsum = new LoremIpsum();
  },

  computed: {
    title () {
      const randValue = random(7);
      return randValue > 0 ? this.lipsum.generate(randValue) : '';
    }
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
