const produtos = [
    {
        id: 1,
        nome: "Notebook",
        categoria: "eletronicos",
        preco: 3500,
        estoque: 5,
        ativo: true
    },
    {
        id: 2,
        nome: "Mouse",
        categoria: "acessorios",
        preco: 120,
        estoque: 0,
        ativo: true
    },
    {
        id: 3,
        nome: "Teclado",
        categoria: "acessorios",
        preco: 250,
        estoque: 8,
        ativo: true
    },
    {
        id: 4,
        nome: "Monitor",
        categoria: "eletronicos",
        preco: 1200,
        estoque: 3,
        ativo: false
    },
    {
        id: 5,
        nome: "Headset",
        categoria: "acessorios",
        preco: 300,
        estoque: 4,
        ativo: true
    },
    {
        id: 6,
        nome: "Webcam",
        categoria: "eletronicos",
        preco: 450,
        estoque: 0,
        ativo: false
    }
];


function buscarProdutosPorId(produtos, id) {
    return produtos.find((produto) => produto.id === id)
}
function identificarProdutosAtivos(produtos) {
    return produtos.filter(({ ativo }) => ativo)
}



function identificarProdutosPorCategoria(produtos, categoriaProcurada) {

    return produtos.filter(({ categoria }) => categoria === categoriaProcurada)
}


function identificarProdutosDisponiveis(produtos) {
    return produtos.filter(({ ativo, estoque }) => ativo && estoque > 0)
}

function calcularValorTotalEstoque(produtos) {
    return produtos.reduce((acumulador, { preco, estoque }) => {
        return acumulador + preco * estoque
    }, 0)

}

function identificarProdutoMaiorValorEstoque(produtos) {

    const primeiroProduto = produtos[0]
    const valorPrimeiroProduto = primeiroProduto.preco * primeiroProduto.estoque

    return produtos.reduce((acumulador, produto) => {
        const valorProduto = produto.preco * produto.estoque

        if (valorProduto > acumulador.valor) {
            return {
                produto,
                valor: valorProduto
            }
        }
        return acumulador

    }, {
        produto: primeiroProduto,
        valor: valorPrimeiroProduto
    })
}

function identificarProdutosSemEstoque(produtos) {
    return produtos.filter(({ estoque }) => estoque === 0)
}

function gerarListaProdutos(produtos) {
    return produtos.map(({ ativo, ...produto }) => ({
        ...produto,
        valorTotal: produto.preco * produto.estoque
    }))
}

function gerarRelatorioProdutos(produtos, categoriaProcurada) {
    const produtosAtivos = identificarProdutosAtivos(produtos)
    const produtosPorCategoria = identificarProdutosPorCategoria(produtos, categoriaProcurada)
    const produtosDisponiveis = identificarProdutosDisponiveis(produtos)
    const valorTotalEstoque = calcularValorTotalEstoque(produtos)
    const maiorValorProduto = identificarProdutoMaiorValorEstoque(produtos)
    const produtosSemEstoque = identificarProdutosSemEstoque(produtos)
    const listaResumida = gerarListaProdutos(produtos)

    return {
        produtosAtivos,
        produtosPorCategoria,
        produtosDisponiveis,
        valorTotalEstoque,
        maiorValorProduto,
        produtosSemEstoque,
        listaResumida
    }
}

const categoriaProcurada = "acessorios"

console.log(gerarRelatorioProdutos(produtos, categoriaProcurada))