import shuffle from 'lodash/shuffle'
import { SECTION } from '@/constants/sections'

const switchStylesMixin = {
  methods: {
    randAlign() {
      const variants = SECTION.ALIGN
      return shuffle(variants)[0]
    }
  },

  computed: {
    blockStyles() {
      return {
        textAlign: this.randAlign()
      }
    }
  }
}

export default switchStylesMixin
