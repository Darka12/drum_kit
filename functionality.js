// Listens for the keydown event and when keydown event happens run function
window.addEventListener('keydown', function(e) { 
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`); // Checks if the key pressed has a corresponding audio element (checks with key codes)
    const transition = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    if(!audio) return; // If the key does not have an audio element then stop the function
    transition.classList.add('playing');
    audio.currentTime = 0; // Rewinds the audio to the beginning on every click
    audio.play(); // Plays the relevent audio  
})

