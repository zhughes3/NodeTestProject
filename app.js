var express = require('express')
mongoose = require('mongoose')
fs = require('fs')

const port = 3000

var mongoUri = 'mongodb://localhost/my_database'
mongoose.connect(mongoUri, {
    useMongoClient: true
})

//get the default collection
var db = mongoose.connection

//bind connection to error event
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log("connected to mongodb at " + mongoUri)
})

var app = express()

//express app configurations
app.configure( () => {
    //tell express to expose the body of all requests
    app.use(express.bodyParser())
    app.use(express.static('public'))
})

require('./models/BlogPostModel')
require('./routes')(app)

app.listen(port)
console.log(`Listening on port ${port}`)