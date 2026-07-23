
function validarDadosNulos(nomeDoCliente, valorDaCompra, idadeDoCliente, formaDePagamento) {

    if (nomeDoCliente === null || valorDaCompra === null || idadeDoCliente === null || formaDePagamento === null) {
        return "cancelado"
    }

    return "ok"

}

function tratarDadosDeEntrada(nomeDoCliente, valorDaCompra, idadeDoCliente, formaDePagamento) {
    const nomeDoClienteTratado = nomeDoCliente.trim()
    const valorDaCompraTratado = valorDaCompra.trim()
    const idadeDoClienteTratada = idadeDoCliente.trim()

    const formaDePagamentoTratada = formaDePagamento
        .trim()
        .toUpperCase()

    return { nomeDoClienteTratado, valorDaCompraTratado, idadeDoClienteTratada, formaDePagamentoTratada }
}

function validarCamposVazios(dadosTratados) {
    if (dadosTratados.nomeDoClienteTratado === "" || dadosTratados.valorDaCompraTratado === "" || dadosTratados.idadeDoClienteTratada === "" || dadosTratados.formaDePagamentoTratada === "") {
        return "vazio"
    }

    return "ok"
}

function converterDadosNumericos(valorDaCompraTratado, idadeDoClienteTratada) {
    const valorDaCompraNumerico = Number(valorDaCompraTratado)
    const idadeDoClienteNumerica = Number(idadeDoClienteTratada)


    return { valorDaCompraNumerico, idadeDoClienteNumerica }
}

function validarDadosNumericos(dadosNumericos) {
    if (isNaN(dadosNumericos.valorDaCompraNumerico) || isNaN(dadosNumericos.idadeDoClienteNumerica)) {
        return "numeroInvalido"
    }

    return "numeroValido"
}

function validarIdadeDoCliente(idadeDoClienteNumerica) {
    if (idadeDoClienteNumerica < 0) {
        return "idadeInvalida"
    }

    return "idadeValida"
}

function obterDescontoPorIdade(idadeDoClienteNumerica) {
    if (idadeDoClienteNumerica >= 60) {
        return 0.05
    }

    return 0
}

function validarFormasDePagamento(formaDePagamentoTratada) {
    if (formaDePagamentoTratada !== "DINHEIRO" && formaDePagamentoTratada !== "PIX" && formaDePagamentoTratada !== "CARTÃO") {
        return "formaDePagamentoInvalida"
    }

    return "formaDePagamentoValida"
}

function obterDescontoPorFormaDePagamento(formaDePagamentoTratada) {
    if (formaDePagamentoTratada === "DINHEIRO") {
        return 0.05
    }

    if (formaDePagamentoTratada === "PIX") {
        return 0.03
    }

    return 0
}

function validarValorDaCompra(valorDaCompraNumerico) {
    if (valorDaCompraNumerico <= 0) {
        return "valorInvalido"
    }

    return "valorValido"
}

function obterDescontoPorValorDaCompra(valorDaCompraNumerico) {
    if (valorDaCompraNumerico <= 99.99) {
        return 0
    }

    if (valorDaCompraNumerico <= 299.99) {
        return 0.05
    }

    if (valorDaCompraNumerico <= 599.99) {
        return 0.10
    }

    return 0.15
}

function obterPercentualDeDesconto(descontoPorIdade, descontoPorFormaDePagamento, descontoPorValorDaCompra) {
    let percentualDeDesconto = 0
    percentualDeDesconto += descontoPorIdade
    percentualDeDesconto += descontoPorFormaDePagamento
    percentualDeDesconto += descontoPorValorDaCompra

    if(percentualDeDesconto > 0.20){
        return 0.20
    }

    return percentualDeDesconto
}

function calcularDesconto(percentualDeDesconto, valorDaCompraNumerico) {


    const desconto = percentualDeDesconto * valorDaCompraNumerico

    return desconto

}

function calcularValorFinal(desconto, valorDaCompraNumerico) {
    const valorFinal = valorDaCompraNumerico - desconto

    return valorFinal

}

