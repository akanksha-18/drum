const drums = [
    { sound: 'assets/crash.mp3', image: 'assets/crash.png', key: 'A' },
    { sound: 'assets/kick.mp3', image: 'assets/drummer.avif', key: 'B' },
    { sound: 'assets/snare.mp3', image: 'assets/snare.png', key: 'C' },
    { sound: 'assets/tom.mp3', image: 'assets/tom.png', key: 'D' },
];

const rightDiv = document.getElementById('right');

// Function to create a drum box
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

    // Play sound when clicked
    box.addEventListener('click', () => playSound(drum.sound));

    return box;
}

// Function to play the sound
function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}

// Create the drum boxes and add them to the DOM
drums.forEach(drum => {
    const drumBox = createDrumBox(drum);
    rightDiv.appendChild(drumBox);
});

// Listen for keypress events to play sound based on keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase(); // Capture the key and convert to uppercase

    // Find the drum corresponding to the pressed key
    const drum = drums.find(drum => drum.key === key);
    
    // If a matching drum is found, play the sound
    if (drum) {
        playSound(drum.sound);
    }
});
