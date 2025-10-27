import axios from "./axios.customize"

const addAlbumAPI = (name, description, bgColor, image) => {
    const API_URL = '/api/add-album'
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('bgColor', bgColor)
    formData.append('image', image)

    return axios.post(API_URL, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

const getListAlbumAPI = () => {
    const API_URL = '/api/list-album'
    return axios.get(API_URL)
}

const deleteAlbumAPI = (id) => {
    const API_URL = `/api/delete-album/${id}`
    return axios.delete(API_URL)
}

export {
    addAlbumAPI,
    getListAlbumAPI,
    deleteAlbumAPI
}