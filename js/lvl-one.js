const startBtn = document.querySelector('.start-btn');
const lvlContent = document.querySelector('.lvl-container');
const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay-content')

overlayContent.style.display = 'none';

startBtn.addEventListener('click', () => {
    lvlContent.classList.add('hidden');
    overlayContent.style.display = 'block';
})


let countDownDisplay = document.querySelector('.game-countdown')
const gameHeader = document.querySelector('.game-header');
countDownDisplay.style.display = 'none';
gameHeader.style.display = 'none';


overlayContent.addEventListener('click', () => {
    overlayContent.style.display = 'none';
    countDownDisplay.style.display = 'block';
    startGame();
})

function startGame (){
    countDownValue = 3; 
    countDownDisplay.innerHTML = countDownValue;

    const timer = setInterval(countTimer, 1000);
    function countTimer(){
        countDownValue--;
        countDownDisplay.innerHTML = countDownValue;

        if (countDownValue === 0){
            countDownDisplay.innerHTML = "Go!";
            clearInterval(timer);
            setTimeout(function(){
                countDownDisplay.style.display = 'none';
            },1500);
        }
    }
}