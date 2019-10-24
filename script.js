let p1Score = 0;
let p2Score = 0;
let gameStarted = false;
let turn = "P1"


const diceImage = document.querySelector(".diceImage");
const newGame = document.querySelector(".newGame");
const rollButton = document.querySelector(".button");
const rules = document.querySelector(".rules")

rollButton.style.display = "none";
diceImage.style.display = "none";

newGameFunction = () => {
    gameStarted = true;
    newGame.style.display = "none"
    diceImage.style.display = "block"
    rules.style.display = "none"
    rollButton.style.display = "block"
    document.querySelector(".player1Info").textContent = "Player One:";
    document.querySelector(".player2Info").textContent = "Player Two:";
    document.querySelector(".player1Score").textContent = (`Your Score is: ${p1Score}`)
    document.querySelector(".player2Score").textContent = (`Your Score is: ${p2Score}`)
    
}

newGame.addEventListener("click", () =>{
    newGameFunction()
})


rollButton.addEventListener("click", () => {
    let randomRoll = Math.floor(Math.random() * 6) + 1; // +1 because we dont want 0
    //console.log(randomRoll);
    diceImage.src = `img/dice${randomRoll}.png`; // this appends the number of the random roll to the file


switch (true){
    case randomRoll != 1 && turn == "P1":
        p1Score += randomRoll
        turn = "P2"
        document.querySelector(".player1Score").textContent = `Your Score is: ${p1Score}`
        checkForWin()
        break;
    case randomRoll != 1 && turn == "P2":
        p2Score += randomRoll
        turn = "P1"
        document.querySelector(".player2Score").textContent = `Your Score is: ${p2Score}`
        checkForWin()
        break;
    default:
        p1Score = 0;
        p2Score = 0;
        document.querySelector(".player1Score").textContent = "GAME OVER"
        document.querySelector(".player2Score").textContent = "GAME OVER"
        gameOver()
    }
})

const checkForWin = () => {
    if(p1Score > 20){
        document.querySelector(".player1Info").textContent = "Player 1 - Winner Winner Chicken Dinner!! ";
        document.querySelector(".player2Info").textContent = "Player 2 - Loser Loser get to the boozer :(";
        gameOver()
        
    }
    if(p2Score > 20){
        document.querySelector(".player1Info").textContent = "Player 1 - Loser Loser get to the boozer :(";
        document.querySelector(".player2Info").textContent = "Player 2 - Winner Winner Chicken Dinner!! ";
        gameOver()
        
    }
}

const gameOver = () =>{
    p1Score = 0;
    p2Score = 0;
    rollButton.style.display = "none";
    newGame.style.display = "block"
}

