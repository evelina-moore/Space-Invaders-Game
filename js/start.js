let btnStartGame = document.getElementById('btnStartGame');



btnStartGame.onclick = function () {

    let skin = document.querySelector('.skins input[type=radio]:checked').value;
    let startGameBlock = document.querySelector('.start-game');
    startGameBlock.style.display = 'none';
    let scoreBlock = document.getElementById('score');
    scoreBlock.style.display = 'block';
    createPlayer(skin);
    createAsteroid();
    autoCreateAsteroid();
    createEnemy();
    autoCreateEnemy();
    audioPlayer.play();
    heartIconsPlayer();
    createHeartBonus();
    autoCreateHeartBonus();
    createBombBonus();
    autoCreateBombBonus();
}

function endGame() {
    let endGameBlock = document.querySelector('.end-game');
    let scoreElement = endGameBlock.querySelector('.result');
    scoreElement.textContent = "Score: " + score; // відображення набраних очок
    endGameBlock.classList.remove('hidden');
    isGameOver = true;
    app.innerHTML = "";
    
    let scoreBlock = document.getElementById('score');
    scoreBlock.remove();
}

let btnRestartGame = document.getElementById('btnRestartGame');
btnRestartGame.onclick = function() {
    location.reload();
}

// функція для автоматичного створення астероїда
function autoCreateAsteroid() {
    setInterval(function() {
        if (!isGameOver) {
            createAsteroid();
        }
        
    }, 3000);
}

// функція для автоматичного створення ворога
function autoCreateEnemy() {
    setInterval(function() {
        if (!isGameOver) {
        createEnemy();
        }
    }, 3000);
}

// функція для автоматичного створення серця-бонусу
function autoCreateHeartBonus() {
    setInterval(function() {
        if (!isGameOver) {
        createHeartBonus();
        }
    }, 50000);
}

// функція для автоматичного створення серця-бонусу
function autoCreateBombBonus() {
    setInterval(function() {
        if (!isGameOver) {
        createBombBonus();
        }
    }, 50000);
}
