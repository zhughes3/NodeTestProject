function postBlog() {
    var form = document.getElementById('postBlog')
    var imgName = '/' + form[3].files[0].name
    var title = form[1].value
    var content = form[2].value

    var author = form[5].value
    var description = form[6].value

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