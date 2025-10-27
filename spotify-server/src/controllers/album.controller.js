const { handleAddAlbum, handleGetListAlbum, handleDeleteAlbum, handleGetAlbumById } = require('../services/album.service')

const addAlbum = async (req, res) => {
    try {
        const { name, description, bgColor } = req.body 
        const { image } = req.files
        if (!image || image.length === 0) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }
        const albumData = handleAddAlbum(
            name,
            description,
            bgColor,
            image[0],
        )
        return res.status(201).json({
            success: true, 
            message: "Album Added", 
            data: albumData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

const getListAlbum = async (req, res) => {
    try {
        const dataListAlbum = await handleGetListAlbum({})
        return res.status(200).json({
            success: true,
            message: "Get list album is success!",
            data: dataListAlbum
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get albums"
        })
    }
}

const getAlbumById = async (req, res) => {
    try {
        const { id } = req.params
        const dataAlbum = await handleGetAlbumById(id)
        return res.status(200).json({
            success: true,
            message: "Get album success",
            data: dataAlbum
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get album",
        })
    }
}

const deleteAlbum = async (req, res) => {
    try {
        const {id} = req.params
        await handleDeleteAlbum(id)
        return res.status(200).json({
            success: true,
            message: "Album removed"
        })
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: "Failed to remove album"
        })
    }
}

module.exports = {
    addAlbum,
    getListAlbum,
    getAlbumById,
    deleteAlbum
}