const coordMixin = {
  data: () => ({
    countedBox: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0
    }
  }),

  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.matchCoords()
      })
    }, 100)
  },

  methods: {
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
      this.countedBox = this.getOffset(box)
    }
  },

  computed: {
    box() {
      const { height, width } = this.countedBox

      if (height < 16 || width < 10) return null
      return this.countedBox
    }
  },

  watch: {
    box(val) {
      val && this.updateBoundedBox(val)
    }
  }
}

export default coordMixin
