<template>
  <p>{{text}}</p>
</template>

<script>
import random from 'lodash/random'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 's-paragraph',

  data: () => ({
    lipsum: null
  }),

  created () {
    this.lipsum = new LoremIpsum();
  },

  computed: {
    text () {
      const randValue = random(80);
      return this.lipsum.generate(randValue);
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
