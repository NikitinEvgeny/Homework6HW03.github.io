const trafficLightEl = document.querySelector('#trafficLight');

trafficLightEl.addEventListener('click', makeGreen);


function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
 
}

function makeYellow() {
    trafficLightEl.style.background = ('Yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click',makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('Red');
    trafficLightEl.removeEventListener('click',makeRed );
    trafficLightEl.addEventListener('click', makeGreen);
}





