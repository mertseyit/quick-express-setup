const express = require('express')
const app = express()
const connect = require('./config/connectDb')
const config = require('dotenv').config
config()
const port = process.env.PORT || 5001
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// connect()

app.get('/api/test', (req,res) => {
    res.status(200).json({
        message:"app is running successfully"
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})