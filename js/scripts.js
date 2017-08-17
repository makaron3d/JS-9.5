var HTMLButtonElement = document.getElementsByClassName('button');
console.log(HTMLButtonElement);
var buttonsNumber = HTMLButtonElement.length;
   
for (var i = 0; i < buttonsNumber; i++) {
        console.log(HTMLButtonElement + i);
        console.log(HTMLButtonElement[i].innerText);
}

