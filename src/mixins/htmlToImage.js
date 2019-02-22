import domtoimage from 'dom-to-image'
import api from '@/utils/api'

const urlCreator = window.URL || window.webkitURL

const htmlToImageMixin = {
  data: () => ({
    image: null
  }),

  methods: {
    convertToImage() {
      const paperEl = this.$el.children[0]
      domtoimage.toBlob(paperEl).then((blob) => {
        const formData = new FormData()
        formData.append('imagePage', blob)
        this.sendImg(formData).then((filename) => {
          this.image = {
            name: filename,
            url: urlCreator.createObjectURL(blob)
          }
        })
      })
    },

    sendImg(img) {
      return api.uploadImages(img).then((res) => {
        const { filename, message } = res
        this.$toastr
          .h(`Success image ${filename}`)
          .s(message)
        return filename
      }).catch((e) => {
        this.$toastr
          .h('Error IMAGE upload')
          .e(e.toString())
        throw new Error(e)
      })
    }
  },
  watch: {
    imageUploadStatus(val) {
      if (val === 'start') {
        this.convertToImage()
      }
    }
  }
}

export default htmlToImageMixin
