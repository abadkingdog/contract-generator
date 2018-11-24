<template>
  <div class="contract-header">
    <img :src="image" alt="">
  </div>
</template>

<script>
import random from 'lodash/random'

export default {
  name: 's-header',

  methods: {
    getImgUrl(pic) {
      const images = require.context('../../assets/images/', false, /\.png$/)
      return images('./' + pic + ".png")
    }
  },

  computed: {
    image () {
      const randValue = random(3)
      if (!randValue) return null
      const images = require.context('../../assets/images/', false, /\.png$/)
      const pic = `header${randValue}`
      return images(`./${pic}.png`)
    }
  }
}
</script>

<style lang="less" scoped>
  @FORMAT_A4_WIDTH: 210mm;
  .contract-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    img {
      max-height: 20mm;
      width: 100%;
    }
  }
</style>
