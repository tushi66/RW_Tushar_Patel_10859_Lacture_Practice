/* Quiz App */
/* Questions Array */

const Questions = [
    {
        question: "Which keyword is used to describe a variable in javascript.",
        options: ["var", "int", "string", "define"],
        answer: 0
    },
    {
        question: "Which function is used to serialize an object into JSON string?",
        options: ["stringify()", "parse()", "convert()", "None"],
        answer: 0
    },
    {
        question: "Which of the following are closures in Javascript?",
        options: ["Variable", "Function", "Object", "All of the above"],
        answer: 3
    },
    {
        question: "Which is not a Javascript framework?",
        options: ["Node", "Vue", "React", "Cassandra"],
        answer: 3
    },
    {
        question: "Which method is used to access HTML elements?",
        options: ["getElementById()", "getElementByClassName()", "Both A and B", "None"],
        answer: 2
    }
]

/* Variables */

let timeRemaining = 300;
let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let timeInterval;

/* DOM */

const quizBody = document.getElementById("quizBody");
const questionCounter = document.getElementById("questionCounter");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const timer = document.getElementById("timer");
const resultsContainer = document.getElementById("resultsContainer");
const restartBtn = document.getElementById("restartBtn");

/* Init */

const initQuizApp = () => {
    timeRemaining = 300;
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    resultsContainer.classList.add("content-hide");


    startTimer();
}

/* Timer */

const startTimer = () => {
    clearInterval(timeInterval);

    timeInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if(timeRemaining <= 0){
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

const updateTimerDisplay = () => {
    const min = Math.floor(timeRemaining / 60);
    const sec = timeRemaining % 60;

    timer.textContent = `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;
}

/* Start */

document.addEventListener("DOMContentLoaded", () => {
    initQuizApp()
})