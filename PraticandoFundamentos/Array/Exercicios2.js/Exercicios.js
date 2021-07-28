//questão 1
const comprimentar = (nome) => `Olá ${nome} !`
console.log(comprimentar('Leonardo'))

function saudacao(){
    const saudacao1 = 'Ola'
    return [saudacao1,nome].join(', ').concat('!')
}

//Questão 2

const anosEmDias = (idade) => idade * 365
console.log(anosEmDias(70))

//Questão 3

const calculoSalario = (horasTrabalhas,valorPorHora) => `Salario R$: ${(horasTrabalhas * valorPorHora)}`
console.log(calculoSalario(150,40.5))

//Questão 4
function meses(numMes){
   const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
   'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

   return mapeamento[--numero]
}

console.log(meses(3))