var a = prompt('add a');
var h = prompt('add h');



function getTriangleArea(a, h) {
    if ((a > 0) && (h > 0)) {
        return (a * h / 2);
    } else {
        return alert('Nieprawidłowe dane!');
    }
    
    
}

alert(getTriangleArea(a, h));
console.log(getTriangleArea(-2, 7));
console.log(getTriangleArea(10, 15));
console.log(getTriangleArea(16, 33));
console.log(getTriangleArea(10, 15));
console.log(getTriangleArea(-2, 7));

