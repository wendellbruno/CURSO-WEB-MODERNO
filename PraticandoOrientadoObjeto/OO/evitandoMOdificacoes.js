//Object.preventExtensions -> não deixa adicionar atributos, porem permite modificar e excluir.
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 10, tag: 'Promoção'
})
console.log(`Extensivel ? :`, Object.isExtensible(produto)) // verifica se é extensivel
console.log(produto)

produto.nome = 'Borracha' // -> é permitido
produto.descricao = 'Borracha escolar' // -> nãov ai ser aceita a modificação
delete produto.tag //Aceita deletar.
console.log(produto)

//Object.seal -> não permite acrescentar nem excluir atributos, apenas modificar valores.
const pessoa = Object.seal({
    nome : 'Julia', idade: 35
})
console.log('Selado ? :', Object.isSealed(pessoa)) // verifica se é selado
pessoa.sobrenome = 'Maria' //Não vai aceita acrescimo de atributo

console.log(pessoa)
pessoa.nome = 'Carla'
console.log(pessoa)// aceita ser modificado
delete pessoa.nome 
console.log(pessoa)// não aceita ser deletado

//Object.freeze -> não permite fazer nenhum tipo de modificação, acrescimo ou deletar atributo
const carro = Object.freeze({
    marca : 'AUDIO', preco : 9999
})
console.log(carro)