function ajustarValorFinal(valorFinal) {
    if (valorFinal < 10) {
        return 10
    }

    return valorFinal
}

function inicio(){ 
//Entradas

const nomeDoCliente = prompt("Digite o nome do cliente")
const idadeDoCliente = prompt("Digite a idade do cliente")
const valorDaCompra = prompt("Digite o valor da compra")
const formaDePagamento = prompt("Digite a forma de pagamento. Dinheiro, Pix ou Cartão")

//valirdar dados nulos
const dadosNulosValidos =  validarDadosNulos(nomeDoCliente, valorDaCompra, idadeDoCliente, formaDePagamento)

if(dadosNulosValidos === "cancelado"){
    console.log("Operação cancelada pelo usuário.")
    return
}

//tratar dados de entrada
const dadosTratados = tratarDadosDeEntrada(nomeDoCliente, valorDaCompra, idadeDoCliente, formaDePagamento)

//validar campos vazios
const camposVaziosValidos = validarCamposVazios(dadosTratados)

if(camposVaziosValidos === "vazio"){
    console.log("Todos os campos são obrigatórios.")
    return
}

//converter dados numericos
const dadosNumericos = converterDadosNumericos(dadosTratados.valorDaCompraTratado, dadosTratados.idadeDoClienteTratada)

//validar dados numericos
const dadosNumericosValidos = validarDadosNumericos(dadosNumericos)

if(dadosNumericosValidos === "numeroInvalido"){
    console.log("Valor da compra e idade devem ser números válidos.")
    return
}

//validar idade do cliente
const idadeDoClienteValida = validarIdadeDoCliente(dadosNumericos.idadeDoClienteNumerica)

if(idadeDoClienteValida === "idadeInvalida"){
    console.log("A idade não pode ser negativa.")
    return
}

//desconto por idade
const descontoPorIdade = obterDescontoPorIdade(dadosNumericos.idadeDoClienteNumerica)

//validar forma de pagamento
const formaDePagamentoValida = validarFormasDePagamento(dadosTratados.formaDePagamentoTratada)

if(formaDePagamentoValida === "formaDePagamentoInvalida"){
    console.log("Forma de pagamento inválida. Utilize DINHEIRO, PIX ou CARTÃO.")
    return
}

//desconto por forma de pagamento

const descontoPorFormaDePagamento = obterDescontoPorFormaDePagamento(dadosTratados.formaDePagamentoTratada)

//validar valor da compra

const valorDaCompraValido = validarValorDaCompra(dadosNumericos.valorDaCompraNumerico)

if(valorDaCompraValido === "valorInvalido"){
    console.log("O valor da compra deve ser maior que zero.")
    return
}

//desconto por valor da compra

const descontoPorValorDaCompra = obterDescontoPorValorDaCompra(dadosNumericos.valorDaCompraNumerico)

//obter percentual de desconto

const percentualDeDesconto = obterPercentualDeDesconto(descontoPorIdade, descontoPorFormaDePagamento, descontoPorValorDaCompra)

//calcular desconto

const desconto = calcularDesconto(percentualDeDesconto, dadosNumericos.valorDaCompraNumerico)

// calcular valor final

const valorFinal = calcularValorFinal(desconto, dadosNumericos.valorDaCompraNumerico)

//ajustar valor Final
const valorFinalAjustado = ajustarValorFinal(valorFinal)


//saída

console.log(`
    ===== RESUMO DA COMPRA =====

    Cliente: ${dadosTratados.nomeDoClienteTratado}

    Valor da compra: R$ ${dadosNumericos.valorDaCompraNumerico}

    Desconto aplicado: ${percentualDeDesconto}

    Valor do desconto: R$ ${desconto.toFixed(2)}

    Valor Final: R$ ${valorFinalAjustado.toFixed(2)}

    Forma de pagamento: ${dadosTratados.formaDePagamentoTratada}

    ============================

    `)
}

inicio()