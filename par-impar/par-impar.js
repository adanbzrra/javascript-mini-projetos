// Recebe uma quantidade de valores para avaliar
// A função exibe se cada valor é par ou impar

exibirTipo(50);

function exibirTipo(limite){
    for(let i =0; i<= limite; i++ ){
        if( i % 2 === 0){
            console.log( i,'NÚMERO PAR');
        }else{
            console.log(i,'NÚMERO IMPAR');
        }
    }
}