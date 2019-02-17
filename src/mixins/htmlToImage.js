import domtoimage from 'dom-to-image'
import { saveAs } from '@/utils/saveToFile'
// import { saveAs } from 'file-saver'

const htmlToImageMixin = {
  data: () => ({
    image: null
  }),

  methods: {
    convertToImage() {
      domtoimage.toBlob(this.$el)
        .then((blob) => {
          console.log(blob)
          // window.saveAs(blob, 'my-node.png');
          // saveAs(blob, 'image.jpg')
          saveAs({ blob, name: 'name.png' })
        })
    }
  }
}

export default htmlToImageMixin
