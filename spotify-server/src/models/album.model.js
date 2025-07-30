const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    bgColor: {type: String, required: true},
    image: {type: String, required: true}
})

module.exports = mongoose.model('album', AlbumSchema)