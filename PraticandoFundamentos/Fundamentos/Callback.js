const fabricante = ["Mercedes", "Audi", "BMW"];

function imprir(nome, indice){
    console.log(`${indice +1}, ${nome}`)
}

fabricante.forEach(imprir);
fabricante.forEach(fabricante => console.log(fabricante)) // retorno implicito. 