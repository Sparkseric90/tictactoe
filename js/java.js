//stores the game status element
const statusDisplay = document.querySelector('.game--status')

//Declaring variables that we will need to track the game state
let gameActive = true;
//stores the current player
let currentPlayer = "X";
//stores the current game state
let gameState = ["", "", "", "", "", "", "", "", ""];

//Declaring messages that will be displayed as the game is played
const winningMessage = () => 'Player ${currentPlayer} has won!';
const drawMessage = () => 'Game ended in a draw!';
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

//setting the initial msg to let the player know whos turn it will be

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

}
function handlePlayerChange() {
    currentPlayer = currentPlayer = "X" ? "0" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();

}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if ( a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
//checks if there are any values in our game state array that are not populated
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.InnerHTMl = drawMessage();
        gameActive = false;
        return;
    }
//If we have made it here, we know that no one has yet won the game.
    handlePlayerChange();
}
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
    //Checks to see if the cell has been played yet
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
        .forEach(cell => cell.innerHTML = "");
}



