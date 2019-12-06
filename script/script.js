
let inputContestant = document.getElementById('inputContestant');
let consoleLogBtn = document.getElementById('consoleLogBtn');
let deleteData = document.getElementById('deleteData');
let leaderBoard = document.getElementById('leaderBoard')
let button = document.getElementById('button');
let resetScore = document.getElementById('resetScore');
let players = [];

if (localStorage.getItem('leaderboardData')) {
   
    players = JSON.parse(localStorage.getItem('leaderboardData'))
    populateLeaderboard();
} else {
    players = [];
}


resetScore.addEventListener('click', function () {
    for (let player of players) {
        player.score = 0;
    }
    saveData();
    populateLeaderboard();
});

consoleLogBtn.addEventListener('click', function () {
    console.log(players);
   
});

deleteData.addEventListener('click', function () {
    players = [];
    saveData();
});

inputContestant.addEventListener('keypress', function (e) {
    
    if (e.keyCode === 13) {
        let obj = {
            name: e.target.value,
            score: 0
        }
        players.push(obj);
        inputContestant.value = "";
        saveData();
        populateLeaderboard();
    }
});

function populateLeaderboard() {
    leaderBoard.innerHTML = "";

    for (let i = 0; i < players.length; i++) {
        let row = document.createElement('div');
        let col1 = document.createElement('div');
        let col2 = document.createElement('div');
        let col3 = document.createElement('div');
        let name = document.createElement('p');
        let score = document.createElement('p');
        let button = document.createElement('p');

        row.setAttribute('class', 'row');
        col1.setAttribute('class', 'col');
        col2.setAttribute('class', 'col');
        col3.setAttribute('class', 'col');
        button.setAttribute('class', 'btn btn-primary');

        name.innerText = players[i].name;
        score.innerText = players[i].score;
        button.innerText = '+';

        button.addEventListener('click', function () {
            players[i].score++
            players.sort((a, b) => (a.score <= b.score) ? 1 : -1)
            saveData();
            populateLeaderboard();
        });

        col1.appendChild(button);
        col2.appendChild(name);
        col3.appendChild(score);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        leaderBoard.appendChild(row);
    }
}

function saveData() {
    localStorage.setItem('leaderboardData', JSON.stringify(players));
    
}

function sortPlayers() {

}





