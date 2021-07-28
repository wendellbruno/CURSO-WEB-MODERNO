let dobro = function (a){
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // return está implicito

console.log(dobro(Math.PI))

let ola = function(){
    return 'olá';
}

ola = () => 'olá';

ola = _ => 'olá'; // o underline tbm significa parametro;
console.log(ola()) 