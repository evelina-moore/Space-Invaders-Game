
let app = document.querySelector('#game-elements');

let isGameOver = false;

// рахунок
let score = 0; //зміна для зберігання кількості очків


// заставка на початку гри
window.addEventListener('load', function() {
  let loadingScreen = document.getElementById('loading-screen');

  setTimeout(function() {
    loadingScreen.style.display = 'none';
  }, 1500);

  let loader = document.querySelector('.loader');
  loader.classList.add('loaded');
});


