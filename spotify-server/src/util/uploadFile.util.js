const cloudinary = require('cloudinary').v2

const uploadFile = (file, type) => {
    return cloudinary.uploader.upload(file.path, {resource_type: type})
}

module.exports = {
    uploadFile
}