let points = 50;
let countPvt = 3; 
let count = 3;
let seconds = 0;
let tempF = setInterval(countFirst, 1000);
function countFirst() {
  let txtCount;
  let txtCountPvt;
  txtCountPvt = countPvt;
  txtCount = count;
  document.getElementById("count").innerHTML = txtCount;
  count--;
  if (count < 0) {
    clearInterval(tempF);
  }
  document.getElementById("count-pvt").innerHTML = txtCountPvt;
  countPvt--;
  if (countPvt < 0) {
    clearInterval(tempF);
  }
}
setTimeout(() => {
  const dis = document.querySelector(".principal");
  const sec = document.querySelector("section");
  const head = document.querySelector("header");
  dis.classList.add("displayN");
  sec.classList.remove("displayN");
  head.classList.remove("displayN");
}, 5100);
setTimeout(() => {
  let temp = setInterval(secondsCont, 1000);
  let point = setInterval(pointsCont, 1000);
  function pointsCont() {
    let txtPoints;
    if(seconds > 10) {
      txtPoints = points;
      points--;
    }
    document.getElementById("h4").innerHTML = txtPoints;
  }
  function secondsCont() {
    let txtSeconds;
    const screenEnd = document.getElementById("screenEnd");
    const sec = document.querySelector("section");
    const head = document.querySelector("header");
    const object = document.querySelector(".object");
    const winner = document.getElementById("win");
    if (seconds < 10) {
      txtSeconds = `0${seconds}`;
    } else {
      txtSeconds = seconds;
    }
    document.getElementById("seconds").innerHTML = txtSeconds;
    seconds++;

    if (seconds == 52) {
      clearInterval(point);
    }
    // win interface
    const rectA = object.getBoundingClientRect();
    const rectW = winner.getBoundingClientRect();
    if (
      rectA.left < rectW.right &&
      rectA.right > rectW.left &&
      rectA.top < rectW.bottom &&
      rectA.bottom > rectW.top
    ) {
      // Colisión detectada, mostrar interface
      allowMovement = false;
      isDragging = false;
      clearInterval(temp);
      clearInterval(point);
      seconds--;
      sec.classList.add("end");
      head.classList.add("end");
      setTimeout(()=>{
        sec.classList.add("displayN");
        head.classList.add("displayN");
        screenEnd.classList.remove("displayN");
        document.getElementById("countEnd").innerHTML = txtSeconds;
        let countEnd = document.getElementById("countEnd");
        setInterval(()=>{
          countEnd.classList.toggle("countDis");
        }, 400)
      },1000);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    // win interface
}
}, 5000);
// Object inside the maze

// mobile
const lines = document.querySelectorAll(".line");
const maze = document.querySelector(".container");
const object = document.querySelector(".object");
// fails
const win = document.querySelector(".f1");
const fail = document.querySelector(".f2");
const fail2 = document.querySelector(".f3");
const fail3 = document.querySelector(".f4");
const fail4 = document.querySelector(".f5");
const fail5 = document.querySelector(".f6");
const fail6 = document.querySelector(".f7");
const fail7 = document.querySelector(".f8");
const fail8 = document.querySelector(".f9");
// fails

let isDragging = false;
let offsetX, offsetY;
let allowMovement = true;

function getPosition(e) {
  if (e.touches) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  } else {
    return { x: e.clientX, y: e.clientY };
  }
}

object.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Evita el comportamiento predeterminado del evento táctil
  const pos = getPosition(e);
  isDragging = true;
  offsetX = pos.x - object.getBoundingClientRect().left;
  offsetY = pos.y - object.getBoundingClientRect().top;
});

document.addEventListener("touchend", () => {
  isDragging = false;
});

