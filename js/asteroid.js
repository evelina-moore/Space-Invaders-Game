/**
 * 1. зробити рух астероїда
 * 2. зробити збиття 
 * - додати ефект вибуху
 * 3. зробити поворот астероїда
 */




// створення астероїда

function randomAsteroid(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
function createAsteroid() {
    if(isGameOver) {
        return;
    }
    let left = random(150, document.querySelector('body').offsetWidth - 150);

    let asteroid = document.createElement('div');
    asteroid.className = "asteroid skin";
    asteroid.style.left = left + "px";

    app.appendChild(asteroid);
    moveAsteroid(asteroid);
}

// астероїд з'являється та видаляється (швидкість руху астероїда)
function moveAsteroid(asteroid) {
    let timerID = setInterval(function () {
        asteroid.style.top = asteroid.offsetTop + 1 + "px";

        if (asteroid.offsetTop > document.querySelector('body').offsetHeight) {
            removeAsteroid(asteroid);
            clearInterval(timerID);
            deathPlayer();
        }
    }, 30);
}

//вибух астероїда
function isHitAsteroid(bullet) {
    let asteroids = document.querySelectorAll(".asteroid");
  
    for (let i = 0; i < asteroids.length; i++) {
      let asteroid = asteroids[i];
  
      if (asteroid != null && !asteroid.classList.contains("boom")) {
        let top =
          bullet.offsetTop > asteroid.offsetTop &&
          bullet.offsetTop < asteroid.offsetTop + asteroid.offsetHeight;
        let left =
          bullet.offsetLeft > asteroid.offsetLeft &&
          bullet.offsetLeft < asteroid.offsetLeft + asteroid.offsetWidth;
  
        if (top && left) {
          asteroid.className = "asteroid boom";
          burstAsteroid();
          removeAsteroid(asteroid);
          return true;
        }
      }
    }
    return false;
  }
  

// видалення після вибуху
function removeAsteroid(asteroid) {
    if(asteroid.offsetTop > document.querySelector('body').offsetHeight) {
        asteroid.remove();
    } else {
    setTimeout(function () {
        asteroid.remove();
        score += 1;
        updateScore();
      }, 800);
    }
}

function updateScore() {
    let scoreBlock = document.getElementById('score');
    scoreBlock.textContent = score;
}    

// створення планет
function createPlanet() {
  let skin = 'skin-' + random(1, 4);
  let planet = document.createElement('div');
  planet.className = 'planet ' + skin;
  planet.style.left = random(100, document.querySelector('body').offsetWidth) + "px";

  app.appendChild(planet);
  let timerID = setInterval(function() {
          planet.style.top = planet.offsetTop + 10 + "px";

          if(planet.offsetTop > document.querySelector('body').offsetHeight) {
              planet.remove();
              clearInterval(timerID);
              setTimeout(function() {
              createPlanet();
              }, random(1000, 10000))
          }
      }, 10);    
  
  }
setTimeout(function() {
  createPlanet();
}, random(0))
