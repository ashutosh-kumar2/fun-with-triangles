const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-button");
const outputElement = document.querySelector("#output");

isTriangleButton.addEventListener('click', isTriangle);

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputElement.innerText = "Yay! The angles form a triangle.";
    }else{
        outputElement.innerText = "Oh No! The angles do not form a triangle.";
    }
}

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}