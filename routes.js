module.exports = app => {
    var posts = require('./controllers/BlogPostController')
    app.get('/blog', posts.readAll)
    app.get('/blog/:slug', posts.read)
    app.post('/blog', posts.create)
    app.put('/blog/:slug', posts.update)
    app.delete('/blog/:slug', posts.delete)
}