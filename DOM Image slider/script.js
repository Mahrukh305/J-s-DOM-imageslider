const images = [

    "image1.jpg",

    "image2.jpg",

    "image3.jpg",

    "image4.jpg"

];

let current = 0;

const slider = document.getElementById("slider");

function nextImage(){

    current++;

    if(current >= images.length){

        current = 0;

    }

    slider.src = images[current];

}

function previousImage(){

    current--;

    if(current < 0){

        current = images.length - 1;

    }

    slider.src = images[current];

}
