import showDate from "./date";
const time = document.querySelector('.time');
showDate();

export default function showTime() {
    const date = new Date;
    const currentTime = date.toLocaleTimeString();
    time.innerHTML = currentTime;
    setTimeout(showTime, 1000);
    setTimeout(showDate, 1000);
} 
