const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 8, vendidos: 12 },
    { id: 2, nome: "Mouse", preco: 80, estoque: 25, vendidos: 40 },
    { id: 3, nome: "Teclado", preco: 150, estoque: 4, vendidos: 18 },
    { id: 4, nome: "Monitor", preco: 1200, estoque: 0, vendidos: 7 },
    { id: 5, nome: "Headset", preco: 250, estoque: 15, vendidos: 22 },
    { id: 6, nome: "Webcam", preco: 300, estoque: 3, vendidos: 9 }
];

function calcularValorEstoque(produto) {
    const { preco, estoque } = produto
    return preco * estoque
}


function filtrarEstoqueBaixo(produtos) {
    return produtos.filter(({ estoque }) => estoque <= 5)
}

function filtrarProdutosSemEstoque(produtos) {
    return produtos.filter(({ estoque }) => estoque === 0)
}

function calcularValorTotalEstoque(produtos) {
    return produtos.reduce((acumulador, { preco, estoque }) => {
        return acumulador + preco * estoque
    }, 0)
}

function calcularTotalVendido(produtos) {
    return produtos.reduce((acumulador, { vendidos }) => {
        return acumulador + vendidos
    }, 0)
}

function encontrarProdutoMaisVendido(produtos) {

    return produtos.reduce((acumulador, produto) => {

        if (produto.vendidos > acumulador.vendidos) {
            return produto
        }

        return acumulador
        
    }, produtos[0])
    

}

function verificarProdutosSemEstoque(produtos){
   return produtos.some(({estoque}) => estoque === 0)
}

function gerarRelatorio(produtos){
    const produtoMaisVendido = encontrarProdutoMaisVendido(produtos)
    return {
        produtosCadastrados: produtos.length,
        valorTotalEstoque: calcularValorTotalEstoque(produtos),
        unidadesVendidas: calcularTotalVendido(produtos),
        produtoMaisVendido: produtoMaisVendido.nome,
        quantidadeProdutoEstoqueBaixo: filtrarEstoqueBaixo(produtos).length
    }   
}

console.log(gerarRelatorio(produtos))

