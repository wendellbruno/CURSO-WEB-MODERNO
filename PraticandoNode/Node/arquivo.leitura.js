const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf8');
console.log(conteudo);

//assicrona

fs.readFile(caminho, 'utf8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo dapasta....')
    console.log(arquivos)
})
