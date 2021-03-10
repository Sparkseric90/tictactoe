//allows us to be able to use 1 line of code on the HTML.
let body = document.getElementById('body');
body.className = 'container';

//builds the HTML elements within the JS file
function buildElement(elementType, classes, id, htmlContent) {
    let element = document.createElement(elementType);
    element.className = classes;
    element.id = id;
    element.innerHTML = htmlContent;
    return element;
}


buildGame();
