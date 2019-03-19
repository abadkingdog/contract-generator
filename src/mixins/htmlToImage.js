import { mapActions } from 'vuex'
import html2canvas from 'html2canvas'
import debounce from 'lodash/debounce'
import api from '@/utils/api'

const urlCreator = window.URL || window.webkitURL

const htmlToImageMixin = {
  data: () => ({
    image: null
  }),

  created() {
    this.debouncedConvertToImage = debounce(this.convertToImage, 500)
  },

  methods: {
    ...mapActions('logger', [
      'addMessage',
    ]),

    getCanvasBlob(canvas) {
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          this.addMessage({
            message: `Page_${this.order} blob created`
          })
          return resolve(blob)
        })
      })
    },

    async convertToImage() {
      const paperEl = this.$el.children[0]
      const canvas = await html2canvas(paperEl)
      this.addMessage({
        message: `Page_${this.order} canvas created`
      })
      const blob = await this.getCanvasBlob(canvas)
      const formData = new FormData()
      formData.append('imagePage', blob)
      const filename = await this.sendImg(formData)
      this.image = {
        name: filename,
        url: urlCreator.createObjectURL(blob)
      }
    },

    sendImg(img) {
      return api.uploadImages(img).then((res) => {
        const { filename, message } = res
        this.addMessage({
          message: `Page_${this.order} ${filename} is saved successfully <br />`,
          status: 'success',
          description: message
        })
        return filename
      }).catch((e) => {
        this.addMessage({
          message: `Page_${this.order} __filename__ isn't saved`,
          description: e.toString(),
          status: 'error',
        })
        throw new Error(e)
      })
    }
  },

  watch: {
    imageUploadStatus(val) {
      if (val === 'start') {
        this.debouncedConvertToImage()
      }
    }
  }
}

export default htmlToImageMixin
