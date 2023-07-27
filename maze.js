let seconds = 10;
let temp = setInterval(secondsCont,1000);
function secondsCont() {
    let txtSeconds;
    if (seconds < 10 && seconds > -1) {
        txtSeconds = `0${seconds}`
    } else{
      txtSeconds = seconds;
    }
    document.getElementById("seconds").innerHTML = txtSeconds;
    seconds--;
    if (seconds == -61) {
        clearInterval(temp);
    }
}

// Object inside the maze

// mobile
const lines = document.querySelectorAll(".line");
const maze = document.querySelector(".container");
const object = document.querySelector(".object");
const win = document.querySelector(".f1");

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

    object.style.left = validX + "px";
    object.style.top = validY + "px";

    
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

    if (
      rectA.left < rectB.right &&
      rectA.right > rectB.left &&
      rectA.top < rectB.bottom &&
      rectA.bottom > rectB.top
    ) {
      // Colisión detectada, detener movimiento
      allowMovement = false;
      isDragging = false;
      setTimeout(()=>{
      object.style.left = 5+"%";
      allowMovement = true;
      }, 50);
    } else {
      // No hay colisión
      allowMovement = true; 
    }
  }

});





// web
// Object inside the maze



