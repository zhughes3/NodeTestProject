var quill = new Quill('#content', {
    theme: 'snow'
})

function postBlog() {
    var form = document.getElementById('postBlog')
    //var serialized = form.serialize()
    var imgName = '/' + form.elements.imageInput.files[0].name
    //postImage(form[2].files[0])
    var title = form.elements.titleInput.value

    var content = quill.root.innerHTML

    var author = form.elements.authorInput.value
    var description = form.elements.descriptionInput.value

    var postContent = {
        "title": title,
        "content": content,
        "image": imgName,
        "meta": {
            "description": description,
            "author": author
        }
    }

    var XHR = new XMLHttpRequest()

    XHR.open('POST', '/blog')
    XHR.setRequestHeader('Content-Type', 'application/json')
    XHR.send(JSON.stringify(postContent))
}

function postImage(data) {
    var XHR = new XMLHttpRequest()
    XHR.open('POST', '/images')
    XHR.setRequestHeader('Content-Type', 'multipart/form-data')
    XHR.send(data)
}

function sendEmail() {
    var form = document.getElementById('contactForm');

}