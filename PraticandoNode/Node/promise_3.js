/*function gerarNumerosEntre(min,max){
    if(min > max){
       [max,min] = [min , max]
    }
    return new Promise( resolve => {
       setTimeout( () =>{
          const aleatorio = parseInt(Math.random() * (max-min +1)) + min
          resolve(aleatorio)
       
    })
})*/

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

gerarNumeros(10,30).then(console.log)