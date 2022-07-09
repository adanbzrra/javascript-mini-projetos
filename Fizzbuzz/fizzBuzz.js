// comparar alguns valores e retornar baseado em um valor de entrada.
// divisível por 3 => Fizz
// divisível por 5 => Buzz
// divisível por 3 e 5 => FizzBuzz
// não é divisível por 3 ou 5 => entrada 
// não é número retorna não é um número

const resultado = fizzBuzz(15); //passar o valor aqui()

console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
    return 'FizzBuzz';
    if (entrada % 3 == 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz'    
    if (entrada % 5 === 0)
        return
    return entrada;
}