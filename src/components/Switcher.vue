<template>
  <div>
    <div
      ref="box"
      class="switch-box"
      :style="blockStyles"
    >
      <component
        :is="sectionName"
      />
    </div>
  </div>
</template>

<script>
import uniqueId from 'lodash/uniqueId'
import sectionConfig from '@/section-config'
import { detectTypeComponent } from '@/utils/helpers'
import coordMixin from '@/mixins/coords'
import switchStylesMixin from '@/mixins/switchStyles'

import SectionParagraph from './sections/SectionParagraph'
import SectionTable from './sections/SectionTable'
import SectionHeader from './sections/SectionHeader'
import SectionList from './sections/SectionList'
import SectionTitle from './sections/SectionTitle'
import SectionBlock from './sections/SectionBlock'

export default {
  components: {
    SectionParagraph,
    SectionTable,
    SectionHeader,
    SectionList,
    SectionTitle,
    SectionBlock
  },

  props: {
    type: { type: String, default: '' },
    updateMetadata: { type: Function, default: () => {} }
  },

  mixins: [coordMixin, switchStylesMixin],

  data: () => ({
    section: null,
    sectionName: null,
  }),

  mounted() {
    this.uuid = uniqueId('section_')
    const section = detectTypeComponent(sectionConfig, this.type)
    this.section = section
    this.sectionName = section.name
  },

  methods: {
    updateBoundedBox(val) {
      this.$emit('updateData', {
        sectionCoords: val,
        id: this.uuid,
        type: this.type
      })
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
