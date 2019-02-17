<template>
  <div>
    <component :is="sectionName" @updateData="handlerMetadata" />
  </div>
</template>

<script>
import uniqueId from 'lodash/uniqueId'
import sectionConfig from '@/section-config'
import { detectTypeComponent } from '@/utils/helpers'

import SectionParagraph from './sections/SectionParagraph'
import SectionTable from './sections/SectionTable'
import SectionHeader from './sections/SectionHeader'
import SectionList from './sections/SectionList'
import SectionTitle from './sections/SectionTitle'

export default {
  components: {
    SectionParagraph,
    SectionTable,
    SectionHeader,
    SectionList,
    SectionTitle,
  },

  props: {
    type: { type: String, default: '' },
    updateMetadata: { type: Function, default: () => {} }
  },

  data: () => ({
    section: null,
    sectionName: null,
  }),

  mounted() {
    this.uuid = uniqueId('section_')
    this.$nextTick(() => {
      const section = detectTypeComponent(sectionConfig, this.type)
      this.section = section
      this.sectionName = section.name
    })
  },

  methods: {
    handlerMetadata(params) {
      this.$emit('updateData', { ...params, id: this.uuid, type: this.type })
    }
  }
}
</script>
