var mongoose = require('mongoose')
Schema = mongoose.Schema

var BlogPostSchema = new Schema({
    id : Schema.Types.ObjectId,
    title: String,
    slug: String,
    content: String,
    image: String,
    meta: {
        description: String,
        published: Date,
        author: String
    }
})

mongoose.model('BlogPost', BlogPostSchema)