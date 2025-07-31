const Song = require('../models/song.model')
const { uploadFile } = require('../util/uploadFile.util')

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
        console.error(">> Error when adding song: ", error.message)
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