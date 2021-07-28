function gerarNumeros(min,max){
    if(min > max){
        [max,min] = [min,max]
    }
    return new Promise( resolve => {
        setTimeout( () => {
            const aleatorio = parseInt(Math.random() * (max-min + 1)) + min
            resolve(aleatorio)
        }, 2000)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeros(1,60,4000),
        gerarNumeros(1,60,5000),
        gerarNumeros(1,60,3000),
        gerarNumeros(1,60,6000)
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))