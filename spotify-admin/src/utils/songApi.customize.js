import axios from "./axios.customize"

const addSongAPI = (name, description, image, audio, album) => {
    const API_URL = '/api/add-song'
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('audio', audio)
    formData.append('album', album)

    return axios.post(API_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
const getListSongAPI = () => {
    const API_URL = '/api/list-song'
    return axios.get(API_URL)
}
const deleteSongAPI = (id) => {
    const API_URL = `/api/delete-song/${id}`
    return axios.delete(API_URL)
}

export { 
    addSongAPI,
    getListSongAPI,
    deleteSongAPI
}