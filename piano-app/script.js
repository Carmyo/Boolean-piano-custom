const keyElements = document.querySelectorAll('.key');


const sounds = {
    R2D2: 'R2D2-Scream.mp3',
    blaster: 'blaster-sound.mp3',
    c3p0: 'C-3P0.mp3',
    jabba: 'Jabba- Laughing.mp3',
    utinni: 'utinni.mp3',
    useforce: 'useforce.mp3',
    vader: 'vader.mp3',
    chewbecca: 'chewbecca.mp3',
    emperor: 'emperor.mp3',
    lightsaber: 'lightsaber.mp3',
    atatalarm: 'atatalarm.mp3',
    bb8: 'bb8.mp3',
}
function playSound(key) {
    console.log('ciao suono');
    const audioElement = new Audio();
    const sound = sounds [key];
    audioElement.src = 'sounds/' + sound;
    audioElement.play();
}

keyElements.forEach(function(keyElement) {
    keyElement.addEventListener('touchend', function() {
        const key = keyElement.id;
        playSound(key);
    });
});




