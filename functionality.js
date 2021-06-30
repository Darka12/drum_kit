// Listens for the keydown event and when keydown event happens run function
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
})