<template>
  <div class="list">
    <ul ref="box">
      <li v-for="item in randValue" :key="item">
        {{ lipsum.generate(5).substring(0, 100) }}
      </li>
    </ul>
  </div>
</template>

<script>
import random from 'lodash/random'
import coordMixin from '@/mixins/coords'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 'SectionList',

  mixins: [coordMixin],

  created() {
    this.lipsum = new LoremIpsum()
  },

  computed: {
    randValue() {
      return random(10) + 1
    }
  }
}
</script>

<style scoped>
  ul, ol {
    display: inline-block;
    padding-left: 0;
  }
  ul {
     list-style-type: disc;
     list-style-position: inside;
  }
  ol {
     list-style-type: decimal;
     list-style-position: inside;
  }
  ul ul, ol ul {
     list-style-type: circle;
     list-style-position: inside;
     margin-left: 15px;
  }
  ol ol, ul ol {
     list-style-type: lower-latin;
     list-style-position: inside;
     margin-left: 15px;
  }
</style>
