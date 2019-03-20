<template>
  <div class="page">
    <div
      ref="box"
      class="paper"
    >
      <div class="paper-content" :style="configuredStyles">
        <Switcher
          v-for="(section, index) in sections"
          :key="index"
          :section-id="`section_${index}`"
          :page-id="id"
          :type="section"
          :settings="settings.section"
          :variable="isVariable(index)"
        />
      </div>
      <template v-if="settings.debugMode && resultBoxes">
        <div
          v-for="value in resultBoxes"
          :key="value.id"
          :style="bbstyles(value.coords, value.type)"
          class="bounded-box"
        >
        </div>
      </template>
    </div>
    <div v-if="settings.debugMode" class="metadata">
      <img
        v-if="image"
        :src="image.url"
        :alt="image.name"
        class="preview"
      >
      <template v-if="true">
        <p><strong>SectionsData:</strong></p>
        <pre><code>{{ resultBoxes }}</code></pre>
      </template>
    </div>
  </div>
</template>

<script>
import random from 'lodash/random'
import { mapActions, mapState } from 'vuex'
import coordMixin from '@/mixins/coords'
import htmlToImageMixin from '@/mixins/htmlToImage'
import { SECTION_STYLE, MAX_VARIABLE_BLOCKS } from '@/constants/sections'
import Switcher from './Switcher'

export default {
  name: 'Page',
  mixins: [coordMixin, htmlToImageMixin],

  components: {
    Switcher
  },

  props: {
    id: { type: String, default: '0' },
    sections: { type: Array, default: () => ([]) },
    order: { type: Number, default: 1 },
    updatePageData: { type: Function, default: () => {} }
  },

  data: () => ({
    sectionsData: []
  }),

  computed: {
    ...mapState([
      'settings',
      'box'
    ]),

    configuredStyles() {
      return {
        // TODO: styles for page
      }
    },

    resultBoxes() {
      const page = this.box.result.find(o => o.pageId === this.id)

      return page && page.sections
    },

    variableIndexes() {
      const len = this.sections.length
      const arr = []
      for (let i = 0; i < MAX_VARIABLE_BLOCKS; i++) {
        arr.push(random(0, len))
      }

      return arr
    }
  },

  methods: {
    ...mapActions('result', [
      // 'setPageResult',
      'addImageToResult'
    ]),

    bbstyles({ top, left, height, width }, type = 'default') {
      const color = SECTION_STYLE[type] || SECTION_STYLE.default
      return {
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
        outline: `3px solid ${color}`
      }
    },

    isVariable(index) {
      return this.variableIndexes.includes(index)
    }
  }
}
</script>

<style lang="less" scoped>
@FORMAT_A4_HEIGHT: 297mm;
@FORMAT_A4_WIDTH: 210mm;
@FORMAT_A4_OFFSET_TOP: 20mm;
@FORMAT_A4_OFFSET_BOTTOM: 20mm;
@FORMAT_A4_OFFSET_LEFT: 20mm;
@FORMAT_A4_OFFSET_RIGHT: 20mm;
@FORMAT_A4_MARGIN_BOTTOM: 20mm;
.page {
  position: relative;
  display: inline-block;
  margin-right: 1rem;
}
.paper {
  margin: 0 0 @FORMAT_A4_MARGIN_BOTTOM;
  padding: @FORMAT_A4_OFFSET_TOP @FORMAT_A4_OFFSET_LEFT @FORMAT_A4_OFFSET_BOTTOM @FORMAT_A4_OFFSET_LEFT;
  height: @FORMAT_A4_HEIGHT;
  width: @FORMAT_A4_WIDTH;
  border: solid 1px rgba(173, 182, 190, 0.18);
  background-color: #fff;
  line-height: 1.5em;
  font-size: 12pt;
  color: #26313b;
  text-align: left;
  box-sizing: border-box;
  position: relative;
  .paper-content {
    height: @FORMAT_A4_HEIGHT - @FORMAT_A4_OFFSET_TOP - @FORMAT_A4_OFFSET_BOTTOM;
    overflow: hidden;
    /*display: flex;*/
    /*flex-direction: row;*/
    /*flex-wrap: wrap;*/
  }
}
.metadata {
  background: #ffffe0;
  position: absolute;
  left: 101%;
  top: 0;
  font-size: 10px;
  padding: 10px;
  width: 300px;
  max-height: @FORMAT_A4_HEIGHT;
  overflow-y: auto;
  z-index: 1;
}
.preview {
  width: 100px;
}
.bounded-box {
  position: absolute;
  z-index: 10;
  pointer-events: none;
  /*background: rgba(255,255,255, 0.4);*/
}
  .paper-box {
    border: 1px solid blue;
    position: absolute;
    z-index: 0;
    pointer-events: none;
  }
</style>
