const Song = require('../models/song.model')
const Album = require('../models/album.model')
const { uploadFile } = require('../util/uploadFile.util')
const { default: mongoose } = require('mongoose')

const getFormattedDuration = (duration) => {
    const minutes = Math.floor(duration / 60).toString().padStart(2, '0')
    const seconds = Math.floor(duration % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
}

const handleAddSong = async ({name, description, album, audioFile, imageFile}) => {
    try {
        const existingAlbum = await Album.findById(album)
        if (!existingAlbum) throw new Error("Album not found")
        const [audioUpload, imageUpload] = await Promise.all([
            uploadFile(audioFile, "auto"),
            uploadFile(imageFile, "auto"),
        ]);


        const duration = getFormattedDuration(audioUpload.duration)

        const songData = {
            name, 
            description,
            album: new mongoose.Types.ObjectId(album),
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        }

        const newSong = new Song(songData)
        await newSong.save()
        existingAlbum.songs.push(newSong._id)
        await existingAlbum.save()

        await newSong.populate('album', '_id name');

        return newSong
    } catch (error) {
        console.error(">> Error when adding song: ", error)
        throw error
    }
}

const handleGetListSong = async () => {
    try {
        const data = await Song.find({}).populate('album', '_id name')
        return data
    } catch (error) {
        console.error("Error loading song", error)
        throw error
    }
}

const handleDeleteSong = async ( id ) => {
    try {
        const song = await Song.findById(id)
        if (!song) throw new Error("Song Id not found")
        
        await Song.findByIdAndDelete(id)
        if (Song.album) {
            await Album.findByIdAndUpdate(song.album, {
                $pull: { songs: song._id }
            })
        }

        return {
            success: true,
            message: "Song removed successfully"
        }
    } catch (error) {
        console.error("Error deleting song: ", error)
        throw error
    }
}

module.exports = {
    handleAddSong,
    handleGetListSong,
    handleDeleteSong
}