const lista = [
	{
		preco: 8,
		nome: 'achocolatado',
	},
	{
		preco: 10,
		nome: 'café',
	},
	{
		preco: 35,
		nome: 'carne',
	},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index++);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));