const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./src/config/connectDB')
const connectCloudinary = require('./src/config/cloundinary')
const routeAPI = require('./src/routes/api.routes')

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    return res.status(201).json("Server is runing ...")
})

app.use('/api', routeAPI)
const startServer = async () => {
    try {
        await connectDB()
        await connectCloudinary()
        app.listen(process.env.PORT, () => {
            console.log(`Server is runing on http://localhost:${process.env.PORT}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }
}

startServer()





