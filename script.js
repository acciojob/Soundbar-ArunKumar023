//your JS code here. If required.

function playSong(file) {
	var audio = new Audio('sounds/' + file)
	audio.play()
}

function stopAllSong() {
	var songs = document.getElementsByTagName('audio')
	for (let i = 0; i < songs.length; i++) {
		songs[i].pause()
		songs[i].currentTime = 0
	}
}
