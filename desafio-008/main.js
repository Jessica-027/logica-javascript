const pedidos = [
    {
        id: 101,
        cliente: "Ana",
        status: "pago",
        valor: 450
    },
    {
        id: 102,
        cliente: "Carlos",
        status: "pendente",
        valor: 200
    },
    {
        id: 103,
        cliente: "Marina",
        status: "pago",
        valor: 800
    },
    {
        id: 104,
        cliente: "João",
        status: "cancelado",
        valor: 150
    }
];



function identificarPedidoPorId(pedidos, id) {
        return pedidos.find((pedido) => pedido.id === id)
    }

function identificarPedidosPagos(pedidos) {
    return pedidos.filter(({ status }) => status === "pago")
}

function calcularFaturamentoTotal(pedidosPagos) {
    return pedidosPagos.reduce((acumulador, { valor }) => {
        return acumulador + valor
    }, 0)
}

function verificarPedidosPendentes(pedidos) {
    return pedidos.some(({ status }) => status === "pendente")
}

function identificarMaiorPedido(pedidosPagos) {
    const primeiroPedido = pedidosPagos[0]

    return pedidosPagos.reduce((acumulador, pedido) => {
        const pedidoMaior = pedido.valor
        if (pedidoMaior > acumulador.pedido.valor) {
            return {
                pedido: pedido
            }
        }

        return acumulador

    }, {
        pedido: primeiroPedido
    })
}

function gerarResumoPedidos(pedidos) {
    return {
        totalPedidos: pedidos.length,
        quantidadePagos: identificarPedidosPagos(pedidos).length
    }
}

function gerarRelatorioPedidos(pedidos) {
    const pedidosPagos = identificarPedidosPagos(pedidos)
    const faturamentoTotal = calcularFaturamentoTotal(pedidosPagos)
    const maiorPedido = identificarMaiorPedido(pedidosPagos)
    const temPedidosPendentes =  verificarPedidosPendentes(pedidos)
    const resumo = gerarResumoPedidos(pedidos)

    return {
        pedidosPagos,
        faturamentoTotal,
        maiorPedido,
        temPedidosPendentes,
        resumo
    }
}

