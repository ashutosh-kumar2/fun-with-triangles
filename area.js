const sides = document.querySelectorAll(".side-input");
const calculateAreaButton = document.querySelector("#calculate-area-button");
const outputElement = document.querySelector("#output");

function calculateArea(){
    const base = Number(sides[0].value);
    const height = Number(sides[1].value);
    const area = 0.5 * base * height;
    outputElement.innerText = "The area of the triangle is " + area + " units";
}

calculateAreaButton.addEventListener("click", calculateArea);