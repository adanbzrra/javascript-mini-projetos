//Velocidade máxima de até 70 
//A cada 5klm acima do limite você ganha 1 ponto na carteira
//utilize a função Math.floor()
//caso pontos maior que 12 -> "carteira suspendida"

verificarVelocidade(80);//passar o valor aqui

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if(velocidade <= velocidadeMaxima){
        console.log('ok');
    }else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima)/KmPorPonto));
        if(pontos >=12) {
            console.log('Carteira Suspensa');

        }else {
            console.log('Pontos', pontos);
        }
    }
}