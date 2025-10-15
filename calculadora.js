let cont;

while (cont !== "salir") {
    let num1 = parseInt(prompt("ingrese el primer numero: "));
    let num2 = parseInt(prompt("ingrese el segundo numero: "));
    let operacion = prompt("ingrese la operacion a realizar (suma,resta,multiplicacion,division): ");

    function realizarOperacion(a, b, op) {

        if (op === "suma") {
            alert("la suma es : " + (a + b));
        } else if (op === "resta") {
            alert("la resta es : " + (a - b));
        } else if (op === "multiplicacion") {
            alert("la multiplicacion es : " + (a * b));
        } else if (op === "division") {
            if (a === 0 || b === 0) {
                alert("ERROR!!! no se puede dividir entre cero");
            } else {
                alert("la division es : " + (a / b));
            }

        } else {
            alert(" ERROR !!! operacion no valida")
        }
    }




    realizarOperacion(num1, num2, operacion);
    cont = prompt("escriba salir para acabar");
    if(cont === "salir"){
        alert("gracias por utilizar la calculadora!!");
    }
}