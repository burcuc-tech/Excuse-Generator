import "bootstrap";
import "./style.css";

window.onload = function() {

  const images = [
    "/img/office1.jpg",
    "/img/office2.jpg",
    "/img/office3.jpg",
    "/img/office4.jpg",
    "/img/office5.jpg",
    "/img/office6.jpg",
    "/img/office7.jpg",
    "/img/office8.jpg",
  ];

  const who = ["I", "Dwight", "Ryan", "HR", "Corporate"];

  const action = [
    "was late",
    "couldn’t finish the report",
    "refused to cooperate",
    "completely misunderstood the task",
    "wanted an explanation"
  ];

  const when = [
    "this morning",
    "today",
    "yesterday",
    "earlier",
    "just now",
    "during work",
    "right before the meeting"
  ];

  const why = [
    "because I burned my foot very badly on my Foreman grill",
    "because I am not superstitious, but I am a little stitious",
    "because sometimes I start a sentence and I don’t even know where it’s going",
    "because I declared bankruptcy",
    "because I said I am Beyoncé, always",
    "because would I rather be feared or loved? Easy. Both",
    "because I told them I don’t hate Toby, I just don’t like him at all",
    "because I cause no harm, but I am also not helpful",
    "because I am running away from my responsibilities and it feels good",
    "because Ryan hid all the paper clips and now nothing can be done",
    "because I enjoy having breakfast in bed with a Foreman grill"
  ];


  function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateExcuse() {
    const rdmWho = getRandom(who);
    const rdmAction = getRandom(action);
    const rdmWhen = getRandom(when);
    const rdmWhy = getRandom(why);
    const rdmImage = getRandom(images);

    const excuse =
      rdmWho + " " + rdmAction + " " + rdmWhen + " " + rdmWhy + ".";

    document.querySelector("#excuse").textContent = excuse;
    document.querySelector("#excuse-image").src = rdmImage;
  }

  document
    .querySelector("#generate-excuse")
    .addEventListener("click", generateExcuse);

  generateExcuse();
};