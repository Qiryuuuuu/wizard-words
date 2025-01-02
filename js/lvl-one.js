const startBtn = document.querySelector('.start-btn');
const lvlContent = document.querySelector('.lvl-container');
const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay-content')

overlayContent.style.display = 'none'

startBtn.addEventListener('click', () => {
    lvlContent.classList.add('hidden');
    overlayContent.style.display = "block"
})