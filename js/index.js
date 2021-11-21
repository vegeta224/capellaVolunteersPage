let index = 0;
imgList = ['../images/banner1.jpg', '../images/banner2.jpg', '../images/banner3.jpg'];

function preloadImage(url){
    console.log('running preload')
    const img = new Image();
    img.src = url;
    document.getElementById('banners').src = img
    return img
}

function onpageload(images) {
    for (var i = 0; i < images.length; i++) {
      images[i] = preloadImage(images[i])
    }
    console.log('onpageload')
    return images
};

function running() {
    onpageload(imgList);
   cycle();
}

function cycle() {
    const imgElement = document.getElementById('banners')
    setInterval(function() {
        nextImage = imgList[index];
        console.log(imgElement.src, nextImage);        
        imgElement.src = nextImage;
        (index > 1 ? index = 0 : index++)
    }, 3000)
}

window.onload = running();