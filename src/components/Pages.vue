<template>
  <div>
    <RecycleScroller
      class="scroller"
      :items="pages"
      :item-size="1200"
      key-field="id"
    >
      <template v-slot="{ item }">
        <page
          :key="item.id"
          :order="item.id"
          :sections="item.sections"
          :settings="settings"
          :debug-mode="debugMode"
          :image-upload-status="imageUploadStatus"
          @updatePageData="handlePageData"
          @updateImage="handleImage"
        />
      </template>
    </RecycleScroller>
  </div>
</template>

<script>
import { RecycleScroller } from 'vue-virtual-scroller'
import Page from '@/components/Page'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

export default {
  name: 'Pages',
  components: {
    Page,
    RecycleScroller
  },

  props: {
    pages: { type: Array, default: () => ([]) },
    settings: {
      type: Object,
      default: () => ({})
    },
    debugMode: { type: Boolean, default: false },
    imageUploadStatus: { type: String, default: '' },
    progress: { type: Number, default: 0 }
  },

  data: () => ({
    contractDetails: []
  }),

  methods: {
    handlePageData({ sections, order, fontFamily }) {
      console.log('>>>', sections, order, fontFamily)
      this.contractDetails[order] = {
        sections,
        fontFamily
      }
    },

    handleImage({ order, image }) {
      const pageDetails = { ...this.contractDetails[order], image }
      this.$set(this.contractDetails, order, pageDetails)
      this.setProgress()
    },

    setProgress() {
      const max = this.pages.length
      const cur = this.contractDetails.filter(s => s.image).length
      const curProgress = cur === max ? 100 : parseInt(cur * 100 / max, 10)
      this.$emit('update:progress', curProgress)
    },
  },

  watch: {
    contractDetails: {
      deep: true,
      handler(details) {
        const len = details.length
        const imglen = details.filter(d => d.image).length
        if (len > 0 && len === imglen) {
          this.$emit('updateDetails', details)
        }
      }
    }
  }
}
</script>
