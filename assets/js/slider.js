export let randomNumGlobal = getRandomNum(20);
const prevSlideButtom = document.querySelector('.slide-prev');
const nextSlideButtom = document.querySelector('.slide-next');
const body = document.getElementById('body');

function getRandomNum(max) {
    return Math.floor(Math.random() * max + 1);
}

function getTimeOfDay() {
    const listTimeOfDay = ['night', 'morning', 'afternoon', 'evening'];
    const currentDate = new Date;
    const hours = currentDate.getHours();
    return listTimeOfDay[Math.floor(hours / 6)];
}

function setBgFromGitHub(random) {
    let randomNum = random;
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${String(randomNum).padStart(2, "0")}.jpg`;
    img.onload = () => {
        body.style.background = `url(${img.src})`;
    }
}
async function setBgFromUnsplah() {
    const keywords = localStorage.getItem('keywords').replace(/[,]/g, '+');
    const img = new Image();
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${keywords}&client_id=Ysjt3sAfpl5oAUJDd4RAGh7XSysXSuwfQzmyzP5BBew`;
    const res = await fetch(url);
    const data = await res.json();
    img.src = data.urls.regular;
    img.onload = () => {
        body.style.background = `url(${img.src})`;
    }
}

async function setBgFromFLickR() {
    const keywords = localStorage.getItem('keywords').replace(/[,]/g, '+');
    const img = new Image();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=25a9f4124b3d5bc6219a6107be4f7263&tags=${keywords}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    img.src = data.photos.photo[getRandomNum(100)].url_l;
    img.onload = () => {
        body.style.background = `url(${img.src})`;
    }
}

export function getLinkToImage(randomNum) {
    let random = randomNum;
    let linkSetting = localStorage.getItem('link');
    switch(linkSetting) {
        case 'github': 
            setBgFromGitHub(random)
            break;
        case 'unsplash': 
            setBgFromUnsplah();
            break;
        case 'flickr':
            setBgFromFLickR()
            break;
    }
}

function getSlidePrev() {
    (randomNumGlobal == 1) ? randomNumGlobal = 20 : randomNumGlobal--;
    getLinkToImage(randomNumGlobal);
}

function getSlideNext() {
    (randomNumGlobal == 20) ? randomNumGlobal = 1 : randomNumGlobal++;
    getLinkToImage(randomNumGlobal);
}

export default function initSliders() {
    getLinkToImage(randomNumGlobal);
    prevSlideButtom.addEventListener('click', getSlidePrev)
    nextSlideButtom.addEventListener('click', getSlideNext)
}




