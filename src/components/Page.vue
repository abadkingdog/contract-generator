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
          :type="section"
          @updateData="getSectionData"
        />
      </div>
      <template v-if="debugMode">
        <div
          v-for="value in sectionsData"
          :key="value.id"
          :style="bbstyles(value.coords, value.type)"
          class="bounded-box"
        >
        </div>
      </template>
    </div>
    <div v-if="debugMode" class="metadata">
      <img
        v-if="image"
        :src="image.url"
        :alt="image.name"
        class="preview"
      >
      <pre><code>{{ configuredStyles }}</code></pre>
      <p><strong>SectionsData:</strong></p>
      <pre><code>{{ sectionsData }}</code></pre>
    </div>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import coordMixin from '@/mixins/coords'
import htmlToImageMixin from '@/mixins/htmlToImage'
import { SECTION_STYLE } from '@/constants/sections'
import { DEFAULT_FONT } from '@/constants/settings'
import Switcher from './Switcher'

export default {
  name: 'Page',
  mixins: [coordMixin, htmlToImageMixin],

  components: {
    Switcher
  },

  props: {
    sections: { type: Array, default: () => ([]) },
    order: { type: Number, default: 1 },
    settings: {
      type: Object,
      default: () => ({
        fontFamilies: () => ({})
      })
    },
    updatePageData: { type: Function, default: () => {} },
    debugMode: { type: Boolean, default: false },
    imageUploadStatus: { type: String, default: '' }
  },

  data: () => ({
    selectedFF: [{ name: DEFAULT_FONT }],
    sectionsData: []
  }),

  computed: {
    configuredStyles() {
      return {
        'font-family': this.selectedFF[0]
      }
    },
  },

  mounted() {
    this.selectedFF = shuffle(this.settings.fontFamilies)
  },

  methods: {
    /*
      create list of data
    // @this.box - coords of page
    // @sectionCoords - coords of segment
    */
    getSectionData({ sectionCoords: { top, right, bottom, left, height, width }, id, type }) {
      let coords = {
        top: top - this.box.top,
        bottom: bottom - this.box.top,
        right: right - this.box.left,
        left: left - this.box.left,
        height,
        width,
      }
      const MAX_TOP = 1045
      if (coords.top > MAX_TOP) return
      if (coords.bottom > MAX_TOP) {
        coords = {
          ...coords,
          bottom: MAX_TOP,
          height: MAX_TOP - coords.top
        }
      }

      if (coords.height < 16) return
      this.sectionsData.push({ id, type, coords })
    },

    bbstyles({ top, left, height, width }, type = 'default') {
      return {
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
        outline: `3px solid ${SECTION_STYLE[type]}`
      }
    }
  },

  watch: {
    sectionsData: {
      deep: true,
      handler(val) {
        this.$emit('updatePageData', { sections: val, order: this.order, fontFamily: this.selectedFF[0] })
      }
    },

    image(val) {
      console.log('image', val)
      if (!val) return
      this.$emit('updateImage', { image: val.name, order: this.order })
    },
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
  background: rgba(255,255,255, 0.4);
}
  .paper-box {
    border: 1px solid blue;
    position: absolute;
    z-index: 0;
    pointer-events: none;
  }
</style>
