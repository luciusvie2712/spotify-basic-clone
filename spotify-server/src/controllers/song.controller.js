const { handleAddSong, handleGetListSong, handleDeleteSong } = require('../services/song.service')

const addSong = async (req, res) => {
    try {
        const {name, description, album} = req.body
        const {audio, image} = req.files
   
        const songData = handleAddSong({
            name, 
            description,
            album,
            imageFile: image[0],
            audioFile: audio[0], 
        })
        return res.status(201).json({success: true, message: "Song Added", data: songData})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}

const getListSong = async (req, res) => {
    try {
        const dataListSong = await handleGetListSong({})
        return res.status(200).json({
            Ec: 1,
            Em: "Get list song is success!"
        })
    } catch (error) {
        return res.status(500).json({ message: "Failed to get songs"})
    }
}

const deleteSong = async (req, res) => {
    try {
        const id = req.params
        await handleDeleteSong(id)
        return res.status(200).json({
            Ec: 1,
            Em: "Song removed"
        })
    } catch (error) {
        return res.status(500).json({message: "Failed to remove song"})
    }
}


module.exports = {
    addSong,
    getListSong,
    deleteSong
}