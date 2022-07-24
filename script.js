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

    if (result) {
        return `You Win! ${player} beats ${comp}`;
    } else {
        return `You Lose! ${comp} beats ${player}`;
    }
}

