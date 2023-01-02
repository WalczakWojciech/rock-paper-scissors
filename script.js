function getComputerChoice(){
    const arrayComp = ["Rock", "Paper", "Scissors"];
    let computerSelection = arrayComp[Math.floor(Math.random()*arrayComp.length)];
    return computerSelection;
}
function getUserChoice(){
    // return playerSelection by buttons
}

function playRound(playerSelection, computerSelection){
    const str = playerSelection.toLowerCase();
    const str1 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str1);
}

const playerSelection = "roCk";
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

getComputerChoice();
console.log(computerSelection);
playRound(playerSelection, computerSelection);


