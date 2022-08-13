const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
const quoteButton = document.querySelector('.change-quote');

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

async function getQuotes() {
    let lang = localStorage.getItem('lang')
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    quoteText.innerHTML = data[lang][getRandomNum(data[lang].length)].text;
    quoteAuthor.innerHTML = data[lang][getRandomNum(data[lang].length)].author;
}
function initQuotes() {
    getQuotes();
    quoteButton.addEventListener('click', getQuotes);
}
export default initQuotes;
