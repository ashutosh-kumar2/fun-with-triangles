const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#hypotenuse-button");
const outputElement = document.querySelector("#output");

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputElement.innerText = "The length of the hypotenuse is " +  lengthOfHypotenuse;  
}

hypotenuseButton.addEventListener("click", calculateHypotenuse);