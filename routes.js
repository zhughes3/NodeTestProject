var multer = require('multer')
var upload = multer({dest: './uploads/'})

module.exports = app => {
    var posts = require('./controllers/BlogPostController')
    var images = require('./controllers/ImageController')
    var inputs = require('./controllers/InputController')
    
    app.get('/blog', posts.readAll)
    app.get('/blog/:slug', posts.read)
    app.post('/blog', posts.create)
    app.delete('/blog/:slug', posts.delete)
    app.get('/deleteAll', posts.deleteAll)
    //app.post('/images', upload.single('avatar'), images.create)

    var cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'resume', maxCount: 1 }])
    app.post('/inputs', cpUpload, inputs.create)

}