const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const output = document.querySelector(".output");

const correctAnswers = ["Acute Angle Triangle", "Obtuse Angle Triangle", "Right Angle Triangle", "74°", "35°", "Isosceles Triangle", "Equilateral Triangle", "Scalene Triangle", "12, 5, 13", "60cm²"];

output.style.display = "none";



function checkAnswers() {
    output.style.display = "none";
    var i = 0;
    const formResults = new FormData(quizForm);
    for(var inputValue of formResults.values()){
        i = i + 1;
    }
    if(i != 10){
        output.style.display = "block";
        output.innerText = "All questions are mandatory";
    }
    else{
        calculateScore();
    }
    
}

function calculateScore(){
    var score = 0;
    var i = 0;
    const formResults = new FormData(quizForm);
    for(var inputValue of formResults.values()){
        if(inputValue == correctAnswers[i])
           score = score + 1;
        i = i+1;
    }
    output.style.display = "block";
    if(score > 8)
    output.innerText = "Your score is " + score + "! 🎉🎉";
    else
    output.innerText = "Your score is " + score;
}

submitButton.addEventListener("click", checkAnswers);
