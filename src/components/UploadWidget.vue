<template>
  <div>
    <input
      type="file"
      @change="onFileChange"
      accept="application/pdf"
    />
    <button @click="uploadFile">Subir PDF</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      selectedFile: null,
    }
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0]
    },
    async uploadFile() {
      if (!this.selectedFile) {
        alert('Por favor selecciona un archivo.')
        return
      }

      const formData = new FormData()
      formData.append('file', this.selectedFile)
      formData.append('upload_preset', 'minombre456') // Configurado en Cloudinary

      try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/daa87ivwr/upload`, formData)
        console.log('Archivo subido con éxito:', response.data)
      } catch (error) {
        console.error('Error al subir el archivo:', error)
      }
    },
  },
}
</script>
