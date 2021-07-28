function getPreco( imposto = 0, moeda ='R$') {
    return `${moeda} ${this.preco * (1-this.desc) * (1 + imposto)} `
}

const carro = { preco : 49.900, desc : 0.20}

console.log(getPreco.call(carro))

console.log(getPreco.call(carro, 0.17 , '$'))
console.log(getPreco.apply(carro, [0.17, "$"]))