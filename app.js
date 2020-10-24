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