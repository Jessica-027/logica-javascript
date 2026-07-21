// verifica cancelamento 
function verificarCancelamento(pesoDaEncomenda, distanciaDaEntrega, tipoDeEntrega, valorDoProduto) {
    if (pesoDaEncomenda === null || distanciaDaEntrega === null || tipoDeEntrega === null || valorDoProduto === null) {
        return "cancelado"
    }

    return "ok"
}

//trata os dados iniciais
function tratarDadosDeEntrada(pesoDaEncomenda, distanciaDaEntrega, tipoDeEntrega, valorDoProduto) {
    const pesoDaEncomendaTratada = pesoDaEncomenda.trim()
    const distanciaDaEntregaTratada = distanciaDaEntrega.trim()
    const tipoDeEntregaTratada = tipoDeEntrega
        .trim()
        .toUpperCase()
    const valorDoProdutoTratado =
        valorDoProduto.trim()

    return { pesoDaEncomendaTratada, distanciaDaEntregaTratada, tipoDeEntregaTratada, valorDoProdutoTratado }
}


function verificarCampoVazio(dadosTratados) {

    if (dadosTratados.pesoDaEncomendaTratada === "" || dadosTratados.distanciaDaEntregaTratada === "" || dadosTratados.tipoDeEntregaTratada === "" || dadosTratados.valorDoProdutoTratado === "") {
        return "vazio"
    }

    return "ok"

}

//Converte os valores númericos 

function converterDadosNumericos(dadosTratados) {
    const pesoDaEncomendaNumerico = Number(dadosTratados.pesoDaEncomendaTratada)
    const distanciaDaEntregaNumerica = Number(dadosTratados.distanciaDaEntregaTratada)
    const valorDoProdutoNumerico = Number(dadosTratados.valorDoProdutoTratado)

    return { pesoDaEncomendaNumerico, distanciaDaEntregaNumerica, valorDoProdutoNumerico }
}

//validar dados numericos

function validarDadosNumericos(dadosNumericos) {
    if (isNaN(dadosNumericos.pesoDaEncomendaNumerico) || isNaN(dadosNumericos.distanciaDaEntregaNumerica) || isNaN(dadosNumericos.valorDoProdutoNumerico)) {
        return "numeroInvalido"
    }

    return "ok"
}

//validar peso
function validarPesoDaEncomenda(pesoDaEncomendaNumerico) {
    if (pesoDaEncomendaNumerico <= 0) {
        return "pesoInvalido"
    }

    return "pesoValido"

}

//acrescimo peso
function adicionarAcrescimoPorPeso(pesoDaEncomendaNumerico) {
    if (pesoDaEncomendaNumerico <= 2) {
        return 0
    }

    if (pesoDaEncomendaNumerico <= 10) {
        return 8
    }

    return 20

}

//validar distancia

function validarDistanciaDaEntrega(distanciaDaEntregaNumerica) {
    if (distanciaDaEntregaNumerica <= 0) {
        return "distanciaInvalida"
    }

    return "distanciaValida"
}

//acrescimo distancia

function adicionarAcrescimoPorDistancia(distanciaDaEntregaNumerica) {

    if (distanciaDaEntregaNumerica <= 50) {
        return 5
    }

    if (distanciaDaEntregaNumerica <= 200) {
        return 15
    }

    return 30
}

//validar tipo de entrega
function validarTipoDeEntrega(tipoDeEntrega) {
    if (tipoDeEntrega !== "NORMAL" && tipoDeEntrega !== "EXPRESSA" && tipoDeEntrega !== "PREMIUM") {
        return "tipoInvalido"
    }

    return "tipoValido"
}

//acrescimo tipo de entrega

function adicionarAcrescimoTipoDeEntrega(tipoDeEntrega) {
    if (tipoDeEntrega === "NORMAL") {
        return 0
    }

    if (tipoDeEntrega === "EXPRESSA") {
        return 20
    }

    if (tipoDeEntrega === "PREMIUM") {
        return 50
    }
}

//validar valor do produto

function validarValorDoProduto(valorDoProdutoNumerico) {
    if (valorDoProdutoNumerico <= 0) {
        return "valorInvalido"
    }

    return "valorValido"

}

// desconto do produto 

