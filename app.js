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

  // Start the quiz once user click the start button
  function start() {
      timeCount = 75;
      timer = setInterval(function(){
          timeCount--;
          document.getElementById("timeCount").innerHTML = timeCount;
          if (timeCount <= 0) {
              clearInterval(timer);
              endQuiz();
          }
      }, 1000);
  }

  // Stop timer to end quiz
  function endQuiz(){
      clearInterval(timer);
      let questionContent = `
      <h2>End Quiz!</h2>
      <h3>Your Score: ` + score + ` /100</h3>
      <h3>You got ` + score + ` questions correct!</h3>
      <input type="text" id="yourname" placeholder="Your Name">
      <button onclick="setscore()">Set Score</button>`;

      document.getElementById("questions").innerHTML = questionContent;
  }

  // Store the scores on local storage
  function setScore(){
      let highscoreName = document.getElementById("yourname").value
      localStorage.setItem("highscore", score);
      localStorage.setItem("highscoreName", yourname);
      getScore();
  }

  function getScore(){
      let questionContent = `
      <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
      <h1>` + localStorage.getItem("highscore") + `</h1>
    <button onclick="reset()">Play Again</button>
    `;
    document.getElementById("questions").innerHTML = questionContent;
  }