const scope = document.getElementById('score');
const timeLeft = document.getElementById('timeLeft');
//const squares = document.getElementsByClassName('square');
const squares = document.querySelectorAll('.square');
const mole = document.getElementsByClassName('mole');

let result = 0;
let hitPosition = null;
let alreadyHit = 0;
let currentTime = timeLeft.textContent;


function randomSquare() {
    squares.forEach(item => item.classList.remove('mole'));

    let randomSquareKey = squares[Math.floor(Math.random() * 9)];
    randomSquareKey.classList.add('mole');


    alreadyHit = 0;
    // assign hit position, active position of mole
    hitPosition = randomSquareKey.id;

}

squares.forEach((item) => {
    item.addEventListener('click', () => {
       if (hitPosition === item.id && alreadyHit === 0) {
           result++;
           alreadyHit = 1;
           scope.textContent = result;
       }
    });
});

function countDown() {
    --currentTime;

    timeLeft.textContent = currentTime;

    if (currentTime <= 0) {
        clearInterval(timerId);
        clearInterval(timerId2);
        alert(`Game over! Final score is: ${result}`);
    }
}

let timerId2 = setInterval(randomSquare, 1000);
let timerId = setInterval(countDown, 1000);