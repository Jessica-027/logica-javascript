const pedidos = [
    { id: 1, cliente: "Ana", valor: 250, status: "aprovado" },
    { id: 2, cliente: "Carlos", valor: 180, status: "pendente" },
    { id: 3, cliente: "Mariana", valor: 420, status: "aprovado" },
    { id: 4, cliente: "Pedro", valor: 90, status: "cancelado" },
    { id: 5, cliente: "Juliana", valor: 310, status: "pendente" },
    { id: 6, cliente: "Lucas", valor: 150, status: "aprovado" },
    { id: 7, cliente: "Beatriz", valor: 500, status: "cancelado" }
];

function filtrarPedidosPorStatus(pedidos, statusDesejado) {
    return pedidos.filter(({ status }) => status === statusDesejado)
}

function calcularValorTotalPedidos(pedidos) {
    return pedidos.reduce((acumulador, { valor }) => {
        return acumulador + valor
    }, 0)
}

function contarPedidosPrStatus(pedidos, statusDesejado) {
    const statusFiltrado = filtrarPedidosPorStatus(pedidos, statusDesejado)

    return statusFiltrado.length
}

function filtrarPedidosPorValorMinimo(pedidos, valorMinimo) {
    return pedidos.filter(({ valor }) => valor >= valorMinimo)
}

function gerarResumoPedidos(pedidos) {

    return {
        totalPedidos: pedidos.length,
        pedidosAprovados: filtrarPedidosPorStatus(pedidos, "aprovado").length,
        pedidosPendentes: filtrarPedidosPorStatus(pedidos, "pendente").length,
        pedidosCancelados: filtrarPedidosPorStatus(pedidos, "cancelado").length,
        valorTotal: calcularValorTotalPedidos(pedidos)

    }
}

function processarPedidos(pedidos, callback) {
    pedidos.forEach((pedido) => {
        callback(pedido)
    })
}

function exibirCancelados(pedido) {
    if (pedido.status === "cancelado") {
        console.log(pedido.cliente)
    }
}

function exibirPendentes(pedido) {
    if (pedido.status === "pendente") {
        console.log(pedido.cliente)
    }
}

function exibirAprovados(pedido) {
    if (pedido.status === "aprovado") {
        console.log(pedido.cliente)
    }
}

function criarGerenciadorEventos() {
    const eventos = []

    return {
        registrarEvento: (evento) => {
        eventos.push(evento)
    },

    consultarEventos: () => {
        return [
            ...eventos
        ]
    },

    contarEventos: () => {
        return eventos.length
    },

}


}

const gerenciador = criarGerenciadorEventos()



gerenciador.registrarEvento("Pedido 001 aprovado")
gerenciador.registrarEvento("Pedido 002 cancelado")
gerenciador.registrarEvento("Pedido 003 enviado")

function gerarRelatorioFinal(){
    return {
        resumoPedidos: gerarResumoPedidos(pedidos),
        quantidadeDeEventos: gerenciador.contarEventos(),
        historicoDeEventos: gerenciador.consultarEventos()
    }
}

console.log(gerarRelatorioFinal())