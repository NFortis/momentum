const settingItemTitle = document.querySelectorAll('.setting__item__text');
const widgetItemText = document.querySelectorAll('.vidjet__text');
const settingButtonLink = document.querySelector('.setting__link__text');

const wordsForSettingButton = {
    en: 'Setting',
    ru: 'Настройки',
}

const wordsForTitle = {
    en: ['Apllication Language', 'Image Source', 'Widgets'],
    ru: ['Язык приложения', 'Источник фотографий', 'Виджеты'],
}

const wordsForText = {
    en: ['Time', 'Date', 'Weather', 'Player', 'Greeting', 'Quotes'],
    ru: ['Время', 'Дата', 'Погода', 'Плеер', 'Приветствие', 'Цитаты'],
}

export default function initPanel() {
    let currentLanguage = localStorage.getItem('lang');

    settingButtonLink.innerHTML = wordsForSettingButton[currentLanguage];
    for (let i = 0; i<settingItemTitle.length; i++){
        settingItemTitle[i].innerHTML = wordsForTitle[currentLanguage][i];
    }
    for (let i = 0; i<widgetItemText.length; i++){
        widgetItemText[i].innerHTML = wordsForText[currentLanguage][i];
    }
}