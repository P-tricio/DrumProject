"use strict";
//variables de los botones

const qButton = document.querySelector("#q");
const wButton = document.querySelector("#w");
const eButton = document.querySelector("#e");
const aButton = document.querySelector("#a");
const sButton = document.querySelector("#s");
const dButton = document.querySelector("#d");
const zButton = document.querySelector("#z");
const xButton = document.querySelector("#x");
const cButton = document.querySelector("#c");

//variables de los sonidos
const crash = new Audio("sounds/crash.wav");
const hihatClose = new Audio("sounds/hihat-close.wav");
const hihatOpen = new Audio("sounds/hihat-open.wav");
const kick = new Audio("sounds/kick.wav");
const ride = new Audio("sounds/ride.wav");
const snare = new Audio("sounds/snare.wav");
const tomHigh = new Audio("sounds/tom-high.wav");
const tomLow = new Audio("sounds/tom-low.wav");
const tomMid = new Audio("sounds/tom-mid.wav");

//botones asociados a los sonidos con el click
qButton.addEventListener("click", () => {
  crash.play();
});
wButton.addEventListener("click", () => {
  hihatClose.play();
});
eButton.addEventListener("click", () => {
  hihatOpen.play();
});
aButton.addEventListener("click", () => {
  kick.play();
});
sButton.addEventListener("click", () => {
  ride.play();
});
dButton.addEventListener("click", () => {
  snare.play();
});
zButton.addEventListener("click", () => {
  tomHigh.play();
});
xButton.addEventListener("click", () => {
  tomMid.play();
});
cButton.addEventListener("click", () => {
  tomLow.play();
});

//teclas asociadas a los sonidos
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "q":
      crash.play();
      break;
    case "w":
      hihatClose.play();
      break;
    case "e":
      hihatOpen.play();
      break;
    case "a":
      kick.play();
      break;
    case "s":
      ride.play();
      break;
    case "d":
      snare.play();
      break;
    case "z":
      tomHigh.play();
      break;
    case "x":
      tomMid.play();
      break;
    case "c":
      tomLow.play();
      break;
  }
});
