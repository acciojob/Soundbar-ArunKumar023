//your JS code here. If required.
var audio = null;

function playSound(soundFile) {
  if(audio != null) {
    audio.pause();
    audio.currentTime = 0;
  }

  audio = new Audio("sounds/" + soundFile);
  audio.play();
}

function stopSound() {
  if(audio != null) {
    audio.pause();
    audio.currentTime = 0;
    audio = null;
  }
}
