/* eslint-disable */
function multipartFormData(image) {
  const boundary = `----${(new Date()).getTime()}`
  const bodyString = []
  bodyString.push(
    `--${boundary}`,
    'Content-Disposition: form-data; name="' + 'file' + '";' + 'filename="' + 'my_file.jpg' + '"',
    'Content-Type: ' + 'image/jpeg',
    'Content-Transfer-Encoding: base64', '', // need /r/n twice here
    image.substring(23) // remove the data:image/jpeg;base64,
  )

  bodyString.push(`--${boundary}--`, '')

  const content = bodyString.join('\r\n')
  return {
    content,
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'Content-Length': content.length
    }
  }
}

export function imageToFromData(images) {
  console.log('images', images)
  const formData = new FormData()
  images.map((img) => {
    const blob = multipartFormData(img)
    console.log('blob', blob)
    formData.append('image', blob)
  })
  console.log(formData.entries())
  return formData;
}
