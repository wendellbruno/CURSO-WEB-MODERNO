/*
setTimeout(function (){
    console.log('executando callback')
},2000)

setTimeout( () => {
    console.log('teste')
},2000)

setTimeout( () => console.log('teste1'),200)

let i = 1;
setInterval( () => console.log(i),2000)*/

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise....')
            resolve()
        },tempo)
    })
}
esperarPor().then(texto => console.log())

function testando(tempo = 1500){
    return new Promise( (resolve) =>{
        setTimeout( () => {
            console.log('testando...')
            resolve()
        },tempo)
    })
}

testando().then(texto => console.log)
testando(100).then(texto => console.log(texto))