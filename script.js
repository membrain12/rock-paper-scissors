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
        return "Tie!";
    } else if (player == "rock" && comp == "paper") {
        result = false;
    } else if (player == "scissors" && comp == "rock") {
        result = false;
    } else if (player == "paper" && comp == "scissors") {
        result = false;
    } else {
        result = true;
    }

    return result;
}

let playerScore = 0;
let compScore = 0;
let round = 1;

function game(choice) {

    
    let result = playRound(choice, getComputerChoice())
        
    if (result) {
        playerScore++;
        round++;
        console.log("You win!")
        console.log(`The Score is Player: ${playerScore} Computer: ${compScore}`);
    } else {
        compScore++;
        round++;
        console.log("You lose");
        console.log(`The Score is Player: ${playerScore} Computer: ${compScore}`);
    } 
}

const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function(event){
        game(btn.textContent)
     });
});
