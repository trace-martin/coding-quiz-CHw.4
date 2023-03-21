//var startBtn = document.querySelector('#start');
var startTimer = document.getElementById("start");
var timerID = document.getElementById("timerID");
var timer = document.getElementById("timer");
var begin = document.getElementById("beginDiv");
var questions = document.getElementById("questions");

var results = document.getElementById("results");
var totalPoints = document.getElementById("totalPoints");
var playerName = document.getElementById("playerName");
var highScores = document.getElementById("highScores");
var scoreBoard = document.getElementById("scoreBoard");
var savePlayerNameBtn = document.getElementById("savePlayerNameBtn");
var highscore = document.getElementById("highscore");
var restart = document.getElementById("restart");
var clearScoreBoard = document.getElementById("clearScoreBoard");
var topBar = document.getElementById("topBar");

var questionOrder = 0;
var totalCorrect = 0;
// var highScore();



// Events
startTimer.addEventListener('click', timerFunc);

var secondsLeft = 121;
 
// Functions
function timerFunc() 
{   
    secondsLeft = 121;
    questionOrder= 0;
    begin.style.display = "none";
    questions.style.display = "block";
    topBar.style.display = "block";

    // Sets interval in variable
    var timeVar = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
        timerID.textContent = secondsLeft;
        //if timer runs out or all the questions have been answered
        if(secondsLeft < 0 || questionOrder == questionDict.length) {
           // Stops execution of action at set interval
           clearInterval(timeVar);
           gameOver();
         }
    
      }, 1000);

      nextQ();
}
    
function gameOver() {
    //textbox to enter initials and save high score
    //then display high score page
    questions.style.display = "none";
    timerID.textContent = " ";
    results.style.display = "block";
    evaluateAnswer.style.display = "none";
    topBar.style.display = "none";
    totalPoints.textContent = totalCorrect;
    secondsLeft = 0;
}



let questionDict = [
    {
        question: "When was the first Big Mac created?",
        options: ["a. 1992", "b. 1983", "c. 1975", "d. 1967"],
        answer: "d. 1967"
    },
    {
        question: "Who first introduced the Big Mac?",
        options: ["a. Superman", "b.Bill Gates", "c. Jim Delligatti", "d. Joe Biden"],
        answer: "c. Jim Delligatti"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "Commonly used data types DO NOT include:",
        options: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        options: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        options: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        options: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },
    {
        question: "The first index of an array is ____.",
        options: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "Who invented JavaScript?",
        options: ["a. Douglas Crockford", "b. Sheryl Sandberg", "c. Brendan Eich", "d. Ben Javascript"],
        answer: "c. Brendan Eich"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        options: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "a. //This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    }
];

var questionContainer = document.getElementById("questionContainer");
var questionTitle = document.getElementById("questionTitle");
var optionA = document.getElementById("answer-button0");
var optionB = document.getElementById("answer-button1");
var optionC = document.getElementById("answer-button2");
var optionD = document.getElementById("answer-button3");
var evaluateAnswer = document.getElementById("evaluateAnswer");


function nextQ() {
    questionTitle.textContent = questionDict[questionOrder].question;
    optionA.textContent = questionDict[questionOrder].options[0];
    optionB.textContent = questionDict[questionOrder].options[1];
    optionC.textContent = questionDict[questionOrder].options[2];
    optionD.textContent = questionDict[questionOrder].options[3];
  }

function evaluation(answer) {

    evaluateAnswer.style.display = "block";
    if (questionDict[questionOrder].answer === questionDict[questionOrder].options[answer]) {
        // correct answers, adds 5 points to final score
        totalCorrect = totalCorrect +5;
        // console.log(correctAns);
        evaluateAnswer.textContent = "That's correct!";
    } else {
        // wrong answers, deduct 20 seconds from timer
        secondsLeft -= 20;
        timerID.textContent = secondsLeft;
        evaluateAnswer.textContent = "Wrong! The correct answer is: " + questionDict[questionOrder].answer;
    }

    questionOrder++;
    // repeat with the rest of questions 
    if (questionOrder < questionDict.length) {
        nextQ();
    } else {
        // if no more questions, run game over function
        gameOver();
    }
}

function pickA() {
    evaluation(0);
}

function pickB() {
    evaluation(1);
}

function pickC() {
    evaluation(2);
}

function pickD() {
    evaluation(3);
}

optionA.addEventListener("click", pickA);
optionB.addEventListener("click", pickB);
optionC.addEventListener("click", pickC);
optionD.addEventListener("click", pickD);


function addHighScore(event){
    // event.preventDefault();

    begin.style.display = "none";
    topBar.style.display = "none";
    
    if (playerName.value === ""){
        alert("Please enter initials.");
        return;
    }

    var savedPlayerScores = localStorage.getItem("player scores");
    var savedScores = [];

    if (savedPlayerScores === null) {
        savedScores = [];
    } else {
        savedScores = $.parseJSON(savedPlayerScores)
    }

    var playerScore = {
        name: playerName.value,
        points: totalPoints.textContent
    };

    console.log(playerScore);
    console.log(savedPlayerScores);
    console.log(savedScores);
    console.log(typeof savedScores);
    savedScores.push(playerScore);

    var savedPlayerScoresArrayStr = JSON.stringify(savedScores);
    window.localStorage.setItem("player scores", savedPlayerScoresArrayStr);
    
//     // shows scores
    showPlayerScores();
 }
var i = 0;
function showPlayerScores() {
    results.style.display = "none";
    highScores.style.display = "block";
    begin.style.display = "none";
    topBar.style.display = "none";
    

    var savedPlayerScores = localStorage.getItem("player scores");
    
    if (savedPlayerScores === null) {
        return;
    }
    console.log(savedPlayerScores);

    var storedPlayerScores = JSON.parse(savedPlayerScores);

    for (; i < storedPlayerScores.length; i++) {
        var newPlayerScore = document.createElement("p");
        newPlayerScore.innerHTML = storedPlayerScores[i].name + ": " + storedPlayerScores[i].points;
        scoreBoard.appendChild(newPlayerScore);
    }
}

savePlayerNameBtn.addEventListener("click", function(event){ 
    addHighScore(event);
});

highscore.addEventListener("click", function(event) { 
    showPlayerScores(event);
    questions.style.display = "none";
    evaluateAnswer.style.display = "none";
});

restart.addEventListener("click", function() {
    begin.style.display = "block";
    highScores.style.display = "none";
    topBar.style.display = "block";
});

clearScoreBoard.addEventListener("click", function(){
    window.localStorage.removeItem("player scores");
    scoreBoard.innerHTML = "Scores Cleared!";
    scoreBoard.setAttribute("style", "font-style: bold;")
});