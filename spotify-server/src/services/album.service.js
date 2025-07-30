const cloudinary = require('cloudinary').v2
const albumModel = require('../models/album.model')

const uploadFile = (file, type) => {
    return cloudinary.uploader.upload(file.path, {resource_type: type})
}

const handleAddAlbum = async (name ,description, bgColor, imageFile) => {
    try {
        const [ imageUpload ] = await Promise.all([
            uploadFile(imageFile, 'image')
        ])

        const albumData = {
            name,
            description,
            bgColor,
            image: imageUpload.secure_url
        }

        const newAlbum = new albumModel(albumData)
        await newAlbum.save()
        
        return newAlbum
    } catch (error) {
        console.log(">> Error: ", error)
        return null
    }
}

const handleGetListAlbum = async () => {
    const data = await albumModel.find({})
    return data
}

const handleDeleteAlbum = async (id) => {
    return await albumModel.findByIdAndDelete(id)
}

module.exports = {
    handleAddAlbum,
    handleGetListAlbum,
    handleDeleteAlbum
}