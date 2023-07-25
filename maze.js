let seconds = 10;
let temp = setInterval(secondsCont,1000);
function secondsCont() {
    let txtSeconds;
    if (seconds < 10) {
        txtSeconds = `0${seconds}`
    } else {
        txtSeconds = seconds;
    }
    document.getElementById("seconds").innerHTML = txtSeconds;
    seconds--;
    if (seconds == -1) {
        clearInterval(temp);
    }
}

// Object inside the maze

// mobile
const maze = document.querySelector(".maze");
const object = document.querySelector(".object");

let isDragging = false;
let offsetX, offsetY;

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
  if (isDragging) {
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
  if (isDragging) {
    const x = e.clientX - maze.getBoundingClientRect().left;
    const y = e.clientY - maze.getBoundingClientRect().top;

    // Verificar que el objeto no se salga del laberinto
    const maxX = maze.offsetWidth - object.offsetWidth;
    const maxY = maze.offsetHeight - object.offsetHeight;
    const validX = Math.min(maxX, Math.max(0, x - offsetX));
    const validY = Math.min(maxY, Math.max(0, y - offsetY));

    object.style.left = validX + "px";
    object.style.top = validY + "px";
  }

});
const lines = document.querySelectorAll(".line");




// web
// Object inside the maze



