const cloudinary = require('cloudinary').v2
const albumModel = require('../models/album.model')
const { handleAddAlbum, handleGetListAlbum, handleDeleteAlbum } = require('../services/album.service')

const addAlbum = async (req, res) => {
    try {
        const { name, description, bgColor } = req.body 
        const { image } = req.files

        const albumData = handleAddAlbum({
            name,
            description,
            bgColor,
            imageFile: image[0],
        })
        return res.status(201).json({success: true, message: "Album Added", data: albumData})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}

const getListAlbum = async (req, res) => {
    try {
        const dataListAlbum = await handleGetListAlbum({})
        return {
            Ec: 1,
            Em: "Get list album is success!"
        }
    } catch (error) {
        return res.status(500).json({message: "Failed to get albums"})
    }
}

const deleteAlbum = async (req, res) => {
    try {
        const id = req.params
        await handleDeleteAlbum(id)
        return {
            Ec: 1,
            Em: "Album removed"
        }
    } catch (error) {
        return res.status(500).json({ message: "Failed to remove album"})
    }
}

module.exports = {
    addAlbum,
    getListAlbum,
    deleteAlbum
}