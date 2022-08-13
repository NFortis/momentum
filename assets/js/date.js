const dates = document.querySelector('.date');
const dataLanguages = {
    ru : "ru-RU",
    en : "en-EN"
}

function showDate() {
    let lang = dataLanguages[localStorage.getItem('lang')];
    const dateValue = new Date;
    const options = { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' };
    const currentDate = dateValue.toLocaleDateString(lang, options);
    dates.innerHTML = currentDate;
}


export default showDate;