var mongoose = require('mongoose')
Schema = mongoose.Schema

var BlogPostSchema = new Schema({
    id : Schema.Types.ObjectId,
    title: String,
    content: String,
    image: String,
    meta: {
        description: String,
        published: Date,
        author: String
    }
})

mongoose.model('BlogPost', BlogPostSchema)

// "id": "consequat-ut-nulla",
//     "title": "consequat ut nulla",
//     "content": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
//     "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/mona-eendra.jpg",
//     "meta": {
//     "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
//         "published": "2017-07-28T18:31:01Z",
//         "author": "Derrik Yerrington"
// }