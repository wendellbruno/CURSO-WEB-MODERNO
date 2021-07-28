const piloto = ['Vettel','Alonso','Raikkonen','Massa']

piloto.pop() // remove o ultimo elemento do vetor
piloto.shift() // remove o primeiro elemnto da lista
piloto.push('Verstappern') // adiciona elemento na ultima possição do vetor
piloto.unshift('Hamolton') // adiciona elemento na primeira posição do vetor

//splice pode remover como adicionar elementos no ventos passando o indice
//Adicionar
piloto.spice(2,0,"Bottas",'Massa') // depois da segunda posição adciona os 2 elementos
piloto.splice(3, 1) // removi o primeiro elemnto dps do indice 3
//Slice
const pilotosNovo = piloto.slice(2) // cria um novo vetor aparti do 2 indice do vetor anterior
const pilotosNovo2 = piloto.slice(1 ,4) // cria um novo vetor aparti do indice 1 ao 3 



