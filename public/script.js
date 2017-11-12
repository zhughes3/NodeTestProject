var quill = new Quill('#content', {
    theme: 'snow'
})

function postBlog() {
    var form = document.getElementById('postBlog')
    var imgName = '/' + form[2].files[0].name
    var title = form[1].value

    var content = quill.root.innerHTML

    var author = form[14].value
    var description = form[15].value

    var postContent = {
        "title": title,
        "content": content,
        "image": imgName,
        "meta": {
            "description": description,
            "author": author
        }
    }

    var XHR = new XMLHttpRequest();

    XHR.open('POST', '/blog')
    XHR.setRequestHeader('Content-Type', 'application/json')
    XHR.send(JSON.stringify(postContent))
}

function sendEmail() {
    var form = document.getElementById('contactForm');

}