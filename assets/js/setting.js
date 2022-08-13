import { getTimeOfDay } from "./greeting";
import { startClassListInWidjets } from "./widjet";

const settingButton = document.querySelector('.setting__link');
const settingPanel = document.querySelector('.setting');

settingButton.addEventListener('click', function() {
settingPanel.classList.toggle('setting-show');
})


function setGlobalLanguage() {
    let defaultLanguage = 'en';
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', defaultLanguage);
    }
}

function setGlobalLinkSource() {
    let defaultLinkSource = 'github';
    if (!localStorage.getItem('link')) {
        localStorage.setItem('link', defaultLinkSource);
    }
}

export function setGlobalKeyWords() {
    let defaultLanguageForKeyWords = 'en';
    let defaultLinkSource = getTimeOfDay(defaultLanguageForKeyWords);
    if (!localStorage.getItem('keywords')) {
        localStorage.setItem('keywords', defaultLinkSource);
    }
}

function setGlobalActiveWidjets() {
    let defaultActiveWidjets = ['player', 'weather', 'time', 'date', 'greeting', 'quotes'];
    for (let i = 0; i < defaultActiveWidjets.length; i++) {
        if (!localStorage.getItem(defaultActiveWidjets[i])) {
            localStorage.setItem(defaultActiveWidjets[i], 'true');
        } else {
            startClassListInWidjets(defaultActiveWidjets[i], localStorage.getItem(defaultActiveWidjets[i]));
        }
    }
}

export default function initSetting () {
    setGlobalLanguage();
    setGlobalLinkSource();
    setGlobalKeyWords();
    setGlobalActiveWidjets();
}
