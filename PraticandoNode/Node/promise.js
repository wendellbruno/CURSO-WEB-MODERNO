// é uma promessa que pode nao ser comprida.

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //reject(frase) //aceita apenas um parametro
            resolve(frase) //aceita apenas um parametro
        }, segundos *1000)
    })
}

falarDepoisDe(3,'Que legal')
 .then(outraFrase => console.log(outraFrase)) //posso encadear quantos then eu quiser, um vai seguir o outro
 // .catch(e => console.log(e)) o catch captura caso eu chame o reject