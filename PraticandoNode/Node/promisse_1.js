//let p = new Promise((resolve, reject) =>)

let p = new Promise(function(cumpriPromessa){
    cumpriPromessa(['Bia'])
})

p.then(valor => valor[0])
 .then(primeiro => primeiro[0])
 .then(letra => console.log(letra))