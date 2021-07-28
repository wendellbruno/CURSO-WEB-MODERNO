const pessoa ={
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // gera conflito de sintax entre os paradigmas;

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa();

