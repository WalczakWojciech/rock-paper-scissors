function getComputerChoice(){
    const arrayComp = ["Rock", "Paper", "Scissors"];
    let randomComp = arrayComp[Math.floor(Math.random()*arrayComp.length)];
    return randomComp;
}
function getUserChoice(){
    // return playerSelection by buttons
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore += 1; 
        return ("You win! Paper beats Rock");
        } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
            computerScore += 1;
            return ("You lose! Scissors beats Paper");
            } else if (playerSelection == "Rock" && computerSelection == "Paper"){
                computerScore += 1;
                return ("You lose! Paper beats Rock");
            } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
                playerScore += 1;
                return ("You win! Rock beats Scissors");
                } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
                    playerScore += 1;
                    return ("You win! Scissors beats Paper");
                } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
                    computerScore += 1;
                    return ("You lose! Rock beats Scissors");
            } else {
                return ("Draw!");
            };
}


let playerSelection = prompt("Rock, paper or scissors?");
let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;


function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore, computerScore);
        playerSelection = prompt("Rock, paper or scissors?");
        }
    if (playerScore > computerScore){
                console.log("You WIN!");
            } else {
                console.log("You LOSE!");
            }
        } 
    

game();

