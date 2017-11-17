var fs = require('fs')

exports.create = (req, resp, next)  => {
    console.log(req)
    var image = req.files['image'][0]
    var resume = req.files['resume'][0]
    var body = req.body
    console.log(image, resume, body)
    resp.send({})
}