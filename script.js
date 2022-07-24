function getComputerChoice() {
    const keys = {
        1: "Rock",
        2: "Paper",
        3: "Scissors"
    };
    let option = Math.floor(Math.random() * 3) + 1;
    return keys[option];
}

console.log(getComputerChoice());