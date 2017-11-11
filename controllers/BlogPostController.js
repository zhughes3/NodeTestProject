var mongoose = require('mongoose')
BlogPost = mongoose.model('BlogPost')

exports.create = (req,resp) => {
    var post = new BlogPost({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        meta: {
            description: req.body.meta.description,
            published: new Date(),
            author: req.body.meta.author
        }
    })
    post.save(error => {
        if (error) {
            throw error
        } else {
            console.log(`BlogPost saved successfully with title=${post.title}`)
        }
    })

    resp.status(201).send('Resource created')
}

exports.read = (req, resp) => {
    var slug = req.params.slug
    BlogPost.findOne({title: slug}, (err, results) => {
        return resp.send(results)
    })
}


exports.readAll = (req, resp) => {
    BlogPost.find({}, (err, results) => {
        return resp.send(results)
    })
}

exports.delete = (req, resp) => {
    var slug = req.params.slug
}