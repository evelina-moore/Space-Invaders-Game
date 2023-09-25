// створення бонусу серце+
function createHeartBonus() {
    if(isGameOver) {
        return;
    }
    let left = random(150, document.querySelector('body').offsetWidth - 150);

    let heartBonus = document.createElement('div');
    heartBonus.className = "heart-bonus skin";
    heartBonus.style.left = left + "px";

    app.appendChild(heartBonus);
    moveHeartBonus(heartBonus);
}

// серце-бонус з'являється та видаляється (швидкість руху серце-бонусу)
function moveHeartBonus(heartBonus) {
    let timerID = setInterval(function () {
        heartBonus.style.top = heartBonus.offsetTop + 3 + "px";

        if (heartBonus.offsetTop > document.querySelector('body').offsetHeight) {
            removeHeartBonus(heartBonus);
            clearInterval(timerID);
        }
    }, 80);
}

//вибух серця-бонусу
function isHitHeartBonus(bullet) {
    let heartBonuses = document.querySelectorAll(".heart-bonus");
  
    for (let i = 0; i < heartBonuses.length; i++) {
      let heartBonus = heartBonuses[i];
  
      if (heartBonus != null && !heartBonus.classList.contains("boom")) {
        let top =
          bullet.offsetTop > heartBonus.offsetTop &&
          bullet.offsetTop < heartBonus.offsetTop + heartBonus.offsetHeight;
        let left =
          bullet.offsetLeft > heartBonus.offsetLeft &&
          bullet.offsetLeft < heartBonus.offsetLeft + heartBonus.offsetWidth;
  
        if (top && left) {
          heartBonus.className = "heart-bonus boom";
          burstHeartBonus();
          removeHeartBonus(heartBonus);
          return true;
        }
      }
    }
    return false;
  }

// видалення серця після вибуху
function removeHeartBonus(heartBonus) {
    setTimeout(function () {
        heartBonus.remove();
      }, 800);
    }


    // створення бомби-бонусу
function createBombBonus() {
    if(isGameOver) {
        return;
    }
    let left = random(150, document.querySelector('body').offsetWidth - 150);

    let bombBonus = document.createElement('div');
    bombBonus.className = "bomb-bonus skin";
    bombBonus.style.left = left + "px";

    app.appendChild(bombBonus);
    moveBombBonus(bombBonus);
}

// серце-бонус з'являється та видаляється (швидкість руху серце-бонусу)
function moveBombBonus(bombBonus) {
    let timerID = setInterval(function () {
        bombBonus.style.top = bombBonus.offsetTop + 3 + "px";

        if (bombBonus.offsetTop > document.querySelector('body').offsetHeight) {
            removeBombBonus(bombBonus);
            clearInterval(timerID);
        }
    }, 80);
}

//вибух бомби бонусу
function isHitBombBonus(bullet) {
    let bombBonuses = document.querySelectorAll(".bomb-bonus");
  
    for (let i = 0; i < bombBonuses.length; i++) {
      let bombBonus = bombBonuses[i];
  
      if (bombBonus != null && !bombBonus.classList.contains("boom")) {
        let top =
          bullet.offsetTop > bombBonus.offsetTop &&
          bullet.offsetTop < bombBonus.offsetTop + bombBonus.offsetHeight;
        let left =
          bullet.offsetLeft > bombBonus.offsetLeft &&
          bullet.offsetLeft < bombBonus.offsetLeft + bombBonus.offsetWidth;
  
        if (top && left) {
          bombBonus.className = "bomb-bonus boom";
          burstBombBonus();
          removeBombBonus(bombBonus);
          return true;
        }
      }
    }
    return false;
}

// видалення бомби після вибуху
function removeBombBonus(bombBonus) {
    setTimeout(function () {
        bombBonus.remove();
      }, 800);
    }
   
