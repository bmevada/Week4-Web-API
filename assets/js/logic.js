// Add variables to ensure the quiz flows logically and answers are saved
var currentQuestionIndex = 0;
var time = questions.length * 15;
console.log(time)
var timerId;

// Add variances to the elements
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');


function startQuiz() {
    console.log(1)
    // Quiz start up
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.classList.add('hide');

    // Show Questions
    questionsEl.classList.remove('hide');

    // Begin Timer
    timerId = setInterval(clockTick, 1000);

    //Show timer at start
    timerEl.textContent = time;

    getQuestion();

}

function getQuestion() {
    // Obtain current question array
    var currentQuestion = questions[currentQuestionIndex];
    
    //Update title with current question selection
    var titleEL = document.getElementById('question-title');
    titleEL.textContent = currentQuestion.title;
   

    //Remove previous question selection
    choicesEl.innerHTML = ' ';

   
    console.log(currentQuestion.choices.length)
    //Loop choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement('button');
        console.log(choiceNode)
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + '. ' + choice;

        //Display choice on page

        choicesEl.append(choiceNode);

    }
}

function questionClick(event) {
    console.log(6)
    var buttonEl = event.target;
    if(!feedbackEl.classList.contains('hide')){
        feedbackEl.classList.add('hide')
    }

    //If clicked answer is not a choice button, do nothing.
    if (!buttonEl.matches('.choice')) {
        return
    }

    //If answer is incorrect - deduct 15 seconds
    if (buttonEl.value !== questions[currentQuestionIndex].answer) {
        time -= 15;
        if (time < 0) {
            time = 0;

        }
        //Update timer
        timerEl.textContent = time;
        feedbackEl.textContent = 'Incorrect Answer!';
        feedbackEl.classList.remove('hide')


    } else {
        feedbackEl.textContent = 'Well done! Correct Answer!';
        feedbackEl.classList.remove('hide')
    }

    //Highlight correct/incorrect answer on page
    feedbackEl.setAttribute('class', 'feedback');
    setTimeout(function () {
        feedbackEl.setAttribute('class', 'feedback hide');
    }, 3000);

    //Next Question
    currentQuestionIndex++;

    //Check for additional questions
    if (time <= 0 || currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd(){
    //Stop timer
    clearInterval(timerId)
    //Show finish screen
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');

    //Show final score
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;

    //Hide questions attribute
    questionsEl.setAttribute('class', 'hide');
}





//Update Timer
function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}

//Highscore Storage - Ensure score value is not empty in local storage; add new score object; save to local storage; and then redirect the user to the next page

function saveHighscore() {
    var initials = initialsEl.value.trim();
    if (initials !== '') {
        var highscores =
            JSON.parse(window.localStorage.getItem('highscores')) || [];

        var newScore = {
            score: time,
            initials: initials
        }
        //Save to local storage
        highscores.push(newScore);
        window.localStorage.setItem('highscores', JSON.stringify(highscores));

        //Continue to next page
        window.location.href = 'highscores.html';
    }
}

//Save highscore
function checkforEnter(event) {
    if (event.key === 'Enter') {
        saveHighscore();
    }
}

//Submit score when quiz is completed
submitBtn.onclick = saveHighscore;

//Start quiz
startBtn.onclick = startQuiz

//User clicks on element containing choices
choicesEl.onclick = questionClick;

initialsEl.onkeyup = checkforEnter;