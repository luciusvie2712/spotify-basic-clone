import axios from "./axios.customize"

const getListAlbumAPI = () => {
    const API_URL = '/api/list-album'
    return axios.get(API_URL)
}

const getListSongAPI = () => {
    const API_URL = '/api/list-song'
    return axios.get(API_URL)
}
const getAlbumByIdAPI = (id) => {
    const API_URL = `/api/album/${id}`
    return axios.get(API_URL)
}

export {
    getListSongAPI,
    getListAlbumAPI,
    getAlbumByIdAPI
}