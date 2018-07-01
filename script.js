var css = document.querySelector("h3");
var col1 = document.getElementById("color1");
var col2 = document.getElementById("color2");
var body = document.querySelector("body");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ");"	
}

col1.addEventListener("input", setGradient);

col2.addEventListener("input", setGradient);