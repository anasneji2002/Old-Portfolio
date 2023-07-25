var portfoliobarelement1 = document.getElementById("portfoliobarelement1");
var portfoliobarelement2 = document.getElementById("portfoliobarelement2");
var B = document.getElementById("websites");
var R = document.getElementById("designs");
function f1() {
  portfoliobarelement1.style.backgroundColor = "rgb(60, 42, 33)";
  portfoliobarelement1.style.color = "rgb(229, 229, 203)";
  portfoliobarelement2.style.backgroundColor = "rgb(229, 229, 203)";
  portfoliobarelement2.style.color = "rgb(60, 42, 33)";
  portfoliobarelement1.style.transitionDuration = "0.3s";
  portfoliobarelement1.style.transitionTimingFunction = "ease-in-out";
  portfoliobarelement2.style.transitionDuration = "0.3s";
  portfoliobarelement2.style.transitionTimingFunction = "ease-in-out";
  R.style.display = "none";
  B.style.display = "flex";
}
function f2() {
  portfoliobarelement2.style.backgroundColor = "rgb(60, 42, 33)";
  portfoliobarelement2.style.color = "rgb(229, 229, 203)";
  portfoliobarelement1.style.backgroundColor = "rgb(229, 229, 203)";
  portfoliobarelement1.style.color = "rgb(60, 42, 33)";
  portfoliobarelement1.style.transitionDuration = "0.3s";
  portfoliobarelement1.style.transitionTimingFunction = "ease-in-out";
  portfoliobarelement2.style.transitionDuration = "0.3s";
  portfoliobarelement2.style.transitionTimingFunction = "ease-in-out";
  B.style.display = "none";
  R.style.display = "grid";
  R.style.top = "0px";
  R.style.position = "relative";
  R.style.zIndex = "1";
}
portfoliobarelement1.addEventListener("click", f1);
portfoliobarelement2.addEventListener("click", f2);

var bg = document.getElementById("bg");
var i1 = document.getElementById("img1");
var iz1 = document.getElementById("image_zoomed_in1");

function zoomin1() {
  bg.style.display = "block";
  iz1.style.display = "block";
}
function zoomout1() {
  bg.style.display = "none";
  iz1.style.display = "none";
}

i1.addEventListener("click", zoomin1);
iz1.addEventListener("click", zoomout1);

var i2 = document.getElementById("img2");
var iz2 = document.getElementById("image_zoomed_in2");

function zoomin2() {
  bg.style.display = "block";
  iz2.style.display = "block";
}
function zoomout2() {
  bg.style.display = "none";
  iz2.style.display = "none";
}

i2.addEventListener("click", zoomin2);
iz2.addEventListener("click", zoomout2);

var i3 = document.getElementById("img3");
var iz3 = document.getElementById("image_zoomed_in3");

function zoomin3() {
  bg.style.display = "block";
  iz3.style.display = "block";
}
function zoomout3() {
  bg.style.display = "none";
  iz3.style.display = "none";
}

i3.addEventListener("click", zoomin3);
iz3.addEventListener("click", zoomout3);

var i4 = document.getElementById("img4");
var iz4 = document.getElementById("image_zoomed_in4");

function zoomin4() {
  bg.style.display = "block";
  iz4.style.display = "block";
}
function zoomout4() {
  bg.style.display = "none";
  iz4.style.display = "none";
}

i4.addEventListener("click", zoomin4);
iz4.addEventListener("click", zoomout4);

var i5 = document.getElementById("img5");
var iz5 = document.getElementById("image_zoomed_in5");

function zoomin5() {
  bg.style.display = "block";
  iz5.style.display = "block";
}
function zoomout5() {
  bg.style.display = "none";
  iz5.style.display = "none";
}

i5.addEventListener("click", zoomin5);
iz5.addEventListener("click", zoomout5);

var i6 = document.getElementById("img6");
var iz6 = document.getElementById("image_zoomed_in6");

function zoomin6() {
  bg.style.display = "block";
  iz6.style.display = "block";
}
function zoomout6() {
  bg.style.display = "none";
  iz6.style.display = "none";
}

i6.addEventListener("click", zoomin6);
iz6.addEventListener("click", zoomout6);

bg.addEventListener("click", zoomout1);
bg.addEventListener("click", zoomout2);
bg.addEventListener("click", zoomout3);
bg.addEventListener("click", zoomout4);
bg.addEventListener("click", zoomout5);
bg.addEventListener("click", zoomout6);
