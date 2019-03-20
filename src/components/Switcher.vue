<template>
  <div
    class="switch-box"
    :style="blockStyles"
  >
    <component
      :is="sectionName"
      :id="uuid"
      :page-id="pageId"
      :type="type"
    />
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import random from 'lodash/random'
import uniqueId from 'lodash/uniqueId'
import sectionConfig from '@/section-config'
import { CUSTOM_BLOCK_WIDTH } from '@/constants/sections'
import { detectTypeComponent } from '@/utils/helpers'

import SectionParagraph from './sections/SectionParagraph'
import SectionTable from './sections/SectionTable'
import SectionHeader from './sections/SectionHeader'
import SectionList from './sections/SectionList'
import SectionTitle from './sections/SectionTitle'
import SectionDefault from './sections/SectionDefault'

export default {
  components: {
    SectionParagraph,
    SectionTable,
    SectionHeader,
    SectionList,
    SectionTitle,
    SectionDefault
  },

  props: {
    pageId: { type: String, default: '' },
    sectionId: { type: String, default: '' },
    type: { type: String, default: '' },
    settings: { type: Object, default: () => ({}) },
    variable: { type: Boolean, default: false }
  },

  data: () => ({
    section: null,
    sectionName: null,
    uuid: null
  }),

  mounted() {
    this.uuid = uniqueId('section_')
    const section = detectTypeComponent(sectionConfig, this.type)
    this.section = section
    this.sectionName = section.name
  },

  methods: {
    randWidth() {
      return random(CUSTOM_BLOCK_WIDTH.start, CUSTOM_BLOCK_WIDTH.end)
    }
  },

  computed: {
    blockStyles() {
      let styles = {}
      const obj = this.settings
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const prop in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(prop)) {
          styles = { ...styles, [prop]: shuffle(obj[prop])[0] }
        }
      }
      return {
        ...styles,
        width: this.variable ? `${this.randWidth()}%` : '100%',
        margin: this.variable ? '10px 2% 20px' : '10px 0 20px',
      }
    }
  }
}
</script>

<style scoped>
  .switch-box {
    margin: 10px 0 20px;
    display: inline-block;
  }
</style>
