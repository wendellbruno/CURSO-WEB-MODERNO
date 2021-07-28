const aluno = [ 
    { nome : 'Alex', nota : 7.6, bolsista : true },
    { nome : 'Pedro', nota : 6.0, bolsista : false},
    { nome : 'Carla', nota : 4.5, bolsista : true},
    { nome : 'Maria', nota : 8.7, bolsista : false}
]

//Desafio 1 :verificar bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(aluno.map(a => a.bolsista).reduce(todosBolsistas))

//DEsafio 2: Algum aluno é bolsista ?
const algumBolsista = ( resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a => a.bolsista).reduce(algumBolsista))

//com filter
console.log(aluno.filter(function(bolsistas){
    return bolsistas.bolsista == true
}))


 


