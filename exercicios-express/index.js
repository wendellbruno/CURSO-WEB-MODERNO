const express = require('express')
const app = express();
const saudacao = require('./saudacaoMidd')
const bodyParser = require('body-parser')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao("Wendell"))
const usuarioApi = require('./api/usuarios')
const produtoApi = require('./api/produto')
produtoApi(app, 'Com param !')
app.post('/usuarios', usuarioApi.salvar)
app.get('/usuarios', usuarioApi.obter)





app.use((req,res, next)=>{
    console.log('Será que serei chamado ?')
    console.log('Antes....')
    next()
})


app.get('/clientes/relatorio', (req,res) =>{
    res.send(`cliente relatorio: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req,res) =>{
    res.send(req.body)
})

app.get('/clientes/:id',(req,res) =>{
    res.send(`cliente ${req.params.id} selecionado!`)
})


app.get('/opa',(req, res, next) =>{
    console.log('durante....')
   res.json({
        name:"ipad 32gb",
        price: 1899,
        discount: 0.12
    })
    next()
    //res.send('Estou bem')
})

app.use((req,res, next)=>{
    console.log('Depois....')

})



app.listen(3000, () => {
    console.log('Backend executando...')
})
