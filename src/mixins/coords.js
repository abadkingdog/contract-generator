function getOffset(el) {
  const rect = el.getBoundingClientRect()
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    bottom: rect.bottom + window.scrollY,
    right: rect.right + window.scrollY,
  }
}

const coordMixin = {
  data: () => ({
    box: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }),

  mounted() {
    this.$nextTick(() => {
      this.box = getOffset(this.$el)
      this.$emit('updateData', { sectionCoords: this.box })
    })
  },
}

export default coordMixin
