var a = prompt('add a');
var b = prompt('add b');
var value = (a * a) + (2 * a * b) + (b + b);

alert('Wynik działania: ' + value);
console.log('Wynik działania matematycznego: ' + value);

if (value > 0) {
    alert('Liczba dodatnia: ' + value);
} else if (value < 0) {
    alert('Liczba ujemna: ' + value);
} else {
    alert('Wynik to: ' + value);
}

/*var age = prompt('Enter your age');
alert('Masz ' + age + ' lat!' );
console.log('Hello, '); */