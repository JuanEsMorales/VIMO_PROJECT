// Definir el laberinto (1 representa los caminos permitidos, 0 representa las paredes)
const laberinto = [
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
];

// Obtener el contexto del canvas y definir variables para el objeto móvil
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const objetoMovible = { x: 50, y: 50, width: 20, height: 20, isDragging: false };

// Función para dibujar el laberinto y el objeto móvil
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar el laberinto
  for (let row = 0; row < laberinto.length; row++) {
    for (let col = 0; col < laberinto[row].length; col++) {
      if (laberinto[row][col] === 1) {
        ctx.fillStyle = "white";
      } else {
        ctx.fillStyle = "black";
      }
      ctx.fillRect(col * 40, row * 40, 40, 40);
    }
  }

  // Dibujar el objeto móvil
  ctx.fillStyle = "blue";
  ctx.fillRect(objetoMovible.x, objetoMovible.y, objetoMovible.width, objetoMovible.height);
}

// Evento para detectar cuando se presiona el clic del mouse
canvas.addEventListener("mousedown", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Verifica si el clic se realizó sobre el objeto movible
  if (
    mouseX >= objetoMovible.x &&
    mouseX <= objetoMovible.x + objetoMovible.width &&
    mouseY >= objetoMovible.y &&
    mouseY <= objetoMovible.y + objetoMovible.height
  ) {
    objetoMovible.isDragging = true;
  }
});

// Evento para detectar cuando se suelta el clic del mouse
canvas.addEventListener("mouseup", () => {
  objetoMovible.isDragging = false;
});

// Evento para mover el objeto al mover el cursor con el clic presionado
canvas.addEventListener("mousemove", (event) => {
  if (objetoMovible.isDragging) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Verificar si el próximo movimiento mantendrá al objeto dentro del laberinto
    const nextX = mouseX - objetoMovible.width / 2;
    const nextY = mouseY - objetoMovible.height / 2;

    const row = Math.floor(nextY / 40);
    const col = Math.floor(nextX / 40);

    if (
      row >= 0 &&
      row < laberinto.length &&
      col >= 0 &&
      col < laberinto[0].length &&
      laberinto[row][col] === 1
    ) {
      objetoMovible.x = nextX;
      objetoMovible.y = nextY;
    }
  }
});

// Función para actualizar y dibujar continuamente el laberinto y el objeto móvil
function gameLoop() {
  draw();
  requestAnimationFrame(gameLoop);
}

// Iniciar el bucle del juego
gameLoop();