
/* Setting up arrays and maps for comparisons */
var choices = ["Rock", "Paper", "Scissor"];
const gameChoice = new Map();
gameChoice.set("Rock", "Scissor");
gameChoice.set("Scissor", "Paper");
gameChoice.set("Paper", "Rock");

/* Variables for games content */
var playerPoints = 0;
var compPoints = 0;

/* Getting necessary info from DOM */
const rockImg = document.getElementById("Rock");
const paperImg = document.getElementById("Paper");
const scissorImg = document.getElementById("Scissor");

const playerImg = document.getElementById("player-img");
const compImg = document.getElementById("computer-img");
const playerScore = document.getElementById("player-scores");
const computerScore = document.getElementById("computer-scores");
const resultScreen = document.querySelector('.result');
const choiceScreen = document.querySelector(".choices");
const resetButton = document.querySelector(".reset-game");
const nextButton = document.querySelector(".next-round");
const gameResult = document.querySelector(".result-text");
const endResult = document.querySelector(".end-text");

/* adding event listener to rock, paper, and scissor */
rockImg.addEventListener("click", handleChoice);
paperImg.addEventListener("click", handleChoice);
scissorImg.addEventListener("click", handleChoice);
resetButton.addEventListener("click", reset);
nextButton.addEventListener("click", nextRound);

function reset(){
    playerPoints = 0;
    compPoints = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    resultScreen.style.display = "none";
    choiceScreen.style.display = "flex";
}

function nextRound(){
    resultScreen.style.display = "none";
    choiceScreen.style.display = "flex";
}

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice, compChoice){

    if(gameChoice.get(compChoice) == playerChoice){
        return "Computer"
    }else if(gameChoice.get(playerChoice) == compChoice){
        return "Player";
    }else{
        return "Tie";
    }
}

function addPoints(result){
    if(result == 'Player'){
        playerPoints += 1;
        playerScore.textContent = playerPoints;
    }else{
        compPoints += 1;
        computerScore.textContent = compPoints;
    }
}

function setSrc(playerChoice, compChoice){
    switch(playerChoice){
        case "Rock":
            playerImg.src = "./images/Rock.png";
            break;
        case "Paper":
            playerImg.src = "./images/Paper.png";
            break;
        case "Scissor":
            playerImg.src = "./images/Scissor.png";
            break;
    }

    switch(compChoice){
        case "Rock":
            compImg.src = "./images/Rock.png";
            break;
        case "Paper":
            compImg.src = "./images/Paper.png";
            break;
        case "Scissor":
            compImg.src = "./images/Scissor.png";
            break;
    }
}

function handleChoice(){
    playerChoice = this.id;
    compChoice = getComputerChoice();
    let result = playRound(playerChoice, compChoice);
    if(result != 'Tie'){
        addPoints(result);
        gameResult.textContent = result + " won this round!";
    }else{
        gameResult.textContent = "It's a tie!";
    }
    setSrc(playerChoice, compChoice);

    if(playerPoints >= 5 || compPoints >= 5){
        nextButton.style.display = "none";
        if(playerPoints > compPoints){
            endResult.textContent += "Player won the game!";
        }else{
            endResult.textContent += "Computer won the game!";
        }
    }
    choiceScreen.style.display = "none";
    resultScreen.style.display = "flex";

}



/*
1. When player clicks on either of the images, it triggers a event, and in the js, there should be a function that handles
the event, and determine which choice did the player make
2. Now that we know the choice that the player made, there should be a function that determines the choice that the computer made
3.
*/