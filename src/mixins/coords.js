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
        left: parseInt(rect.left + window.scrollX, 10),
        top: parseInt(rect.top + window.scrollY, 10),
        bottom: parseInt(rect.bottom + window.scrollY, 10),
        right: parseInt(rect.right + window.scrollY, 10),
        width: parseInt(rect.width, 10),
        height: parseInt(rect.height, 10)
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