maze.addEventListener("touchmove", (e) => {
  if (isDragging && allowMovement) {
    e.preventDefault(); // Evita el comportamiento predeterminado del evento táctil
    const pos = getPosition(e);
    const x = pos.x - maze.getBoundingClientRect().left;
    const y = pos.y - maze.getBoundingClientRect().top;
    // Verificar que el objeto no se salga del laberinto
    const maxX = maze.offsetWidth - object.offsetWidth;
    const maxY = maze.offsetHeight - object.offsetHeight;
    const validX = Math.min(maxX, Math.max(0, x - offsetX));
    const validY = Math.min(maxY, Math.max(0, y - offsetY));

    if (allowMovement) {
      object.style.left = validX + "px";
      object.style.top = validY + "px";
    }

    const rectA = object.getBoundingClientRect();
    const rectB = win.getBoundingClientRect();
    const rectC = fail.getBoundingClientRect();
    const rectD = fail2.getBoundingClientRect();
    const rectF = fail3.getBoundingClientRect();
    const rectG = fail4.getBoundingClientRect();
    const rectH = fail5.getBoundingClientRect();
    const rectI = fail6.getBoundingClientRect();
    const rectJ = fail7.getBoundingClientRect();
    const rectK = fail8.getBoundingClientRect();
    // Collision
    if (
      rectA.left < rectB.right &&
      rectA.right > rectB.left &&
      rectA.top < rectB.bottom &&
      rectA.bottom > rectB.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectC.right &&
      rectA.right > rectC.left &&
      rectA.top < rectC.bottom &&
      rectA.bottom > rectC.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectD.right &&
      rectA.right > rectD.left &&
      rectA.top < rectD.bottom &&
      rectA.bottom > rectD.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectF.right &&
      rectA.right > rectF.left &&
      rectA.top < rectF.bottom &&
      rectA.bottom > rectF.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectG.right &&
      rectA.right > rectG.left &&
      rectA.top < rectG.bottom &&
      rectA.bottom > rectG.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectH.right &&
      rectA.right > rectH.left &&
      rectA.top < rectH.bottom &&
      rectA.bottom > rectH.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectI.right &&
      rectA.right > rectI.left &&
      rectA.top < rectI.bottom &&
      rectA.bottom > rectI.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectJ.right &&
      rectA.right > rectJ.left &&
      rectA.top < rectJ.bottom &&
      rectA.bottom > rectJ.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectK.right &&
      rectA.right > rectK.left &&
      rectA.top < rectK.bottom &&
      rectA.bottom > rectK.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
  }
});
// mobile
// web

object.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - object.getBoundingClientRect().left;
  offsetY = e.clientY - object.getBoundingClientRect().top;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

maze.addEventListener("mousemove", (e) => {
  if (isDragging && allowMovement) {
    const x = e.clientX - maze.getBoundingClientRect().left;
    const y = e.clientY - maze.getBoundingClientRect().top;

    // Verificar que el objeto no se salga del laberinto
    const maxX = maze.offsetWidth - object.offsetWidth;
    const maxY = maze.offsetHeight - object.offsetHeight;
    const validX = Math.min(maxX, Math.max(0, x - offsetX));
    const validY = Math.min(maxY, Math.max(0, y - offsetY));

    if (allowMovement) {
      object.style.left = validX + "px";
      object.style.top = validY + "px";
    }

    const rectA = object.getBoundingClientRect();
    const rectB = win.getBoundingClientRect();
    const rectC = fail.getBoundingClientRect();
    const rectD = fail2.getBoundingClientRect();
    const rectF = fail3.getBoundingClientRect();
    const rectG = fail4.getBoundingClientRect();
    const rectH = fail5.getBoundingClientRect();
    const rectI = fail6.getBoundingClientRect();
    const rectJ = fail7.getBoundingClientRect();
    const rectK = fail8.getBoundingClientRect();
    // Collision
    if (
      rectA.left < rectB.right &&
      rectA.right > rectB.left &&
      rectA.top < rectB.bottom &&
      rectA.bottom > rectB.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectC.right &&
      rectA.right > rectC.left &&
      rectA.top < rectC.bottom &&
      rectA.bottom > rectC.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectD.right &&
      rectA.right > rectD.left &&
      rectA.top < rectD.bottom &&
      rectA.bottom > rectD.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectF.right &&
      rectA.right > rectF.left &&
      rectA.top < rectF.bottom &&
      rectA.bottom > rectF.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectG.right &&
      rectA.right > rectG.left &&
      rectA.top < rectG.bottom &&
      rectA.bottom > rectG.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectH.right &&
      rectA.right > rectH.left &&
      rectA.top < rectH.bottom &&
      rectA.bottom > rectH.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectI.right &&
      rectA.right > rectI.left &&
      rectA.top < rectI.bottom &&
      rectA.bottom > rectI.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectJ.right &&
      rectA.right > rectJ.left &&
      rectA.top < rectJ.bottom &&
      rectA.bottom > rectJ.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
    if (
      rectA.left < rectK.right &&
      rectA.right > rectK.left &&
      rectA.top < rectK.bottom &&
      rectA.bottom > rectK.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(() => {
        object.style.left = 5 + "%";
        allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true;
    }
  }
});
const arrow = document.querySelector(".arrow");
object.addEventListener("mousedown", () => {
  arrow.classList.add("opacity");
});
// web
// Object inside the maze
