const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#submit-answer-button");
const outputElement = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "85°", "40°", "a + b + c", "no", "45°"];

function calculateScore(){
    let score = 0, index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputElement.innerText = "Your score is " + score + "/10";
}

submitAnswerButton.addEventListener('click', calculateScore);