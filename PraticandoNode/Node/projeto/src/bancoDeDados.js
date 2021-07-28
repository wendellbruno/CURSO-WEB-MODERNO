const sequence = {
    _id: 1,
    get id() {return this._id++}
}
 
const produtos = {}

function salvarProdutos(produto){
    if(!produto.id){
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}

function excluirProdutos(id){
   const produto = produtos[id]
   delete produtos[id]
   return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProtudos(){
    return Object.values(produtos)
}

module.exports = {salvarProdutos, getProduto,getProtudos, excluirProdutos}