let player = null;
let lifesPlayer = 5;
let screenWidth = window.innerWidth; //ширина екрану
let playerWidth = 150; //ширина гравця

function createPlayer(skin) {
  player = document.createElement("div");
  player.className = skin;
  player.id = "player";

  app.appendChild(player);
}

//швидкість руху гравця
function moveLeft() {
  if (player.offsetLeft > 0) {
    // Перевірка, щоб гравець не виходив за ліву межу
    player.style.left = player.offsetLeft - 100 + "px";
  }
}
function moveRignt() {
  if (player.offsetLeft + playerWidth < screenWidth) {
    // Перевірка, щоб гравець не виходив за праву межу
    player.style.left = player.offsetLeft + 100 + "px";
  }
}

//події для руху гравця та пострілу
document.onkeydown = function (event) {
  switch (event.code) {
    //постріл
    case "Space":
      shot();
      break;
    //рух гравця
    case "ArrowRight":
      moveRignt();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
  }
};

// вистріли з різних скінів // перевірка попадання в елементи гри
function shot() {
  let bullet1 = document.createElement("div");
  bullet1.className = "bullet";
  bullet1.style.top = player.offsetTop + "px";

  if (player.classList.contains("skin1")) {
    bullet1.style.left = player.offsetLeft + player.offsetWidth / 2 + "px";
    blasterSound();
  } else if (player.classList.contains("skin2")) {
    blasterSound2();
    bullet1.style.left = player.offsetLeft + 60 + "px";
  } else if (player.classList.contains("skin3")) {
    bullet1.style.left = player.offsetLeft + 130 + "px";
    blasterSound3();
  }

  app.appendChild(bullet1);

  let timerID = setInterval(function () {
    let hitEnemy = isHit(bullet1); // перевірка влучання ворога
    let hitAsteroid = isHitAsteroid(bullet1); // перевірка влучання астероїда
    let hitHeartBonus = isHitHeartBonus(bullet1); // перевірка влучання серце-бонусу
    let hitBombBonus = isHitBombBonus(bullet1);

    if (
      hitEnemy ||
      hitAsteroid ||
      hitHeartBonus ||
      hitBombBonus ||
      bullet1.offsetTop < 0
    ) {
      bullet1.remove();
      clearInterval(timerID);
    }
    bullet1.style.top = bullet1.offsetTop - 10 + "px";
  }, 100);

  if (player.classList.contains("skin2")) {
    let bullet2 = document.createElement("div");
    bullet2.className = "bullet";
    bullet2.style.top = player.offsetTop + "px";
    bullet2.style.left = player.offsetLeft + 85 + "px";
    app.appendChild(bullet2);

    let timerID2 = setInterval(function () {
      let hitEnemy = isHit(bullet2);
      let hitAsteroid = isHitAsteroid(bullet2);
      let hitHeartBonus = isHitHeartBonus(bullet2); // перевірка влучання серце-бонусу
      let hitBombBonus = isHitBombBonus(bullet2);

      if (
        hitEnemy ||
        hitAsteroid ||
        hitHeartBonus ||
        hitBombBonus ||
        bullet2.offsetTop < 0
      ) {
        bullet2.remove();
        clearInterval(timerID2);
      }

      bullet2.style.top = bullet2.offsetTop - 10 + "px";
    }, 100);
  }

  if (player.classList.contains("skin3")) {
    let bullet3 = document.createElement("div");
    bullet3.className = "bullet";
    bullet3.style.top = player.offsetTop + "px";
    bullet3.style.left = player.offsetLeft + 10 + "px";
    app.appendChild(bullet3);

    let timerID3 = setInterval(function () {
      let hitEnemy = isHit(bullet3);
      let hitAsteroid = isHitAsteroid(bullet3);
      let hitHeartBonus = isHitHeartBonus(bullet3); // перевірка влучання серце-бонусу
      let hitBombBonus = isHitBombBonus(bullet3);

      if (
        hitEnemy ||
        hitAsteroid ||
        hitHeartBonus ||
        hitBombBonus ||
        bullet3.offsetTop < 0
      ) {
        bullet3.remove();
        clearInterval(timerID3);
      }

      bullet3.style.top = bullet3.offsetTop - 10 + "px";
    }, 100);
  }
}

// Смерть гравця
function deathPlayer() {
  lifesPlayer--;

  if (lifesPlayer <= 0) {
    endGame();
  }
  heartIconsPlayer();
}

// Життя видаляються, якщо не знищувати ворогів
function heartIconsPlayer() {
  let lifesBlock = document.querySelector(".menu .lifes");
  lifesBlock.innerHTML = "";
  for (let i = 0; i < lifesPlayer; i++) {
    let span = document.createElement("span");

    lifesBlock.appendChild(span);
  }
}

//вибух всіх ворогів та астероїдів при попаданні в бомбу
function burstAllEnemies() {
  let enemies = document.querySelectorAll(".enemy");
  let asteroids = document.querySelectorAll(".asteroid");

  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    if (enemy != null && !enemy.classList.contains("boom")) {
      enemy.className = "enemy boom";
      removeEnemy(enemy);
    }
  }

  for (let i = 0; i < asteroids.length; i++) {
    let asteroid = asteroids[i];
    if (asteroid != null && !asteroid.classList.contains("boom")) {
      asteroid.className = "asteroid boom";
      removeAsteroid(asteroid);
    }
  }
}
