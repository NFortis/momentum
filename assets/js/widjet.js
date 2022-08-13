const widgetsButtons = document.querySelectorAll('.checkbox');
const className = 'invisible';
const classNameForButton = 'inactive';



export default function listenerForWidjetsButons() {
    for (let i = 0; i<widgetsButtons.length; i++){
        widgetsButtons[i].addEventListener('click', function(event){
            let obj = event.target;
            changeClassWidjet(obj.id)
        })
    }
}



export function changeClassWidjet(nameOfWidjet) {
    let widjet = document.getElementById(nameOfWidjet+'1');
    let widjetButton = document.getElementById(nameOfWidjet);
    widjetButton.classList.toggle(classNameForButton);
            widjet.style.transition = '300ms linear';
            widjet.classList.toggle(className);
            if (localStorage.getItem(nameOfWidjet) == 'true') {
                localStorage.removeItem(nameOfWidjet);
                localStorage.setItem(nameOfWidjet, 'false');
            } else {
                localStorage.removeItem(nameOfWidjet);
                localStorage.setItem(nameOfWidjet, 'true');
            }
}

export function startClassListInWidjets(nameOfWidjet, isActive) {
    let widjet = document.getElementById(nameOfWidjet+'1');
    let widjetButton = document.getElementById(nameOfWidjet);
    if (isActive == 'false') {
        widjet.classList.add(className);
        widjetButton.classList.add(classNameForButton);
    } else {
        widjet.classList.remove(className);
        widjetButton.classList.remove(classNameForButton);
    }
}
