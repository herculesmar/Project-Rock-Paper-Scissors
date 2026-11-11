let hs = 0;
let cs = 0;
let currentRound = 0;

const humanScore = document.querySelector(".player_score");
const computerScore = document.querySelector(".computer_score") ;
const roundCount = document.querySelector(".n_round");
const comment = document.querySelector(".comment");
const pc = document.querySelector(".player_choice")
const pci = document.createElement("img")
pc.appendChild(pci)
const cc = document.querySelector(".computer_choice")
const cci = document.createElement("img")
cc.appendChild(cci)

function getComputerChoice(){
    const list = ["rock","paper","scissors"];
    const choice = Math.floor(Math.random() * 3);
    cci.src = `./images/${list[choice]}.jpeg`;
    return list[choice];
}

function playRound(humanChoice){
    if (currentRound >= 5) return;
    pci.src =`./images/${humanChoice}.jpeg`
    currentRound++;
    roundCount.textContent = currentRound;

    const computerChoice = getComputerChoice();
    let result;

    if (humanChoice == computerChoice) {
        result = 0;
    } else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        result = 1;
    } else {
        result = 2;
    } 

    switch(result) {
        case 0 : 
            currentRound--
            break;
        case 1 : 
            cs++;
            computerScore.textContent = cs;
            break;
        case 2 : 
            hs++;
            humanScore.textContent = hs;
            break;
    }       

    if (currentRound === 5) {
        if (cs < hs)
            comment.textContent = "You win !";
        else
            comment.textContent = "You lose !";
    }
}

function playGame(){
    cs = 0;
    hs = 0;
    currentRound = 0;
    pci.src = ""
    cci.src = ""

    humanScore.textContent = 0;
    computerScore.textContent = 0;
    roundCount.textContent = 0;
    comment.textContent = "Game started! Make your move.";
}

document.querySelector(".rock").addEventListener("click", () => {playRound("rock"); });
document.querySelector(".paper").addEventListener("click", () => {playRound("paper") ;});
document.querySelector(".scissors").addEventListener("click", () => {playRound("scissors") ;});

const al = document.querySelector(".play");
al.addEventListener("click", playGame);