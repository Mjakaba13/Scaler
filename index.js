let increase = document.getElementById("increase");
let reduce = document.getElementById("reduce");
let grow = document.getElementById("grow");
let delay = document.getElementById("delay");
let div = document.getElementById("random");
let round = document.getElementById("round");
let reset = document.getElementById("reset");

function delayExpand() {
  setTimeout(() => {
    div.style.width = increase.value.concat("px");
    div.style.height = increase.value.concat("px");
  }, Number(delay.value) * 1000);
}

function delayShrink() {
  setTimeout(() => {
    div.style.width = increase.value.concat("px");
    div.style.height = increase.value.concat("px");
  }, Number(delay.value) * 1000);
}

function delayRoundBorder() {
  setTimeout(() => {
    div.style.borderRadius = increase.value.concat("px");
  }, Number(delay.value) * 1000);
}

function backToNormal() {
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = "aqua";
  div.style.borderRadius = 0;
}

// function callback() {}

// setTimeout(callback, 1000);

grow.addEventListener("click", delayExpand);
reduce.addEventListener("click", delayShrink);
round.addEventListener("click", delayRoundBorder);
reset.addEventListener("click", backToNormal);
