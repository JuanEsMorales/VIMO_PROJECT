const objeto = document.querySelector(".objeto");
const linea = document.querySelector(".linea");
const box = document.querySelector(".box");

let isDragging = false;
let offsetX, offsetY;
let isColliding = false;

objeto.addEventListener("mousedown", (e) => {
  const pos = getPosition(e);
  isDragging = true;
  offsetX = pos.x - objeto.getBoundingClientRect().left;
  offsetY = pos.y - objeto.getBoundingClientRect().top;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  isColliding = false;
});

box.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const pos = getPosition(e);
    const x = pos.x - box.getBoundingClientRect().left;
    const y = pos.y - box.getBoundingClientRect().top;

    // Verificar colisión con la línea
    const rectObjeto = objeto.getBoundingClientRect();
    const rectLinea = linea.getBoundingClientRect();

    if (
      rectObjeto.left < rectLinea.right &&
      rectObjeto.right > rectLinea.left &&
      rectObjeto.top < rectLinea.bottom &&
      rectObjeto.bottom > rectLinea.top
    ) {
      isColliding = true;
      objeto.style.backgroundColor = "red"; // Cambiar color para indicar colisión
    } else {
      isColliding = false;
      objeto.style.backgroundColor = "brown"; // Volver al color original si no está colisionando
    }

    // Si está colisionando, impedir que el objeto se mueva
    if (isColliding) {
      objeto.style.left = (rectLinea.left - box.getBoundingClientRect().left - objeto.offsetWidth) + "px";
      objeto.style.top = (rectLinea.top - box.getBoundingClientRect().top - objeto.offsetHeight) + "px";
    } else {
      // Si no está colisionando, actualizar la posición normalmente
      const validX = Math.min(box.offsetWidth - objeto.offsetWidth, Math.max(0, x - offsetX));
      const validY = Math.min(box.offsetHeight - objeto.offsetHeight, Math.max(0, y - offsetY));
      objeto.style.left = validX + "px";
      objeto.style.top = validY + "px";
    }
  }
});

function getPosition(e) {
  if (e.touches) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  } else {
    return { x: e.clientX, y: e.clientY };
  }
}