function myDisplayer(something) {
    console.log(something); // Muestra el resultado en la consola
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

// Llamada a las funciones
myCalculator(5, 6, myDisplayer);
