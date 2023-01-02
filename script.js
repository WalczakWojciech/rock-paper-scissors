function getComputerChoice(){
    const arrayComp = ["Rock", "Paper", "Scissors"];
    let computerSelection = arrayComp[Math.floor(Math.random()*arrayComp.length)];
    return computerSelection;
}
function getUserChoice(){
    // return playerSelection by buttons
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection == "Paper" && computerSelection == "Rock"){
        console.log("You win! Paper beats Rock");
        } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
            console.log("You lose! Scissors beats Paper");
            } else if (playerSelection == "Rock" && computerSelection == "Paper"){
                console.log("You lose! Paper beats Rock");
            } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
                console.log("You win! Rock beats Scissors");
                } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
                console.log("You win! Scissors beats Paper");
                } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
                console.log("You lose! Rock beats Scissors");
            } else {
                console.log("Draw!");
            };
}
const playerSelection = "roCk";
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

getComputerChoice();
console.log(getComputerChoice());
//console.log(playerSelection);
playRound(playerSelection, computerSelection);


