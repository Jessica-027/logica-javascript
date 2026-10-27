const pedidos = [
    {
        id: 1,
        cliente: "Ana",
        valor: 250,
        status: "entregue",
        itens: 3
    },
    {
        id: 2,
        cliente: "Bruno",
        valor: 180,
        status: "pendente",
        itens: 2
    },
    {
        id: 3,
        cliente: "Carla",
        valor: 420,
        status: "processando",
        itens: 5
    },
    {
        id: 4,
        cliente: "Daniel",
        valor: 95,
        status: "pendente",
        itens: 1
    },
    {
        id: 5,
        cliente: "Eva",
        valor: 310,
        status: "entregue",
        itens: 4
    }
];

function listarPedidos(pedidos) {
    pedidos.forEach(({ id, cliente, valor, status }) => {
        console.log(`
            Pedido: ${id}
            Cliente: ${cliente}
            Valor: ${valor}
            Status: ${status}            
            `)
    })
}



function buscarPedidoPorId(pedidos, idProcurado) {
    return pedidos.find(({ id }) => id === idProcurado)
}

function filtrarPedidosPorStatus(pedidos, statusProcurado) {
    return pedidos.filter(({ status }) => status === statusProcurado)
}

function calcularValorTotalPedidos(pedidos) {
    return pedidos.reduce((acumulador, { valor }) => {
        return acumulador + valor
    }, 0)
}

function gerarRelatorioPedidos(pedidos) {
    return {
        totalPedidos: pedidos.length,
        pedidosEntregues: pedidos.filter(({ status }) => status === "entregue").length,
        pedidosPendentes: pedidos.filter(({ status }) => status === "pendente").length,
        pedidosProcessando: pedidos.filter(({ status }) => status === "processando").length
    }
}

function validarStatus(status) {
    const statusPermitidos = ["pendente", "processando", "entregue"]

    return statusPermitidos.includes(status)
}


function atualizarStatusPedido(pedidos, idProcurado, novoStatus) {

    const statusValido = validarStatus(novoStatus)

    if (!statusValido) {
        throw new Error(`Status não permitido`)
    }

    const idEncontrado = pedidos.some(({id}) => id === idProcurado)

    if(!idEncontrado){
        throw new Error(`ID nao encontrado`)
    }

    return pedidos.map((pedido) => {
        if(pedido.id !== idProcurado){
            return pedido
        }

        return {
            ...pedido,
            status: novoStatus
        }
    })

}
//lista de pedidos
listarPedidos(pedidos)


//buscar id

const idProcurado = buscarPedidoPorId(pedidos, 3)
console.log(idProcurado)

//pedidos filtrados por status

const pedidoFiltradoStatus = filtrarPedidosPorStatus(pedidos, "pendente")
console.log(pedidoFiltradoStatus)

//valor total

const valorTotal = calcularValorTotalPedidos(pedidos)
console.log(`Valor Total: ${valorTotal}`)

// relatorio

const relatorio = gerarRelatorioPedidos(pedidos)
console.table(relatorio)


//atualização
const pedidosAtualizados = atualizarStatusPedido(pedidos, 2, "entregue")
console.table(pedidosAtualizados)
console.table(pedidos)


//id inexistente

try {
    const resultado = atualizarStatusPedido(pedidos, 99, "entregue")
    console.table(resultado)
} catch (erro) {
    console.log(erro.message)
}

//status invalido

try {
    const resultado = atualizarStatusPedido(pedidos, 2, "cancelado")
    console.table(resultado)
} catch (erro) {
    console.log(erro.message)
}
