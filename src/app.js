import "bootstrap";
import "./style.css";

const images = [
  "/img/office1.jpg",
  "/img/office2.jpg",
  "/img/office3.jpg",
  "/img/office4.jpg"
];

const when = [
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

const excuses = [
  { who: "I", what: "couldn’t come in", why: "because I was having a mental health day" },
  { who: "I", what: "made me late", why: "because I had an existential crisis" },
  { who: "My cat", what: "ignored me", why: "because it needed emotional support" },
  { who: "My cat", what: "refused to cooperate", why: "because we had an argument" },
  { who: "My stapler", what: "wouldn’t let me work", why: "because it ran out of ink" },
  { who: "My coffee machine", what: "stopped working", why: "because it thought today was Friday" },
  { who: "The traffic", what: "made me late", why: "because there was a parade of ducks" },
  { who: "The internet", what: "completely failed", why: "because it went down" },
  { who: "My responsibilities", what: "kidnapped me", why: "because they took over my morning" },
  { who: "The office door", what: "wouldn’t let me in", why: "because it was stuck" },
  { who: "My phone", what: "ignored me", why: "because it got jealous" },
  { who: "My reflection", what: "decided to betray me", why: "because I questioned my entire existence" }
];

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateExcuse() {
  const excuse = getRandom(excuses);
  const randomWhen = getRandom(when);

  const excuseText = excuse.who + " " + excuse.what + " " + excuse.why + " " + randomWhen;

  const excuseContainer = document.querySelector("#excuse");
  const excuseImage = document.querySelector("#excuse-image");

  excuseContainer.textContent = excuseText;
  excuseImage.src = getRandom(images);
}

window.onload = function () {
  const button = document.querySelector("#generate-excuse");
  button.addEventListener("click", generateExcuse);
  generateExcuse();
};
