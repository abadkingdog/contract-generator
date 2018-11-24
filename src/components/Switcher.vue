<template>
<div>
  <component v-bind:is="sectionName" />
</div>
</template>

<script>
import Vue from 'vue'
import sectionConfig from '@/section-config'
import { detectTypeComponent } from '@/utils/helpers'

import sParagraph from './sections/sParagraph'
import sTable from './sections/sTable'
import sHeader from './sections/sHeader'
import sList from './sections/sList'
import sTitle from './sections/sTitle'

export default Vue.extend({
  components: {
    sParagraph,
    sTable,
    sHeader,
    sList,
    sTitle,
  },

  props: {
    type: { type: String, default: '' },
  },

  data: () => ({
    section: null,
    sectionName: null,
  }),

  mounted () {
    this.$nextTick(() => {
      const section = detectTypeComponent(sectionConfig, this.type)
      this.section = section
      this.sectionName = section.name
    })
  },

  methods: {

  }
})
</script>
