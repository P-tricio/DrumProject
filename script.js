"use strict";
// Variables de los botones
const qButton = document.querySelector("#q");
const wButton = document.querySelector("#w");
const eButton = document.querySelector("#e");
const aButton = document.querySelector("#a");
const sButton = document.querySelector("#s");
const dButton = document.querySelector("#d");
const zButton = document.querySelector("#z");
const xButton = document.querySelector("#x");
const cButton = document.querySelector("#c");

// Variables de los sonidos
const crash = new Audio("sounds/crash.wav");
const hihatClose = new Audio("sounds/hihat-close.wav");
const hihatOpen = new Audio("sounds/hihat-open.wav");
const kick = new Audio("sounds/kick.wav");
const ride = new Audio("sounds/ride.wav");
const snare = new Audio("sounds/snare.wav");
const tomHigh = new Audio("sounds/tom-high.wav");
const tomLow = new Audio("sounds/tom-low.wav");
const tomMid = new Audio("sounds/tom-mid.wav");

// Función para reproducir sonido y agregar clase activa
function playSound(button, sound) {
  sound.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
  sound.play();
  button.classList.add("active"); // Agregar clase activa
  setTimeout(() => button.classList.remove("active"), 100); // Quitar clase activa después de 100ms
}

// Botones asociados a los sonidos con el clic
qButton.addEventListener("click", () => playSound(qButton, crash));
wButton.addEventListener("click", () => playSound(wButton, hihatClose));
eButton.addEventListener("click", () => playSound(eButton, hihatOpen));
aButton.addEventListener("click", () => playSound(aButton, kick));
sButton.addEventListener("click", () => playSound(sButton, ride));
dButton.addEventListener("click", () => playSound(dButton, snare));
zButton.addEventListener("click", () => playSound(zButton, tomHigh));
xButton.addEventListener("click", () => playSound(xButton, tomMid));
cButton.addEventListener("click", () => playSound(cButton, tomLow));

// Teclas asociadas a los sonidos
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "q":
      playSound(qButton, crash);
      break;
    case "w":
      playSound(wButton, hihatClose);
      break;
    case "e":
      playSound(eButton, hihatOpen);
      break;
    case "a":
      playSound(aButton, kick);
      break;
    case "s":
      playSound(sButton, ride);
      break;
    case "d":
      playSound(dButton, snare);
      break;
    case "z":
      playSound(zButton, tomHigh);
      break;
    case "x":
      playSound(xButton, tomMid);
      break;
    case "c":
      playSound(cButton, tomLow);
      break;
  }
});
