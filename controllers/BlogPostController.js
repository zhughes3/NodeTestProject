var mongoose = require('mongoose')
BlogPost = mongoose.model('BlogPost')

exports.create = (request, response) => {

}

exports.read = (request, response) => {
    var slug = request.params.slug
}

exports.readAll = (request, response) => {
    BlogPost.find({}, (err, results) => {
        return response.send(results)
    })
}

exports.update = (request, response) => {
    var slug = request.params.slug
}

exports.delete = (request, response) => {
    var slug = request.params.slug
}