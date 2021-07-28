/* meu metodo

const fs = require('fs');

const caminho = __dirname +'./dados'


function desafio(){
    return new Promise( resolve => {
        () => {
            fs.readFile(caminho, 'utf8', (err, conteudo))
            const conteudo1 = conteudo.toString()
        }
        resolve(conteudo1)
    })
}

desafio().then(console.log) */

const fs = require('fs')
const path = require('path')

function lerArquivo(caminho){
    new Promise(resolve =>{
        fs.readFile(caminho,function(_,conteudo){
            resolve(conteudo.toString())
        })
        console.log('depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
