const pai = { nome: 'Pedro', corCabelo: 'preto'};

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome:{ value: 'Bia', writable: false, enumerable: true
     }
    }
)
console.log(filha2)
filha2.nome = 'Carla' //o nome de filha2 nao vai sofrer alteração devido a declaração writable
console.log(`${filha2.nome} tam o cabelo ${filha2.corCabelo}`)

//como saber os keys (atributos atribuidos) de filhas

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//como saber oq foi herdado
for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}
