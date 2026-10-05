//alert ("¡Bienvenido a CASA DE CAMBIO!");

const numero1 = Number(prompt("Digite um número: "));
const operador = prompt("Digite o operador (+,-,*,/): ");
const numero2 = Number(prompt("Digite outro número: "));
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;


if (operador === "+") {
    alert("O resultado da soma é: " + soma);
}
else if (operador === "-") {
    alert("O resultado da subtração é: " + subtracao);
}
else if (operador === "*") {
    alert("O resultado da multiplicação é: " + multiplicacao);
}
else if(operador === "/") {
    alert("O resultado da divisão é: " + divisao);
}
else {
    alert("Operador inválido. Por favor, digite um operador válido (+,-,*,/).");
}






console.log("o resultado é: " + soma);
console.log("a subtração é: " + subtracao);
console.log("a multiplicação é: " + multiplicacao);
console.log("a divisão é: " + divisao);