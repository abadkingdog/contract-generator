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
  }
}
</script>
