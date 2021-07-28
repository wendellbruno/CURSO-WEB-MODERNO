// com promisse 

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res =>{
            let resultado =''
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end', () =>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    re
                }
            })
        })
    })
}

//Rescurso do ES8, Objetivo simplificar o condigo assicrono.

let obterAluno = async () =>{
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')

    return [].concat(ta,tb,tc)
    //Retorna um objeto AsyncFunction
} 

obterAluno()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))