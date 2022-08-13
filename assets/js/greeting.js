const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

export function getTimeOfDay(language) {
    const listTimeOfDay = {
        en: ['night', 'morning', 'afternoon', 'evening'],
        ru: ['ночи', 'утро', 'день', 'вечер']
    };
    const currentDate = new Date;
    const hours = currentDate.getHours();
    return listTimeOfDay[language][Math.floor(hours / 6)];
}

function showGreeting() {
    let currentLanguage = localStorage.getItem('lang')
    const timeOfDay = getTimeOfDay(currentLanguage); 
    let greetingText;
    if (currentLanguage=='en') {
        greetingText = `Good ${timeOfDay}`;
    } else {
        switch(timeOfDay) {
            case 'утро': 
                greetingText = 'Доброе утро';
                break;
            case 'день': 
                greetingText = 'Добрый день';
                break;
            case 'вечер': 
                greetingText = 'Добрый вечер';
                break;
            case 'ночь': 
                greetingText = 'Доброй ночи';
                break;    
        }
    }
    
    greeting.innerHTML = greetingText;
    window.addEventListener('beforeunload', setLocaleStorage);
    window.addEventListener('load', getLocaleStorage);
}

function setLocaleStorage() {
    localStorage.setItem('name', name.value)
}

function getLocaleStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

export default showGreeting;