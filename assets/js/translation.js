import showGreeting from "./greeting";
import getWheter from "./weather";
import initQuotes from "./quotes";
import showDate from "./date";
import initgPanel from "./settingPanel";

const languagesButtons = document.querySelectorAll('.language__img');

function setActiveEnglish() {
    for (let i = 0; i<languagesButtons.length; i++){
        if (languagesButtons[i].id == localStorage.getItem('lang')) {
            languagesButtons[i].classList.add('language__img-active');
        }
    }
}
function changeLanguage() {
    for (let i = 0; i<languagesButtons.length; i++){
        languagesButtons[i].addEventListener('click', function(event){
            let ev = event.target;
            if(ev.classList.id == localStorage.getItem('lang')) {
                return;
            }
            languagesButtons.forEach((obj) => obj.classList.remove('language__img-active'));
            ev.classList.add('language__img-active');
            localStorage.setItem('lang', ev.id);
            getWheter();
            initQuotes();
            showGreeting();
            showDate();
            initgPanel();
        })
    }
}
export default function initTraslation() {
    setActiveEnglish();
    changeLanguage();
}

