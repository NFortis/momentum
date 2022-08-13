import { setGlobalKeyWords } from "./setting";
import { getLinkToImage } from "./slider";
import { randomNumGlobal } from "./slider";

export const keyWordsInput = document.getElementById('keywords-input');
const keyWordsInputLabel = document.querySelector('.keywords__label');
export const clearKeyWordsButton = document.getElementById('clearKeyWords');
const keyWordsList = document.querySelector('.keywords-list');
const setKeyWordsButton = document.getElementById('setKeyWords');
let KEY_WORDS = [];
const MAX_COUNTS_KEY_WORDS = 15;
const MIN_LENGTH_OF_WORD = 1;

let globalNewElement;
let keyWordListItems;
let keyWordsListButtons;
let keyWordsCounter = 0;


export function setKeyWordsToLocaleStorage() {
    setKeyWordsButton.addEventListener('click', function () {
        if (KEY_WORDS.length > 0) {
            localStorage.setItem('keywords', KEY_WORDS);
        } else {
            alert('Ключевых слов нет');
            localStorage.removeItem('keywords');
            setGlobalKeyWords();
            setStartKeyWords();
        }
        getLinkToImage(randomNumGlobal);
    })
}

export function definesInputActivity() {
    let currentSourceLink = localStorage.getItem('link');
    if (currentSourceLink == 'github') {
        keyWordsInput.setAttribute('disabled', 'disabled');
        clearKeyWordsButton.setAttribute('disabled', 'disabled');
        setKeyWordsButton.setAttribute('disabled', 'disabled');
        clearKeyWordsButton.style.transform = "scale(0)";
        setKeyWordsButton.style.transform = "scale(0)";
        keyWordsList.style.transform = "scale(0)";
        keyWordsInput.style.transform = "translateY(17px)";
        keyWordsInputLabel.style.transform = "translateY(17px)";

    } else {
        keyWordsInput.removeAttribute('disabled');
        clearKeyWordsButton.removeAttribute('disabled');
        setKeyWordsButton.removeAttribute('disabled');
        clearKeyWordsButton.style.transform = "scale(1)";
        setKeyWordsButton.style.transform = "scale(1)";
        keyWordsList.style.transform = "scale(1)";
        keyWordsInput.style.transform = "translateY(0px)";
        keyWordsInputLabel.style.transform = "translateY(0px)";
    }
}

function createKeyWordsComponent(word) {

    const keyWordItem = document.createElement('div');
    const keyWordName = document.createElement('div');
    const keyWordIcon = document.createElement('div');

    keyWordItem.classList.add('keyword-item');
    keyWordItem.classList.add(keyWordsCounter);
    keyWordName.classList.add('keyword-name');
    keyWordIcon.classList.add('keyword-icon');
    keyWordIcon.id = keyWordsCounter;
    keyWordName.innerHTML = word;
    keyWordItem.append(keyWordName);
    keyWordItem.append(keyWordIcon);
    keyWordsCounter++;

    return keyWordItem;
}

function findWordListAndItems() {
    keyWordListItems = document.querySelectorAll('.keyword-item');
    keyWordsListButtons = document.querySelectorAll('.keyword-icon');
}

function deleteKeyWord() {

    findWordListAndItems()

    for (let i = 0; i < keyWordsListButtons.length; i++) {

        keyWordsListButtons[i].addEventListener('click', function (item) {
            findWordListAndItems();
            let target = item.target;
            let number = target.id;
            for (let i = 0; i < keyWordListItems.length; i++) {
                if (keyWordListItems[i].classList.contains(number)) {
                    keyWordListItems[i].classList.remove('keyword-item-visible')
                    setTimeout( () =>  keyWordListItems[i].remove(), 100)
                    KEY_WORDS.splice(i, 1);
                    keyWordsCounter--;
                    return;
                }
            }
        })
    }


}

function createAndShowKeyWords(keywords) {
    let word = keywords.trim().replace(/\s+/g, " ");
    if (word === "") {
        return;
    }
    let time = 1;
    let words = word.split(' ');
    for (let i = 0; i < words.length; i++) {
        let newElement = createKeyWordsComponent(words[i].trim());
        keyWordsList.append(newElement);
        KEY_WORDS.push(words[i]);
        globalNewElement = newElement;
        setTimeout(function () {
            newElement.classList.add('keyword-item-visible')
        }, time)
        time = time + 100;
    }
    keyWordsInput.value = "";
    deleteKeyWord();
}

function setKeyWords() {
    keyWordsInput.addEventListener('change', () => createAndShowKeyWords(keyWordsInput.value));
}

export function setStartKeyWords() {
    let wordsFromLocaleStorage = localStorage.getItem('keywords').replace(/[,]/g, ' ');
    createAndShowKeyWords(wordsFromLocaleStorage);
}

export default function initKeyWords() {
    definesInputActivity();
    setKeyWords();
}

export function clearAllKeyWords() {
    console.log(KEY_WORDS);
        let time = 100;
    for (let i = 0; i < keyWordListItems.length; i++) {
            keyWordListItems[i].classList.remove('keyword-item-visible')
            setTimeout( () =>  keyWordListItems[i].remove(), time)
            // KEY_WORDS.splice(i, 1);
            keyWordsCounter--;
    }
            localStorage.removeItem('keywords');
            KEY_WORDS = [];
}

