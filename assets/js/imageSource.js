const sourceImagesButtons = document.querySelectorAll('.images__item');

import initSliders from "./slider";
import definesInputActivity from "./keywords";


function setActiveSource() {
    for (let i = 0; i<sourceImagesButtons.length; i++){
        if (sourceImagesButtons[i].id == localStorage.getItem('link')) {
            sourceImagesButtons[i].classList.add('images__item-active');
        }
    }
}

function changeSourceImages() {
    for (let i = 0; i<sourceImagesButtons.length; i++){
        sourceImagesButtons[i].addEventListener('click', function(event){
            let ev = event.target;
            if(ev.classList.id == localStorage.getItem('link')) {
                return;
            }
            sourceImagesButtons.forEach((obj) => obj.classList.remove('images__item-active'));
            ev.classList.add('images__item-active');
            localStorage.setItem('link', ev.id);
            initSliders();
            definesInputActivity();
        })
        
    }
    
}

export default function initSourceImage() {
    setActiveSource()
    changeSourceImages();
}