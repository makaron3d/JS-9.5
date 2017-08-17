var HTMLButtonElement = document.getElementsByClassName('button');
console.log(HTMLButtonElement);
var buttonsNumber = HTMLButtonElement.length;
var buttonText = HTMLButtonElement.innerText;

    for (var i = 0; i < buttonsNumber; i++) {
        console.log(HTMLButtonElement + i);
        console.log(buttonText);
        }

