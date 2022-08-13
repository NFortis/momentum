import initSetting from "./setting";
initSetting();

import initPanel from "./settingPanel";
initPanel();

import showTime from "./time";
showTime();

import showGreeting from "./greeting";
showGreeting();

import initSliders from "./slider";
initSliders();

import initQuotes from "./quotes";
initQuotes();

import initWeather from "./weather";
initWeather();

import initPlayList from "./player";
initPlayList();

import initTraslation from "./translation";
initTraslation();

import initSourceImage from "./imageSource";
initSourceImage();

import initKeyWords from "./keywords";
import { clearAllKeyWords } from "./keywords";
import { setKeyWordsToLocaleStorage } from "./keywords";
import { setStartKeyWords } from "./keywords";
import { clearKeyWordsButton } from "./keywords";
initKeyWords();
setKeyWordsToLocaleStorage();
setStartKeyWords();
clearKeyWordsButton.addEventListener('click', clearAllKeyWords);

import listenerForWidjetsButons from "./widjet";
listenerForWidjetsButons();
