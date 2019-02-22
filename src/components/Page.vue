<template>
  <div class="page">
    <div class="paper">
      <div class="paper-content" :style="configuredStyles">
        <Switcher
          v-for="(section, index) in sections"
          :key="index"
          :type="section"
          @updateData="getSectionData"
        />
      </div>
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
    selectedFF: [{ name: 'sans-serif' }],
    sectionsData: []
  }),

  computed: {
    configuredStyles() {
      return {
        'font-family': this.selectedFF[0]
      }
    }
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
    getSectionData({ sectionCoords: { top, right, bottom, left }, id, type }) {
      const coords = {
        top: top - this.box.top,
        bottom: bottom - this.box.top,
        right: right - this.box.left,
        left: left - this.box.left,
      }
      this.sectionsData.push({ id, type, coords })
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
      if (!val) return
      this.$emit('updateImage', { image: val.name, order: this.order })
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
    margin: @FORMAT_A4_OFFSET_TOP @FORMAT_A4_OFFSET_LEFT @FORMAT_A4_OFFSET_BOTTOM @FORMAT_A4_OFFSET_LEFT;
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
</style>
