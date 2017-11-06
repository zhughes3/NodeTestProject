var express = require('express')
var app = express()
const port = 3000

let msg = 'Hello World\n'

app.get('/', (request, response) => {
    response.send(msg)
})

app.listen(port)

console.log(`Listening on port ${port}`)