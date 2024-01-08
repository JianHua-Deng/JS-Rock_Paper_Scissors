
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

/* adding event listener to rock, paper, scissor, and buttons */
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
    endResult.textContent = "";
}

function nextRound(){
    resultScreen.style.display = "none";
    choiceScreen.style.display = "flex";
    resetButton.style.display = "inline"
    nextButton.style.display = "none";
}

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

/* Play a round by comparing playerChoice and computerChoice to the map*/
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

/* Linking playerImg and compImg to appropriate images in the images folder*/
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

/* The main function of the game */
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
    setSrc(playerChoice, compChoice); /* Set playerImg and compImg to point to right image they chose */

    if(playerPoints >= 5 || compPoints >= 5){
        if(playerPoints > compPoints){
            endResult.textContent += "Game Over! Player won the game!";
        }else{
            endResult.textContent += "Game Over! Computer won the game!";
        }
    }else{
        /* This exectues only when the game has no winner yet*/
        /* In such case, we DON'T show the reset button, and only shows the next button*/
        resetButton.style.display = "none"
        nextButton.style.display = "inline";
    }
    choiceScreen.style.display = "none";
    resultScreen.style.display = "flex";

}