const notas = [7, 8, 2.3, 3, 6, 5, 4];

const notasAltas = [ ]

for(let i in notas){
    if(notas[i] >= 7){
        notasAltas.push(notas[i])
    }
}
console.log(notasAltas);

// Forma com Callback;

const notasBaixas2 = notas.filter(function (notas){
    return notas < 7
})
console.log(notasBaixas2);

const notasBaixas3 = notas.filter(notas => notas < 7 ) // com Arrow
console.log(notasBaixas3)