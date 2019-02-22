import domtoimage from 'dom-to-image'
import api from '@/utils/api'
// import { saveAs } from '@/utils/saveToFile'
// import { saveAs } from 'file-saver'
const urlCreator = window.URL || window.webkitURL

const htmlToImageMixin = {
  data: () => ({
    image: null
  }),

  mounted() {
    this.convertToImage()
  },

  methods: {
    convertToImage() {
      const paperEl = this.$el.children[0]
      domtoimage.toBlob(paperEl).then((blob) => {
        console.log('blob', blob)
        // const formData = new FormData()
        // formData.append('image', blob)
        // this.sendImg(formData)
        this.image = urlCreator.createObjectURL(blob)
        console.log('image uploaded')
      })
    },

    sendImg(img) {
      api.uploadImages(img).then((res) => {
        this.$toastr
          .h('Success IMAGES')
          .s(res.message)
      }).catch((e) => {
        this.$toastr
          .h('Error IMAGES')
          .e(e)
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
