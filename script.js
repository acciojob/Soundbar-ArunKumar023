//your JS code here. If required.

function playSound(filename) {
	var audio = new Audio('sounds/' + filename);
	audio.play();
}

function stopAllSounds() {
	var sounds = document.getElementsByTagName('audio');
	for (var i = 0; i < sounds.length; i++) {
		sounds[i].pause();
		sounds[i].currentTime = 0;
	}
}
