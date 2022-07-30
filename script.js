function getComputerChoice() {
    const keys = {
        1: "Rock",
        2: "Paper",
        3: "Scissors"
    };
    let option = Math.floor(Math.random() * 3) + 1;
    return keys[option];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let comp = computerSelection.toLowerCase();

    let result = true;

    if (player === comp) {
        return null;
    } else if (player == "rock" && comp == "paper") {
        result = false;
    } else if (player == "scissors" && comp == "rock") {
        result = false;
    } else if (player == "paper" && comp == "scissors") {
        result = false;
    } else if (player == comp) {
        result = null;
    } else {
        return result;
    }

    return result;
}

let playerScore = 0;
let compScore = 0;
let round = 1;

const roundDisplay = document.querySelector('.round');
const commentary = document.querySelector('.commentary');
const finalResults = document.querySelector('.final');
const results = document.querySelector('.results');


function game(choice) {
    let result = false;
    if (playerScore == 5 || compScore == 5) {
        return;
    } else {
        result = playRound(choice, getComputerChoice());
    }
    
        
    if (result) {
        playerScore++;
        round++;
        roundDisplay.textContent = `Round ${round}`;
        commentary.textContent = `The Score is Player: ${playerScore} \n Computer: ${compScore}`;
    } else if (!result){
        compScore++;
        round++;
        roundDisplay.textContent = `Round ${round}`;
        commentary.textContent = `The Score is Player: ${playerScore} \n Computer: ${compScore}`;
    } else {
        commentary.textContent = `Tie! \n The Score is Player: ${playerScore} \n Computer: ${compScore}`;
    }
    if (playerScore == 5) {
        finalResults.textContent = "YOU WIN!";
        const tryAgain = document.createElement('button');
        tryAgain.textContent = "Try Again";
        tryAgain.addEventListener('click', function(event) {
            round = 0;
            playerScore = 0;
            compScore = 0;
            finalResults.textContent = "";
            commentary.textContent = "";
            roundDisplay.textContent = "Round 1";
            results.removeChild(tryAgain);
        });
        results.appendChild(tryAgain);

    }
    if (compScore == 5) {
        finalResults.textContent = "YOU LOSE";
        const tryAgain = document.createElement('button');
        tryAgain.textContent = "Try Again";
        tryAgain.addEventListener('click', function(event) {
            round = 0;
            playerScore = 0;
            compScore = 0;
            finalResults.textContent = "";
            commentary.textContent = "";
            roundDisplay.textContent = "Round 1";
            results.removeChild(tryAgain);
        });
        results.appendChild(tryAgain);
    }
}

const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function(event){
        if (playerScore != 5 && compScore != 5) {
            game(btn.textContent)
        }
     });
});
