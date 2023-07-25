var circle = document.getElementById("circle");
var slide = document.getElementById("slide");
var mode_status = document.getElementById("mode_status");
var button = document.getElementById("button");

var counter = 0;
var texCounter = 0;
function ApplyON() {
  circle.style.transform = "translate(20px)";
  circle.style.transitionDuration = "0.3s";
  circle.style.transitionTimingFunction = "ease-in-out";
  slide.style.backgroundColor = "rgb(71, 214, 71)";
  slide.style.transitionDuration = "0.3s";
  slide.style.transitionTimingFunction = "ease-in-out";
  mode_status.innerText = "Dark mode : ON";
}

function ApplyOFF() {
  circle.style.display = "block";
  circle.style.transform = "translate(0px)";
  circle.style.transitionDuration = "0.3s";
  circle.style.transitionTimingFunction = "ease-in-out";
  slide.style.display = "block";
  slide.style.backgroundColor = "rgb(204, 203, 203)";
  slide.style.transitionDuration = "0.3s";
  slide.style.transitionTimingFunction = "ease-in-out";
  mode_status.innerText = "Dark mode : OFF";
}

function DarkMode() {
  document.body.style.backgroundColor = "rgb(36, 36, 36)";
  document.body.style.color = "white";
  document.body.style.transitionDuration = "0.3s";
  document.body.style.transitionTimingFunction = "ease-in-out";
}

function LightMode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "rgb(36, 36, 36)";
  document.body.style.transitionDuration = "0.3s";
  document.body.style.transitionTimingFunction = "ease-in-out";
}
function Apply() {
  counter += 1;
  if (counter % 2 == 0) {
    ApplyOFF();
    LightMode();
  } else {
    ApplyON();
    DarkMode();
  }
}

button.addEventListener("click", Apply);
