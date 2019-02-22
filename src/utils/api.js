class API {
  uploadJSON(data) {
    return fetch('http://localhost:8081/upload/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
      .then((response) => {
        if (response.ok) {
          return response.clone().json()
        }
        throw new Error(response)
      })
      .catch(e => throw new Error(e))
  }

  uploadImages(formData) {
    return fetch('http://localhost:8081/upload/images', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          return response.clone().json()
        }
        throw new Error(response)
      })
      .catch(e => throw new Error(e))
  }
}

const api = new API()
export default api
