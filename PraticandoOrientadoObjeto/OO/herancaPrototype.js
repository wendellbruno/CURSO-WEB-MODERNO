// NO JS a herança é feita aparti do __proto__ 

Object.prototype.attr0 = '0' // não usar esse metodo, exeto casos espeficicos 
const avo = {attr1: 'a'}
const pai = { __proto__: avo, attr2: 'b'}
const filho = { __proto__: pai, attr3: 'c'}

console.log(filho.attr2)

const carro = {
    velAtual : 0,
    velMax : 200,
    acelerarMasi(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual = delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }

}

const ferrari ={
    modelo : 'F40',
    velMax : 324
}

const volvo = {
    modelo : 'V40',
    
    status(){
        return `${this.modelo}: ${super.status}`
    }
}
// outro metodo de declarar herança
Object.setPrototypeOf(ferrari,carro);
Object.setPrototypeOf(volvo,carro);

console.log(ferrari)
console.log(volvo)

volvo.acelerarMasi(250)
console.log(volvo.status())