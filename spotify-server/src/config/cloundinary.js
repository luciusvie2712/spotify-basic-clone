const cloudinary = require('cloudinary').v2;

const connectCloudinary = async () => {
    try {
        await cloudinary.config({
            cloud_name: process.env.CLOUND_NAME,
            api_key: process.env.CLOUND_API_KEY,
            api_secret: process.env.CLOUND_API_SECRECT
        })
        console.log("Connected to Cloudinary")
    } catch (error) {
        console.log(">>> Error connect to Cloudinary: ", error)
    }
}

module.exports = connectCloudinary