// lendo propriedades de um objeto

// Criar um método para ler as propriedades de um object e
// exibir somente as propriedades do tipo string que estão nesse object

const filme = {
    nome: 'Alien',
    ano: 2016,
    recomentacao: 16,
    autor: 'Van Damme'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){

    for(prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
} 