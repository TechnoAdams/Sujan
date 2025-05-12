const video = document.getElementById('videoPlayer');
const timeline = document.getElementById('timeline');
// Removed qualitySelect and qualityTag variables
// const qualitySelect = document.getElementById('quality');
// const qualityTag = document.getElementById('qualityTag');

// Toggle Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update timeline while playing
video.addEventListener('timeupdate', () => {
  timeline.max = video.duration;
  timeline.value = video.currentTime;
});

// Seek video when slider is changed
timeline.addEventListener('input', () => {
  video.currentTime = timeline.value;
});

// Removed changeQuality function entirely
/*
function changeQuality() {
  // ... quality change logic ...
}
*/

// Toggle dropdown menu
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Helper function to change video source
function changeVideoSource(src) {
    const isPlaying = !video.paused; // Check if video was playing

    video.src = src; // Set source to the new video file
    video.load(); // Load the new source

    // Add an event listener to play once the video can play
    // This handles resuming playback after loading a new source
    video.addEventListener('canplay', function() {
        if (isPlaying) video.play();
    }, { once: true }); // Use { once: true } to remove the listener after it runs

    // Hide menu after click
    document.getElementById("dropdownMenu").style.display = "none";

    // Removed quality tag and select value reset
    // qualityTag.textContent = '';
    // qualitySelect.value = 'normal';
}

// Play next video (2.mp4)
function playNextVideo() {
    changeVideoSource("2.mp4");
}

// Play second next video (21.mp4)
function playNextVideo2() {
    changeVideoSource("21.mp4");
}

// Play main episode video (22.mp4
function playMainEpisodeVideo2() {
    changeVideoSource("22.mp4");
}