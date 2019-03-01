import html2canvas from 'html2canvas'
import debounce from 'lodash/debounce'
import api from '@/utils/api'

const urlCreator = window.URL || window.webkitURL

const htmlToImageMixin = {
  data: () => ({
    image: null
  }),

  created() {
    // _.debounce — это функция lodash, позволяющая ограничить то,
    // насколько часто может выполняться определённая операция.
    // В данном случае мы ограничиваем частоту обращений к yesno.wtf/api,
    // дожидаясь завершения печати вопроса перед отправкой ajax-запроса.
    // Узнать больше о функции _.debounce (и её родственнице _.throttle),
    // можно в документации: https://lodash.com/docs#debounce
    this.debouncedConvertToImage = debounce(this.convertToImage, 500)
  },

  methods: {
    getCanvasBlob(canvas) {
      return new Promise((resolve) => {
        canvas.toBlob(blob => resolve(blob))
      })
    },

    async convertToImage() {
      const paperEl = this.$el.children[0]
      const canvas = await html2canvas(paperEl)
      const blob = await this.getCanvasBlob(canvas)
      const formData = new FormData()
      formData.append('imagePage', blob)
      const filename = await this.sendImg(formData)
      console.log('filename', filename)
      this.image = {
        name: filename,
        url: urlCreator.createObjectURL(blob)
      }
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
        this.debouncedConvertToImage()
      }
    }
  }
}

export default htmlToImageMixin
