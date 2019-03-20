<template>
  <div :style="blockStyles" class="section-block">
    {{ text }}
  </div>
</template>

<script>
import random from 'lodash/random'
import { LoremIpsum } from '@/utils/lorem-ipsum'
// import coordMixin from '@/mixins/coords'

export default {
  name: 'SectionBlock',

  // mixins: [coordMixin],

  data: () => ({
    lipsum: new LoremIpsum()
  }),

  methods: {
    randWidth() {
      return random(25, 50)
    }
  },

  computed: {
    text() {
      const randValue = random(40)
      return this.lipsum.generate(randValue)
    }
  }
}
</script>

<style scoped>
  .section-block {
    display: inline-block;
  }
</style>
