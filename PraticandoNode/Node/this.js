console.log(this === global)
console.log(this === module)
console.log("Fora de uma função");
console.log(this === module.exports)
console.log(this === exports)

function logthis(){
    console.log("Dentro de uma função");
    console.log(this===exports)
}
logthis(); //mas é igual a global.