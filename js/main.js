const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay-message')
const enterPhrase = document.querySelector('.press-enter')
const menuMusic = document.getElementById('bgMusic')
menuMusic.load();


document.addEventListener('click', () => {
    menuMusic.play();
    overlay.classList.add('hidden');
    overlayContent.classList.add('hidden');
    enterPhrase.classList.add('hidden')
})


const musicIcon = document.querySelector('.sound-icon')
let music = true;

musicIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    if(music){
        menuMusic.pause();
        music = false;
        console.log("Music is pause")
    }else{
        menuMusic.play();
        music = true;
        console.log("Music is playing")
    }
})