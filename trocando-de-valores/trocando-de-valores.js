/* Trocando valores */

let a = 'vermelho';
let b = 'azul';
let c = a;

function TrocaValores() {
    a = b;
    b = c;
};

TrocaValores();
console.log(a);
console.log(b);