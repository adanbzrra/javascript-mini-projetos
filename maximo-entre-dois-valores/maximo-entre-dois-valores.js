/*Escreva uma função que usa dois número
 e retorna o maior entre eles*/

 let a = 10;
 let b = 10;

 function RetornaMaior(){
    if(a>b) {
        return(
            console.log('O valor de a é maior que b: ', 'a = ', a, ' b = ', b)
        )
    } else if(a<b) {
        return(
            console.log('O valor de a é menor que b:', 'a = ', a, ' b = ', b)
        )
    } else if(a == b) {
        return(
            console.log('Os valor de a é igual a b: ', 'a = ', a, ' b = ', b)
        )
    }
 };

 RetornaMaior();

 /* Outra forma de criar */

 let valorMaior2 = RetornaMaior (20, 70);
 console.log(valorMaior2);

function RetornaMaior(x, y){
    if (x > y) {
        return x ;
    } else {
        return y;
    }
}

/* simplificando com operador ternário */

let valorMaior3 = RetornaMaior (100, 700);
 console.log(valorMaior3);

function RetornaMaior(numero1, numero2){
   return numero1 > numero2 ? numero1 : numero2 ;
}