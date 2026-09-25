function getComputerChoice(){
    const list = ["rock","paper","scissors"] 
    const choice = Math.floor(Math.random()*3)
    return list[choice]
}

function getHumanChoice(){
    return choice = prompt("rock paper scissors shoot !!")
    
}
function playRound(humanChoice , computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {

        console.log("It's a tie");
        return 0;
    }

    else if ((humanChoice == "rock" && computerChoice == "paper")||(humanChoice == "paper"&&computerChoice == "scissors")||(humanChoice == "scissors" && computerChoice == "rock" ) ){
        console.log("You lose! " + computerChoice + " beats "+ humanChoice)
        return 1;
    }
    else{
        console.log("You win ! " + humanChoice + " beats " + computerChoice)
        return 2;
    } 
}

function playGame(){
    var humanScore = 0;
    var computerScore = 0 ;
    for(let i = 0 ; i< 5 ; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        switch(result) {
            case 0 : 
                break;
            case 1 : 
                computerScore++ ;
                break;
            case 2 : 
                humanScore ++ ;
                break
        }        
    }
    if(computerScore<humanScore)
        console.log("You win ! "+humanScore+"-"+computerScore)
    else if (computerScore>humanScore)
        console.log("You lose ! "+humanScore+"-"+computerScore)
    else 
        console.log("It's a Tie "+humanScore+"-"+computerScore)
}
playGame()