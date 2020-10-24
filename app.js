//arrray of the quiz questions,choices, and correct answers     
let questions = [
  {
  title: "What does DOM stand for?",
  choices: ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
  answer: "Document Object Model"
},
{
  title: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
  choices: ["last( )", "put( )", "push( )", "pop( )"],
  answer: "push( )"
},
{
  title: " What is used primarily to add styling to a web page?",
  choices: ["HTML", "CSS", "JavaScript", "None of the above."],
  answer: "CSS"
},
{
  title: "Commonly used data types DO NOT include:",
  choices: ["Boolean", "strings", "alert", "numbers"],
  answer: "alert"
},
{
  title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
  choices: ["JavaScript", "console log", "for loops", "terminal / bash"],
  answer: "console log"
}
]

let score = 0;
let currentQuestion = -1;
let timeCount = 0;
let timer;

//start the quiz once user clicks the 'start' button
function start() {

timeCount = 75;
timer = setInterval(function() {
    timeCount--;
    document.getElementById("timeCount").innerHTML = timeCount;

//when timer is below 0 at any time, the quiz end
    if (timeCount <= 0) {
        clearInterval(timer);
        endQuiz(); 
    }
}, 1000);

next();
}

//stop the timer to end quiz
function endQuiz() {
clearInterval(timer);

var questionContent = `
    <h2>End!</h2>
    <h3>Your Score: ` + score +  ` /100!</h3>
    <h3>You got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="yourName" placeholder="Your Name"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("questions").innerHTML = questionContent;
}

//store on local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('yourName').value);
    getScore();
}


function getScore() {
    var questionContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    <button onclick="resetQuiz()">Play Again!</button>
    `;
    document.getElementById("questions").innerHTML = questionContent;
}


//reset the quiz
function resetQuiz() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeCount = 0;
    timer = null;

    document.getElementById("timeCount").innerHTML = timeCount;

let questionContent = `
<h1>JavaScript Quiz!</h1>
<h3>Click to play!   </h3>
<button onclick="start()">Start!</button>`;

document.getElementById("questions").innerHTML = questionContent;

}

//deduct 15seconds if the answer is incorrect 
function incorrect() {
timeCount -= 15; 
next();
}

//increases the score by 20points if the answer is correct
function correct() {
score += 20;
next();
}

//loops through the questions 
function next() {
currentQuestion++;

if (currentQuestion > questions.length -1) {
    endQuiz();
    return;
}

let questionContent = "<h2>" + questions[currentQuestion].title + "</h2>"

for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    let A = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
    A = A.replace("[CHOICE]", questions[currentQuestion].choices[i]);
    if (questions[currentQuestion].choices[i] == questions[currentQuestion].answer) {
        A = A.replace("[ANS]", "correct()");
    } else {
        A = A.replace("[ANS]", "incorrect()");
    }
    questionContent += A
}


document.getElementById("questions").innerHTML = questionContent;
}