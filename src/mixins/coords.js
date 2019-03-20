import { mapActions } from 'vuex'

const coordMixin = {
  props: {
    id: { type: String, default: 'page_' },
    pageId: { type: String, default: null },
    type: { type: String, default: 'page' },
  },

  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.matchCoords()
      })
    }, 100)
  },

  methods: {
    ...mapActions('box', [
      'setCoords'
    ]),

    getOffset(el) {
      const rect = el.getBoundingClientRect()

      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
        right: rect.right + window.scrollY,
        width: rect.width,
        height: rect.height,
      }
    },

    matchCoords() {
      const { box } = this.$refs
      if (!box) return
      const coords = this.getOffset(box)
      this.setCoords({
        coords,
        boxId: this.id,
        pageId: this.pageId,
        type: this.type
      })
    }
  }
}

export default coordMixin
