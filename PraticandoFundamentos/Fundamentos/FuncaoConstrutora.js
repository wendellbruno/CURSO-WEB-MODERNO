function Carro(velocidadeMax = 200, delta = 5){
    // atributo privado;
    let velocidadeAtual =0;
    //Atributo publico;
    this.acelerar = function (){
        if(velocidadeAtual <= velocidadeMax){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMax;
        }
    }
    this.getValocidadeAtual = function(){
        return velocidadeAtual;
    }
    }    

    const uno = new Carro;
    uno.acelerar();
    console.log(uno.getValocidadeAtual());

    const ferrari = new Carro(500,60);
    ferrari.acelerar();
    ferrari.acelerar();
    console.log(ferrari.getValocidadeAtual());

    console.log(typeof Carro);
    console.log(typeof ferrari);