//Highscore Storage function from local storage or array
function printHighscores (){
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    console.log()

    //Rank scores in descending order - high scores shows on top
    highscores.sort((a, b) => b.score - a.score);

    for (var i = 0; i <highscores.length; i += 1) {
        var liTag = document.createElement('li');
        liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score

        //View scores
        var olEl =document.getElementById ('highscores');
        olEl.appendChild (liTag);
    }
}

function clearHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload ();
}

document.getElementById('clear').onclick = clearHighscores;

//View score page when the page loads

printHighscores ();