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
          :id="`page_${item.id}`"
          :key="item.id"
          :order="item.id"
          :sections="item.sections"
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
    pageBlocks: { type: Array, default: () => ([]) },
    imageUploadStatus: { type: String, default: '' },
    progress: { type: Number, default: 0 }
  },

  data: () => ({
    contractDetails: []
  }),

  mount() {
    console.log('pages pageBlocks', this.pageBlocks)
  },

  methods: {
    handlePageData({ sections, order }) {
      this.contractDetails[order] = {
        sections
      }
    },

    handleImage({ order, image }) {
      console.log('image', order, image)
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
