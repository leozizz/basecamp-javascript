//Array contendo os alunos, nota e turma.
const alunos = [
    {
        nome: 'Lucas',
        nota: 8,
        turma: '3B',
    },
    {
        nome: 'José',
        nota: 5,
        turma: '3B',
    },
    {
        nome: 'Caroline',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Ana C',
        nota: 3,
        turma: '1C',
    }
];

//Função que irá popular o array auxiliar com os alunos de nota maior ou igual a média
function alunosAprovados(arr, media) {
    let aprovados = [];
    
    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 5))
