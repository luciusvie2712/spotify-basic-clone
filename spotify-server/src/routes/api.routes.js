const express = require('express')
const upload = require('../middleware/multer.middleware')
const { addSong, getListSong, deleteSong } = require('../controllers/song.controller')
const { addAlbum, deleteAlbum, getListAlbum, getAlbumById } = require('../controllers/album.controller')
const routeApi = express.Router()

// routeApi Song
routeApi.post('/add-song', upload.fields([{name: 'image', maxCount: 1}, {name: 'audio', maxCount: 1}]),addSong)
routeApi.get('/list-song', getListSong)
routeApi.get('/album/:id', getAlbumById)
routeApi.delete('/delete-song/:id', deleteSong)

// routeApi Album
routeApi.post('/add-album', upload.fields([{name: 'image', maxCount: 1}]), addAlbum)
routeApi.get('/list-album', getListAlbum)
routeApi.delete('/delete-album/:id', deleteAlbum)

module.exports = routeApi