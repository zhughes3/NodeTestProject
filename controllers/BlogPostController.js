var mongoose = require('mongoose')
BlogPost = mongoose.model('BlogPost')

exports.create = (req,resp) => {
    var title = req.body.title
    var slug = title.replace(/\s+/g, '-').toLowerCase();
    var post = new BlogPost({
        title: req.body.title,
        slug: slug,
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

    resp.redirect('/blog')
}

exports.read = (req, resp) => {
    var slug = req.params.slug
    BlogPost.findOne({slug: slug}, (err, results) => {
        return resp.send(results)
    })
}


exports.readAll = (req, resp) => {
    BlogPost.find({}, (err, results) => {
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].title)
        }
        //blog.pug must be in views directory
        resp.render('blog', {posts: results})
        //return resp.send(results)
    })
}

exports.delete = (req, resp) => {
    var slug = req.params.slug
    BlogPost.remove({slug: slug}, true, (err, results) => {
        return resp.send(results)
    })
}

exports.deleteAll = (req, resp) => {
    BlogPost.remove({}, (err, results) => {
        return resp.send(results)
    })
}