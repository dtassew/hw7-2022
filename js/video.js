var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("Speed: " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("Speed: " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Video Current Time: " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		document.querySelector("#volume").innerHTML = "100%"
	
	} else {
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		document.querySelector("#volume").innerHTML = "0%"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Current Volume is: " + video.volume)
	video.volume = this.value / 100
	console.log("New Volume is: " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Style: 'oldSchool'") 
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Style: 'original'") 
	video.classList.remove("oldSchool")
});


