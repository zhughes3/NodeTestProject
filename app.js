var express = require('express')
mongoose = require('mongoose')
fs = require('fs')

const port = 3000

var mongoUri = 'mongodb://localhost/NodeTestProject'
mongoose.connect(mongoUri)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log("connected to mongodb at " + mongoUri)
})

var app = express()

//express app configurations
app.configure( () => {
    //tell express to expose the body of all requests
    app.use(express.bodyParser())
})

let msg = 'Hello World\n'

app.get('/', (request, response) => {
    response.send(msg)
})

require('./models/BlogPostModel')
require('./routes')(app)

// app.get('/blog/:slug', (request, response) => {
//     //display contents of blog post with this slug
//     var slug = request.params.slug
// })

//request will come in with a json object specifying a blog post
// app.post('/blog', (request, response) => {
//     response.send(msg)
// })

app.listen(port)
console.log(`Listening on port ${port}`)