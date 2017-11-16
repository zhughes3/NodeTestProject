module.exports = app => {
    var posts = require('./controllers/BlogPostController')
    var images = require('./controllers/ImageController')
    app.get('/blog', posts.readAll)
    app.get('/blog/:slug', posts.read)
    app.post('/blog', posts.create)
    app.delete('/blog/:slug', posts.delete)
    app.get('/deleteAll', posts.deleteAll)
    app.post('/images', images.create)
}