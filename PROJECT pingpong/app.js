const btnP1 = document.querySelector('#btnP1');
const btnP2 = document.querySelector('#btnP2');
const btnReset = document.querySelector('#reset');

const displayP1 = document.querySelector('#left');
const displayP2 = document.querySelector('#right');

const btnSelect = document.querySelector('#playTo');
let winningScore = 5;

btnSelect.addEventListener('change', function () {
    winningScore = parseInt(btnSelect.value);
    reset();
})


let scoreP1 = 0;
let scoreP2 = 0;
let isGameOver = false;

//button to add points to Player 1
btnP1.addEventListener('click', function () {

    if (!isGameOver) {
        scoreP1++;
        if (scoreP1 === winningScore) {
            isGameOver = true;
            displayP1.classList.add('has-text-success');
            displayP2.classList.add('has-text-danger');

            btnP1.disabled = true;
            btnP2.disabled = true;
        }
    }
    displayP1.innerText = scoreP1;
})


//button to add points to Player 2
btnP2.addEventListener('click', function () {

    if (!isGameOver) {
        scoreP2++;
        if (scoreP2 === winningScore) {
            isGameOver = true;
            displayP1.classList.add('has-text-danger');
            displayP2.classList.add('has-text-success');

            btnP1.disabled = true;
            btnP2.disabled = true;
        }
    }
    displayP2.innerText = scoreP2;
})

//button to add points to reset
btnReset.addEventListener('click', reset);


function reset() {
    scoreP1 = 0;
    scoreP2 = 0;
    displayP1.innerText = scoreP1;
    displayP2.innerText = scoreP2;
    isGameOver = false;

    displayP1.classList.remove('has-text-success', 'has-text-danger');
    displayP2.classList.remove('has-text-success', 'has-text-danger');

    btnP1.disabled = false;
    btnP2.disabled = false;


}
