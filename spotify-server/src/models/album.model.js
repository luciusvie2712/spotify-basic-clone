const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    bgColor: {type: String, required: true},
    image: {type: String, required: true},
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Song', 
        }
    ]
})

module.exports = mongoose.model('Album', AlbumSchema)