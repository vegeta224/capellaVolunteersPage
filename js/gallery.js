imgList = ['../images/firefighter.jpg', '../images/work.jpg', '../images/silhouette.jpg', '../images/event.jpg'];

function preloadImage(url) {
    const img = new Image();
    img.src = url;
    return img
}

function onpageload(images) {
    for (var i = 0; i < images.length; i++) {
        images[i] = preloadImage(images[i])
    }
    return images
}

function rollover(event) {
    let onImage;
    if (event.target.parentNode.parentNode.nextElementSibling == null) {
        onImage = event.target.parentNode.parentNode.parentNode.children[0].children[0].href
    } else {
        onImage = event.target.parentNode.parentNode.nextElementSibling.children[0].href
    }
    event.target.src = onImage
}

function rollback(event) {
    let awayImage;
    if (event.target.parentNode.parentNode.nextElementSibling == null) {  
        awayImage = event.target.parentNode.parentNode.children[0].href
    } else {
        awayImage = event.target.parentNode.parentNode.children[0].href
    }
    event.target.src = awayImage
}

function running() {
    onpageload(imgList);
}

window.onload = running();