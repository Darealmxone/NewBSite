const sentences = [
  'First sentence.',
  'Second sentence.',
  'Third sentence.'
  // Add more sentences as needed
];

let currentSentence = 0;
let currentChar = 0;
let typingSpeed = 150;
let erasingSpeed = 100;
let typewriterDiv = document.getElementById('typewriter');
let heartDiv = document.getElementById('heart');
let buttonContainer = document.getElementById('buttonContainer');

function explodeHeart() {
  heartDiv.style.animation = 'none';
  heartDiv.textContent = ''; // Clear the heart
  typewriterDiv.style.opacity = 1; // Make typewriter visible
  setTimeout(type, 500); // Wait half a second before starting to type
}

function type() {
  if (currentChar < sentences[currentSentence].length) {
    typewriterDiv.textContent += sentences[currentSentence][currentChar++];
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, typingSpeed);
  }
}

function erase() {
  if (currentChar > 0) {
    typewriterDiv.textContent = sentences[currentSentence].substring(0, currentChar - 1);
    currentChar--;
    setTimeout(erase, erasingSpeed);
  } else {
    currentSentence++;
    if (currentSentence >= sentences.length) {
      buttonContainer.classList.add('showButton'); /* Add class to start button animation */
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

setTimeout(explodeHeart, 2000); // Start the heart explosion effect after 2 seconds
