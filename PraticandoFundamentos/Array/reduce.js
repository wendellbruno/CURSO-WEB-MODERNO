const aluno = [ 
    { nome : 'Alex', nota : 7.6 },
    { nome : 'Pedro', nota : 6.0},
    { nome : 'Carla', nota : 4.5},
    { nome : 'Maria', nota : 8.7}
]

console.log(aluno.map(a => a.nota))
const resultado = aluno.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(`Acumulado : ${acumulador}, Atualizado : ${atual}`)
    return acumulador + atual
}, 0) // se nao colocar o inicio ele altomaticamente fica 0

console.log(`total ${resultado}`)