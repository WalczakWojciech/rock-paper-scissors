let playerSelection = null;
let computerSelection = null;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    const arrayComp = ["Rock", "Paper", "Scissors"];
    computerSelection = arrayComp[Math.floor(Math.random()*arrayComp.length)];
    return computerSelection;
}

function getUserChoice(){
    let inputPlayer = prompt("Rock, paper or scissors?");
    inputPlayer = inputPlayer.toLowerCase();
    playerSelection = inputPlayer.charAt(0).toUpperCase() + inputPlayer.slice(1);
    return playerSelection;
    // return playerSelection by buttons
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore += 1; 
        return ("You win! Paper beats Rock");
        } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
            //("You lose! Scissors beats Paper");
            return computerScore += 1;
            } else if (playerSelection == "Rock" && computerSelection == "Paper"){
                //("You lose! Paper beats Rock");
                return computerScore += 1;
            } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
                //("You win! Rock beats Scissors");
                return playerScore += 1;
                } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
                    //("You win! Scissors beats Paper");
                    return playerScore += 1;
                } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
                    //("You lose! Rock beats Scissors");
                    return computerScore += 1;
            } else {
                console.log("Draw!");
            };
}

function game(){
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getUserChoice();
        console.log(computerSelection);
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playerScore, computerScore);
        //playerSelection = prompt("Rock, paper or scissors?");
        }
    if (playerScore > computerScore){
                console.log("You WIN!");
            } else {
                console.log("You LOSE!");
            }
        } 
    

game();

