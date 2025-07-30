const {addSong, getListSong} = require('../controllers/song.controller')
const Song = require('../models/song.model')
const cloudinary = require('cloudinary').v2

const uploadFile = (file, type) => {
    return cloudinary.uploader.upload(file.path, {resource_type: type})
}

const getFormattedDuration = (duration) => {
    const minutes = Math.floor(duration / 60).toString().padStart(2, '0')
    const seconds = Math.floor(duration % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
}

const handleAddSong = async ({name, description, album, audioFile, imageFile}) => {
    try {
        const [audioUpload, imageUpload] = await Promise.all([
            uploadFile(audioFile, 'video'),
            uploadFile(imageFile, 'image')
        ])

        const duration = getFormattedDuration(audioUpload.duration)

        const songData = {
            name, 
            description,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        }

        const newSong = new Song(songData)
        await newSong.save()

        return newSong
    } catch (error) {
        console.log(">> Error: ", error)
        return null
    }
}

const handleGetListSong = async () => {
    const data = await Song.find({})
    return data
}

const handleDeleteSong = async ( id ) => {
    return await Song.findByIdAndDelete(id)
}

module.exports = {
    handleAddSong,
    handleGetListSong,
    handleDeleteSong
}