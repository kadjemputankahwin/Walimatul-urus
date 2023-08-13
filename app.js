const body = document.body;

function openTogglePopup1() {
  document.getElementById("calendarPopup").classList.toggle("active");
  body.style.overflow = 'hidden';
}

function closeTogglePopup1() {
  document.getElementById("calendarPopup").classList.toggle("active");
  body.style.overflow = 'auto';
}

function openTogglePopup2() {
  document.getElementById("contactPopup").classList.toggle("active");
  body.style.overflow = 'hidden';
}

function closeTogglePopup2() {
  document.getElementById("contactPopup").classList.toggle("active");
  body.style.overflow = 'auto';
}

function openTogglePopup3() {
  document.getElementById("locationPopup").classList.toggle("active");
  body.style.overflow = 'hidden';
}

function closeTogglePopup3() {
  document.getElementById("locationPopup").classList.toggle("active");
  body.style.overflow = 'auto';
}


document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const playButton = document.getElementById("play-btn");

  playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.textContent = "◼";
      playButton.style.color = "#fff";
    } else {
      audioPlayer.pause();
      playButton.textContent = "▶";
    }
  });
});
