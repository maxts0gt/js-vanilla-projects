const video = document.getElementById('video');
const play = document.getElementById('play');
const stopV = document.getElementById('stopV');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause Video
function toggleVideoStatus() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

// Update play pause icon
function updatePlayIcon() {
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
}

// Update play pause icon
function updateProgress() {
	progress.value = (video.currentTime / video.duration) * 100;

	let mins = Math.floor(video.currentTime / 60);
	if (mins < 10) {
		mins = '0' + String(mins);
	}

	let seconds = Math.floor(video.currentTime % 60);
	if (seconds < 10) {
		seconds = '0' + String(seconds);
	}

	timestamp.innerHTML = `${mins}:${seconds}`;
}

// Set video time to progress
function setVideoProgress() {
	video.currentTime = (+progress.value * video.duration) / 100;
}

function stopVideo() {
	video.currentTime = 0;
	video.pause();
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stopV.addEventListener('click', stopVideo);
progress.addEventListener('click', setVideoProgress);
