const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay-message')
const enterPhrase = document.querySelector('.press-enter')
const menuMusic = document.getElementById('bgMusic')
menuMusic.load();


const hasVisited = localStorage.getItem('hasVisitedGame');
let musicHasStarted = false;
let musicIsMuted = localStorage.getItem('musicMuted') === 'true';


if (hasVisited) {
    overlay.classList.add('hidden');
    overlayContent.classList.add('hidden');
    enterPhrase.classList.add('hidden');
    menuMusic.play();
    musicHasStarted = true;
}

if (musicIsMuted) {
    menuMusic.pause();
    document.querySelector('.sound-icon').classList.add('grayed');
}

const startInteraction = () => {
    if (!musicHasStarted && !hasVisited) {
        menuMusic.play();
        overlay.classList.add('hidden');
        overlayContent.classList.add('hidden');
        enterPhrase.classList.add('hidden');
        musicHasStarted = true;
        localStorage.setItem('hasVisitedGame', 'true');
        document.removeEventListener('click', startInteraction);
    }
}

document.addEventListener('click', startInteraction);

const musicIcon = document.querySelector('.sound-icon')
let music = !musicIsMuted;

musicIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    if (music) {
        menuMusic.pause();
        music = false;
        musicIcon.classList.add('grayed');
        localStorage.setItem('musicMuted', 'true');
        console.log("Music is pause");
    } else {
        menuMusic.play();
        music = true;
        musicIcon.classList.remove('grayed');
        localStorage.setItem('musicMuted', 'false');
        console.log("Music is playing");
    }
})