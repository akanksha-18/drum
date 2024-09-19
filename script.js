
const drums = [
    { sound: 'assets/crash.mp3', image: 'assets/crash.png', key: 'A' },
    { sound: 'assets/kick.mp3', image: 'assets/drummer.avif', key: 'B' },
    { sound: 'assets/snare.mp3', image: 'assets/snare.png', key: 'C' },
    { sound: 'assets/tom.mp3', image: 'assets/tom.png', key: 'D' },
];

const rightDiv = document.getElementById('right');


function createDrumBox(drum) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('data-sound', drum.sound);

    const img = document.createElement('img');
    img.src = drum.image;
    img.alt = `Drum ${drum.key}`;
    
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    keyDiv.textContent = drum.key;

    box.appendChild(img);
    box.appendChild(keyDiv);

   
    box.addEventListener('click', () => {
        const audio = new Audio(drum.sound);
        audio.play();
    });

    return box;
}


drums.forEach(drum => {
    const drumBox = createDrumBox(drum);
    rightDiv.appendChild(drumBox);
});
