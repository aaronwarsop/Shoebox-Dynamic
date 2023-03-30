// Slideshow, scrolls through images every 8seconds
let currentImage = 2;

setInterval(function(){
    document.getElementById("radio" + currentImage).checked = true;
    currentImage++;
    if(currentImage > 4){
      currentImage = 1;
    }
}, 8000);

