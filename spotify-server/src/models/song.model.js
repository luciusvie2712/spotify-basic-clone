const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    album: {type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: true},
    image: {type: String, required: true},
    file: {type: String, required: true},
    duration: {type: String, required: true}
})

module.exports = mongoose.model('Song', SongSchema)