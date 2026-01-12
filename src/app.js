
import "bootstrap";
import "./style.css";

import office1 from "./assets/img/office1.jpg";
import office2 from "./assets/img/office2.jpg";
import office3 from "./assets/img/office3.jpg";
import office4 from "./assets/img/office4.jpg";

let who = [
  "I",
  "My cat",
  "The traffic",
  "My calendar",
  "My stapler",
  "My coffee machine",
  "The internet",
  "My responsibilities",
  "The office door",
  "My phone",
  "My reflection"
];

let action = [
  "couldn’t come in because",
  "made me late because",
  "refused to cooperate because",
  "decided to betray me because",
  "stopped me because",
  "started a fight with me because",
  "completely failed because",
  "kidnapped me because",
  "wouldn’t let me in because",
  "ignored me because"
];

let what = [
  "I was having a mental health day",
  "it needed emotional support",
  "there was a parade of ducks",
  "it thought today was Friday",
  "it was stuck in Jell-O",
  "we had an argument",
  "it went down",
  "they took over my morning",
  "it got jealous",
  "it entered witness protection",
  "I had an existential crisis",
  "I questioned my entire existence"
];

let when = [
  "this morning",
  "on my way to work",
  "right before the meeting",
  "during working hours",
  "at the front door",
  "before I could start working",
  "all day",
  "around 9 a.m.",
  "at 11 a.m.",
  "exactly when productivity started"
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(array) {
  return array[getRandomNumber(0, array.length - 1)];
}

window.onload = function () {
console.log("Hello Burcu from the console!");

  let excuseText =
    getRandom(who) + " " +
    getRandom(action) + " " +
    getRandom(what) + " " +
    getRandom(when);

let excuseContainer = document.querySelector("#excuse");

let images = [office1, office2, office3, office4];
let randomImage = getRandom(images);

let img = document.createElement("img");
img.src = randomImage;
img.alt = "Excuse image";

excuseContainer.innerHTML = "";
excuseContainer.appendChild(img);
excuseContainer.appendChild(document.createTextNode(excuseText));

};
