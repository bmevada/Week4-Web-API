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

    // Show Questions
    questionsEl.removeAttribute('class');

    // Begin Timer
    timerId = setInterval(clockTick, 1000);

    getQuestion();

}
function getQuestion(){
    // Obtain current question array
    var currentQuestion = questions [currentQuestionIndex];

    //Update title with current question selection
    var titleEL = document.getElementById('question-title');
    titleEL.textContent = currentQuestion.title;

    //Remove previous question selection
}

