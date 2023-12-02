import "../assets/sass/style.scss";
import { setupMemberUI } from "./memberName.js";

document.addEventListener("DOMContentLoaded", () => {
  setupMemberUI();
});

let drinkLeft = document.querySelector(".drinkLeft");
let drinkMiddle = document.querySelector(".drinkMiddle");
let drinkRight = document.querySelector(".drinkRight");

const b01Image = require("../assets/images/Else/B01.jpg");
const W04Image = require("../assets/images/Else/W04.jpg");
const W01Image = require("../assets/images/Else/W01.jpg");
const B03Image = require("../assets/images/Else/B03.jpg");
const W05Image = require("../assets/images/Else/W05.jpg");
const W02Image = require("../assets/images/Else/W02.jpg");
const B02Image = require("../assets/images/Else/B02.jpg");
const W06Image = require("../assets/images/Else/W06.jpg");
const W03Image = require("../assets/images/Else/W03.jpg");

setInterval(() => {
  if (drinkLeft.src.endsWith("W01.jpg")) {
    drinkLeft.src = b01Image;
  } else if (drinkLeft.src.endsWith("B01.jpg")) {
    drinkLeft.src = W04Image;
  } else {
    drinkLeft.src = W01Image;
  }
  if (drinkMiddle.src.endsWith("W02.jpg")) {
    drinkMiddle.src = B03Image;
  } else if (drinkMiddle.src.endsWith("B03.jpg")) {
    drinkMiddle.src = W05Image;
  } else {
    drinkMiddle.src = W02Image;
  }
  if (drinkRight.src.endsWith("W03.jpg")) {
    drinkRight.src = B02Image;
  } else if (drinkRight.src.endsWith("B02.jpg")) {
    drinkRight.src = W06Image;
  } else {
    drinkRight.src = W03Image;
  }
}, 2000);

const signUp = document.querySelector(".signUp");
signUp.addEventListener("click", () => {
  location.href = "./LOG.html";
});
