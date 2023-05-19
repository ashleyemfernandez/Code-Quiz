const start = document.getElementById("start-button");
const question = document.getElementById("question");
const selectA = document.getElementById("A");
const selectB = document.getElementById("B");
const selectC = document.getElementById("C");
const selectD = document.getElementById("D");
const selectE = document.getElementById("E");

//init function called when page loads
function init() {
winning();
losing();
}
start.addEventListener("click",startQuiz)
document.getElementById ("choices").addEventListener("click",checkAnswer)
function startQuiz() {
renderQuestion()
startTimer()
}

function checkAnswer(event){
    let userAnswer = event.target.innerText
    let answer = questions[runQuestion].correct
    if (userAnswer === answer){
        runQuestion++
        renderQuestion()
    } else {
        runQuestion++
        time-=2
        renderQuestion()
    }
     
}

let questions = [
{
    question : "What is an object that can hold multiple values at once",
    selectA : "array",
    selectB : "concat",
    selectC : "indexOf()",
    selectD : "join ()",
    selectE : "lastIndexOf()",
    correct : "array" 
},{
    question : "What is it to join several arrays into one",
    selectA : "array",
    selectB : "concat",
    selectC : "indexOf()",
    selectD : "join()",
    selectE : "lastIndexOf()",
    correct : "concat"
},{
    question : "What is it to return the primitive value of the specified object",
    selectA : "array",
    selectB : "concat",
    selectC : "indexOf()",
    selectD : "join()",
    selectE : "lastIndexOf()",
    correct : "indexOf()"
},{    
    question : "What is it to combine elements of an array into a single string and return the string",
    selectA : "array",
    selectB : "concat",
    selectC : "indexOf()",
    selectD : "join()",
    selectE : "lastIndexOf()",
    correct : "join()"
},{
    question : "What is it to give the last position at which a given element appears in an array",
    selectA : "array",
    selectB : "concat",
    selectC : "indexOf()",
    selectD : "join()",
    selectE : "lastIndexOf()",
    correct : "lastIndexOf()"
}

]
let highScore = JSON.parse(localStorage.getItem("High Score"))
document.querySelector(".score").innerText= highScore.initials + "-" + highScore.time
const lastQuestion = question.length - 1; //starting with first question and index last
let runQuestion = 0;

function getInitials() {
    let initials = prompt ("Enter Your Initials")
    localStorage.setItem("High Score", JSON.stringify({initials,time}))
    window.location.reload()
}

function renderQuestion() {
    if (runQuestion >= questions.length){
        getInitials()
        return
    }
    let currentQuestion = questions[runQuestion];
    question.innerText = currentQuestion.question
    selectA.innerText = currentQuestion.selectA;
    selectB.innerText = currentQuestion.selectB;
    selectC.innerText = currentQuestion.selectC;
    selectD.innerText = currentQuestion.selectD;
    selectE.innerText = currentQuestion.selectE;
}
let time = 15
function startTimer(){
    timer = setInterval(function(){
        if (time > 0) {
            time --
            document.getElementById("timer").innerText= "seconds left " + time
        }
    } ,1000)
}