function calcularDescontoDoProduto(valorDoProdutoNumerico) {
    if (valorDoProdutoNumerico < 500) {
        return 0
    }

    return 15
}

//frete

function calcularFrete(acrescimoPorPeso, acrescimoPorDistancia, acrescimoTipoDeEntrega, descontoValorDoProduto) {
    let frete = 10
    frete += acrescimoPorPeso
    frete += acrescimoPorDistancia
    frete += acrescimoTipoDeEntrega

    frete -= descontoValorDoProduto

    return frete

}

function ajustarFreteFinal(freteCalculado) {
    if (freteCalculado < 0) {
        return 0
    }

    return freteCalculado

}

function inicio() {
    //Entradas

    const pesoDaEncomenda = prompt("Digite o peso da encomenda")
    const distanciaDaEntrega = prompt("Digite a distância da entrega")
    const tipoDeEntrega = prompt("Qual o tipo de entrega? Normal, Expressa ou Premium")
    const valorDoProduto = prompt("Digite o valor do produto")

    //verificar cancelamento
    const cancelamentoVerificado = verificarCancelamento(pesoDaEncomenda, distanciaDaEntrega, tipoDeEntrega, valorDoProduto)

    if(cancelamentoVerificado === "cancelado"){
        console.log(`Operação cancelada pelo usuário.`)
        return
    }


    //tratar entradas
    const dadosTratados = tratarDadosDeEntrada(pesoDaEncomenda, distanciaDaEntrega, tipoDeEntrega, valorDoProduto)

    //validar vazio
    const campoVazioVerificado = verificarCampoVazio(dadosTratados)

    if (campoVazioVerificado === "vazio") {
        console.log(`Todos os campos são obrigatórios.`)
        return
    }

    //converter dados numericos
    const dadosNumericos = converterDadosNumericos(dadosTratados)

    //validar dados numericos
    const dadosNumericosValidos = validarDadosNumericos(dadosNumericos)

    if (dadosNumericosValidos === "numeroInvalido") {
        console.log(`Peso, distância e valor do produto devem ser números válidos.`)
        return
    }

    //validar peso
    const pesoDaEncomendaValido = validarPesoDaEncomenda(dadosNumericos.pesoDaEncomendaNumerico)

    if (pesoDaEncomendaValido === "pesoInvalido") {
        console.log(`O peso da encomenda deve ser maior que zero.`)
        return
    }

    //acrescimo peso
    const acrescimoPorPeso = adicionarAcrescimoPorPeso(dadosNumericos.pesoDaEncomendaNumerico)

    //validar distância
    const distanciaDaEntregaValida = validarDistanciaDaEntrega(dadosNumericos.distanciaDaEntregaNumerica)

    if (distanciaDaEntregaValida === "distanciaInvalida") {
        console.log(`A distância da entrega deve ser maior que zero.`)
        return
    }

    //acrescimo distância
    const acrescimoPorDistancia = adicionarAcrescimoPorDistancia(dadosNumericos.distanciaDaEntregaNumerica)

    //validar tipo de entrega
    const tipoDeEntregaValida = validarTipoDeEntrega(dadosTratados.tipoDeEntregaTratada)

    if (tipoDeEntregaValida === "tipoInvalido") {
        console.log(`Tipo de entrega inválido. Utilize: Normal, Expressa ou Premium.`)
        return
    }

    //acrescimo do tipo de entrega
    const acrescimoTipoDeEntrega = adicionarAcrescimoTipoDeEntrega(dadosTratados.tipoDeEntregaTratada)

    //validar valor do produto
    const valorDoProdutoValido = validarValorDoProduto(dadosNumericos.valorDoProdutoNumerico)

    if (valorDoProdutoValido === "valorInvalido") {
        console.log(`O valor do produto deve ser maior que zero.`)
        return
    }

    //desconto do valor do produto
    const descontoDoProduto = calcularDescontoDoProduto(dadosNumericos.valorDoProdutoNumerico)

    //calcular freto
    const freteCalculado = calcularFrete(acrescimoPorPeso, acrescimoPorDistancia, acrescimoTipoDeEntrega, descontoDoProduto)

    //ajuste do frete
    const freteFinal = ajustarFreteFinal(freteCalculado)

    //saida

    console.log(`Valor final do frete: R$ ${freteFinal.toFixed(2)}`)
}

inicio()