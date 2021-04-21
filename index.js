const express = require('express')
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')

const Note = mongoose.Schema({
    title: String,
    content: String
},{
    timestamps: true
})


const app = express()

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected to the database')
}).catch( err => {
    console.log('Could not connect to the database now. Exiting now!... ',err)
    process.exit()
})

app.use(express.urlencoded({extended: true}))

app.get('/',(req,res) => {
    res.json({
        "message":"Welcome to SkyMedia"
    })
})

app.get('/notes',(req,res) => {
    Note.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
})

app.listen(3000,() => {
    console.log('Server is listening on port 3000')
})