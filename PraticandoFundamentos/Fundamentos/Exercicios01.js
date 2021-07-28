// QUESTAO 1
function numeros (a,b){
    return console.log(`Soma ${a+b} Subtração ${a-b} Multiplicação ${a*b} Divisão ${a/b} `);
            
}
numeros(10,10);

//QUESTÃO 2
function triangulo (a,b,c){
    if(a == b && b == c){
      return console.log("Equilatero");
    }
    else if(a == b && b != c || a == c && b != a || b == c && c != a){
        return console.log("Isósceles")
    }
    else if( a != b && b != c){
        return console.log("Escaleno")
    }

}
 triangulo(1,2,3);

//QUESTÃO 4

function dinheiro(a,b){
    return console.log(Math.pow(`R$ ${a+b}`));
}

dinheiro(0.1+0.2);




