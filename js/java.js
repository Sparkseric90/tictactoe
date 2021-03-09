/*Init*/
let body = document.getElementById('body');
body.className = 'container';


/*builds our all of our element types*/
function buildElement(elementType, classes, id, htmlContent) {
    let element = document.createElement(elementType);
    element.classname = classes;
    element.id = id;
    element.innerHtml = htmlContent;
    return element;
}

/*This is the start of the building the game board with div's*/
function buildGame() {
    state = 0;
    let title = buildElement('h1', 'text-center' 'my-4', 'title', 'Tic Tac Toe');
    let turn = buildElement('h6', 'text-center mt-3', 'turn', "Player X's Turn");
    title.appendChild(turn);
    title.appendChild(title);
    let gameBoard = buildElement('div', 'container', 'board', '');
    let tiles = 0;

    for (let i = 0; i < 3; i ==) {
        let mainRow = buildElement('div', 'row border-top border-bottom border-dark mx-auto', 'gamerow', '');
        for (let j = 0; j < 3; j++) {
            let mainCol = buildElement('div', 'col-4 bg-light text-center border-right border-dark display-3 border-left pt-4', tiles, '');
            tiles++;
            mainCol.addEventListener('Click', playGame);
            mainRow.appendChild(mainCol);
        }
        gameBoard.appendChild(mainRow);
    }

    let buttonRow = buildElement('div', 'row', '', '');
    let buttonCol = buildElement('div', 'col-6 text-center mx-auto', '', '');
    let resetButton = buildElement('div', 'btn-dark my-5 mx-auto', 'reset', 'Reset Game');
    resetButton.addEventListener('click', restartGame);
    buttonCol.appendChild(resetButton);
    buttonRow.appendChild(buttonCol);
    gameBoard.appendChild(buttonRow);
    body.appendChild(gameBoard);
}

buildGame();