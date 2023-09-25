let audio = document.querySelector("audio");
audio.volume = 0.1;

let audioPlayer = document.getElementById("audio-player");
audioPlayer.currentTime = 35;

function blasterSound() {
  let blasterSound = new Audio("sound/blaster.mp3");
  blasterSound.volume = 0.1;
  blasterSound.muted = muted;
  blasterSound.play();
}
function blasterSound2() {
  let blasterSound2 = new Audio("sound/blaster2.mp3");
  blasterSound2.volume = 0.1;
  blasterSound2.muted = muted;
  blasterSound2.play();
}
function blasterSound3() {
  let blasterSound3 = new Audio("sound/blaster3.mp3");
  blasterSound3.volume = 0.1;
  blasterSound3.muted = muted;
  blasterSound3.play();
}

function burstAsteroid() {
  let burstAsteroid = new Audio("sound/burst2.mp3");
  burstAsteroid.volume = 0.2;
  burstAsteroid.muted = muted;
  burstAsteroid.play();
}

function burstEnemy() {
  let burstEnemy = new Audio("sound/burst1.mp3");
  burstEnemy.volume = 0.2;
  burstEnemy.muted = muted;
  burstEnemy.play();
}

function burstHeartBonus() {
  let burstHeartBonus = new Audio("sound/heartBonus.mp3");
  burstHeartBonus.volume = 0.2;
  burstHeartBonus.muted = muted;
  burstHeartBonus.play();
  lifesPlayer++; // додавання життя
  heartIconsPlayer(); // оновлення відображення життів
}

function burstBombBonus() {
  let burstBombBonus = new Audio("sound/bomb-audio.mp3");
  burstBombBonus.volume = 0.5;
  burstBombBonus.muted = muted;
  burstBombBonus.play();
  burstAllEnemies(); //вибух всіх ворогів та астероїдів
}

let soundBtn = document.querySelector(".menu .sound");
let volume = true;
let muted = false;

soundBtn.onclick = function () {
  let soundOnIcon = document.querySelector(".menu .sound .sound-on");
  let soundOffIcon = document.querySelector(".menu .sound .sound-off");

  if (!muted) {
    soundOnIcon.classList.add("hidden");
    soundOffIcon.classList.remove("hidden");
    muted = true;
  } else {
    soundOffIcon.classList.add("hidden");
    soundOnIcon.classList.remove("hidden");
    muted = false;
  }
  audioPlayer.muted = muted;
};
