const produtos = [
    { id: 1, produto: "Teclado", quantidade: 12, preco: 120, estoqueMinimo: 5 },
    { id: 2, produto: "Mouse", quantidade: 3, preco: 65, estoqueMinimo: 5 },
    { id: 3, produto: "Monitor", quantidade: 0, preco: 850, estoqueMinimo: 2 },
    { id: 4, produto: "Headset", quantidade: 8, preco: 180, estoqueMinimo: 4 },
    { id: 5, produto: "Webcam", quantidade: 2, preco: 150, estoqueMinimo: 3 }
]

function listarProdutos(produtos) {
    produtos.forEach(({ produto, quantidade }) => {
        console.log(` Produto: ${produto} | Quantidade em estoque: ${quantidade} `)
    });

}

function listarProdutosParaReposicao(produtos) {
    return produtos.filter(({ quantidade, estoqueMinimo }) => quantidade <= estoqueMinimo)
}

const listaDeReposicao = listarProdutosParaReposicao(produtos)


function calcularValorTotalEstoque(produtos) {
    return produtos.reduce((acumulador, { quantidade, preco }) => {
        return acumulador + quantidade * preco
    }, 0)
}



function relatorioEstoque(produtos) {
    return {
        totalProdutosCadastrados: produtos.length,
        produtosDisponiveis: produtos.filter(({ quantidade }) => quantidade > 0).length,
        produtosPrecisamReposicao: listarProdutosParaReposicao(produtos).length
    }
}



function atualizarEstoque(produtos, idProcurado, novaQuantidade) {

    const idEncontrado = produtos.some(({ id }) => id === idProcurado)

    if (!idEncontrado) {
        throw new Error(`Produto não encontrado`)
    }

    return produtos.map((produto) => {
        if (produto.id !== idProcurado) {
            return produto
        }

        return {
            ...produto,
            quantidade: novaQuantidade
        }
    })
}



console.log(`\n--- Testes ---`)

console.log(`\n--- Lista de produtos ---`)
listarProdutos(produtos)

console.log(`\n--- Produtos para reposição ---`)
console.table(listaDeReposicao)

console.log(`\n--- Valor total do estoque ---`)
console.log(`Valor total: ${calcularValorTotalEstoque(produtos)}`)

console.log(`\n--- Relatório do estoque ---`)
console.table(relatorioEstoque(produtos))

console.log(`\n--- Teste de atualização com id inexistente ---`)

try {
    const resultado = atualizarEstoque(produtos, 99, 10)
    console.table(resultado)
} catch (erro) {
    console.log(erro.message)
}

console.log(`\n--- Teste da atualização ---`)

const produtosAtualizados = atualizarEstoque(produtos, 2, 10)
console.table(produtosAtualizados)

console.log(`Estoque original:`)
console.table(produtos)