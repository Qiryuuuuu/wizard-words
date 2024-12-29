const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay-message')
const enterPhrase = document.querySelector('.press-enter')
const menuMusic = document.getElementById('bgMusic')
menuMusic.load();

let musicHasStarted = false;

const startInteraction = () => {
    if(!musicHasStarted){
        menuMusic.play();
        overlay.classList.add('hidden');
        overlayContent.classList.add('hidden');
        enterPhrase.classList.add('hidden')
        musicHasStarted = true;
        document.removeEventListener('click' , startInteraction)
    }
}

document.addEventListener('click', startInteraction);


const musicIcon = document.querySelector('.sound-icon')
let music = true;

musicIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    if(music){
        menuMusic.pause();
        music = false;
        musicIcon.classList.add('grayed')
        console.log("Music is pause")
    }else{
        menuMusic.play();
        music = true;
        musicIcon.classList.remove('grayed')
        console.log("Music is playing")
    }
})