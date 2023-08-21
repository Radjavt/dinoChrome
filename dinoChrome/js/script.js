const dino = document.querySelector('.dino');
const cacto = document.querySelector('.cacto');
const timerElement = document.getElementById('timer');
const recordElement = document.getElementById('record');

let seconds = 0;
let timerInterval;
let highestRecord = localStorage.getItem('highestRecord') || 0;

recordElement.textContent = `Recorde: ${highestRecord}`;

const jump = () => {
    dino.classList.add('jump');

    setTimeout(() => {
        dino.classList.remove('jump');
    }, 500);
}

const updateTimer = () => {
    seconds++;
    timerElement.textContent = `Tempo: ${seconds}`;

    if (seconds > highestRecord) {
        highestRecord = seconds;
        localStorage.setItem('highestRecord', highestRecord);
        recordElement.textContent = `Recorde: ${highestRecord}`;
    }
}

const stopGame = () => {
    clearInterval(timerInterval);
    dino.src = './images/DINOmedo.png';
    dino.style.width = '100px';
    dino.style.marginLeft = '50px';
}

const loop = setInterval(() => {
    const cactoPosition = cacto.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');

    if (cactoPosition <= 120 && cactoPosition > 0 && dinoPosition < 80) {
        cacto.style.animation = 'none';
        cacto.style.left = `${cactoPosition}px`;

        dino.style.animation = 'none';
        dino.style.bottom = `${dinoPosition}px`;

        stopGame();

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);

timerInterval = setInterval(updateTimer, 1000);

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    seconds = 0;
    timerInterval = setInterval(updateTimer, 1000);
});