// Add variables to ensure the quiz flows logically and answers are saved
var currentQuestionIndex=0;
var time = questions. Length * 15;
var timerId;

// Add variances to the elements
var questionsEl = document. getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById ('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl=.document.getElementById('feedback');

// Define Start Quiz Function
function startQuiz(){
    // Hide Questions
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.attribute('class', 'hide');

    // Unhide Questions
    questionsEl.removeAttribute('class');

    // Begin Timer
    

}

