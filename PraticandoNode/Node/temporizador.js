const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 1', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

//cancela a atividade em execução
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelamento')
},20000) // no segundo 20

//Atividade por recorencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // executa de segunda a sexta feira ( 1, 5 )
regra.hour= 11 // as 11h
regra.second = 30 // no segundo 30

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando tarefa 2', new Date().getSeconds())
})

