let index = 0;
imgList = ['../images/banner1.jpg', '../images/banner2.jpg', '../images/banner3.jpg'];

function preloadImage(url){
    console.log('running preload')
    const img = new Image();
    img.src = url;
    document.getElementById('banners').src = img.src
    return img
}

// function preloadImage() {
//     const img = new Image();
//     img.src = 
// }

function onpageload(images) {
    for (var i = 0; i < images.length; i++) {
      images[i] = preloadImage(images[i])
    }
  
    return images
};

function running() {
    onpageload(imgList);
    //preloadImages(imgList)
   cycle();
}

function preloadImages(sources) {
    window.preloadedImages = new Array();
    console.log('preload')
    for (var i = 0; i < sources.length; i++) {
        window.preloadedImages[i] = new Image();
        window.preloadedImages[i].src = sources[i];
    }
}

function cycle() {
    const imgElement = document.getElementById('banners')
    setInterval(function() {
        nextImage = imgList[index];
        console.log(imgElement.src)
        imgElement.src = nextImage;
  
        (index > 1 ? index = 0 : index++)
    }, 3000)
}

window.onload = running();