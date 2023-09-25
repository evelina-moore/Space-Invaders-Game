/**
 * 1. створити div
 * <div class="enemy skin1"></div>
 * давати випадкові координати для старту руху
 * 
 * 2. зробити рух ворога до низу екрану
 */



//рандомна поява ворога

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

function createEnemy() {
    if(isGameOver) {
        return;
    }
    let left = random(150,document.querySelector('body').offsetWidth - 150);

    let enemy = document.createElement('div');
    enemy.className = "enemy skin1";
    enemy.style.left = left + "px";

    app.appendChild(enemy);
    moveEnemy(enemy);
}

//ворог з'являється та видаляється (швидкість руху ворога)
function moveEnemy(enemy) {
    let speed = 4 + Math.floor(score / 10) * 5; //розрахунок швидкості залежно від очок
    let timerID = setInterval(function () {
        enemy.style.top = enemy.offsetTop + speed + "px";

        if (enemy.offsetTop > document.querySelector('body').offsetHeight) {
            removeEnemy(enemy);
            clearInterval(timerID);
            deathPlayer();
        }
    }, 1);
}

//вибух ворога
function isHit(bullet) {
    let enemies = document.querySelectorAll(".enemy");
  
    //запускаємо цикл(створюємо рахівник; пропис умову викон циклу; після дія)
    for (let i = 0; i < enemies.length; i++) {
      enemy = enemies[i];
  
      if (enemy != null && !enemy.classList.contains("boom")) {
        let top =
          bullet.offsetTop > enemy.offsetTop &&
          bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight;
        let left =
          bullet.offsetLeft > enemy.offsetLeft &&
          bullet.offsetLeft < enemy.offsetLeft + enemy.offsetWidth;
  
        if (top && left) {
          enemy.className = "enemy boom";
          burstEnemy();
          removeEnemy(enemy);
          return true;
        }
      }
    }
    return false;
  }

//видалення після вибуху
function removeEnemy(enemy) {
    if (enemy.offsetTop > document.querySelector('body').offsetHeight) {
    enemy.remove();
    } else {
        setTimeout(function () {
        enemy.remove();
        score += 2;
    updateScore();
      }, 800);
    }
}
 

