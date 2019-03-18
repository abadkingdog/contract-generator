<template>
  <div :style="blockStyles" class="section-block">
    {{ text }}
  </div>
</template>

<script>
import random from 'lodash/random'
import shuffle from 'lodash/shuffle'
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
    },

    randAlign() {
      const variants = ['left', 'center', 'right']
      return shuffle(variants)[0]
    },

    randPosition() {
      const variants = ['0 0 1rem auto', '0 auto 1rem', '0 auto 1rem 0']
      return shuffle(variants)[0]
    },

    randFlexAlign() {
      const variants = ['flex-start', 'center', 'flex-end']
      return shuffle(variants)[0]
    }
  },

  computed: {
    text() {
      const randValue = random(40)
      return this.lipsum.generate(randValue)
    },

    blockStyles() {
      return {
        width: `${this.randWidth()}%`,
        textAlign: this.randAlign(),
        // margin: this.randPosition(),
        alignSelf: this.randFlexAlign
      }
    }
  }
}
</script>

<style scoped>
  .section-block {
    display: inline-block;
  }
</style>
