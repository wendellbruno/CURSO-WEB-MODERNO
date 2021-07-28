// Classe
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Wendell')
p1.falar();


const pessoa = nome => {
    return{
       falar : () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = pessoa('Alaide')
p2.falar();

//Factory   

function pessoa1(nome){
    this.nome = nome;

    this.falar() = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new pessoa1('Maria')
p2.falar();