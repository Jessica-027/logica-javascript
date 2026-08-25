function verificarCamposNulos(nomeCliente, idadeCliente, rendaMensalCliente, cidadeCliente) {
    if (nomeCliente === null || idadeCliente === null || rendaMensalCliente === null || cidadeCliente === null) {
        return true
    }

    return false
}

function tratarDadosEntrada(nomeCliente, cidadeCliente) {
    const nome = nomeCliente.trim()
    const cidade = cidadeCliente.trim()

    return { nome, cidade }

}

function verificarCamposVazios(dadosTratados, idadeCliente, rendaMensalCliente) {
    if (dadosTratados.nome === "" || dadosTratados.cidade === "" || idadeCliente === "" || rendaMensalCliente === "") {
        return true
    }

    return false
}

function converterDadosNumericos(idadeCliente, rendaMensalCliente) {
    const idade = Number(idadeCliente)
    const rendaMensal = Number(rendaMensalCliente)

    return { idade, rendaMensal }
}

function verificarDadosNumericos(dadosNumericos) {
    if (isNaN(dadosNumericos.idade) || isNaN(dadosNumericos.rendaMensal)) {
        return true
    }

    return false
}

function verificarIdade(dadosNumericos) {
    if (dadosNumericos.idade < 18) {
        return true
    }

    return false
}

function verificarRendaMensal(dadosNumericos) {
    if (dadosNumericos.rendaMensal <= 0) {
        return true
    }

    return false
}

function inicio() {
    // Entradas
    const nomeCliente = prompt(`Digite o seu nome`)
    const idadeCliente = prompt(`Digite sua idade`)
    const rendaMensalCliente = prompt(`Digite sua renda mensal`)
    const cidadeCliente = prompt(`Digite a sua cidade`)

    //Verificar campos nulos
    const camposNulosVerificado = verificarCamposNulos(nomeCliente, idadeCliente, rendaMensalCliente, cidadeCliente)

    if (camposNulosVerificado === true) {
        console.log(`Processo cancelado: existem dados obrigatórios não informados.`)
        return
    }

    // Tratar dados de entrada
    const dadosTratados = tratarDadosEntrada(nomeCliente, cidadeCliente)

    // Verificar campos vazios
    const camposVaziosVerificado = verificarCamposVazios(dadosTratados, idadeCliente, rendaMensalCliente)

    if (camposVaziosVerificado === true) {
        console.log(` Processo cancelado: existem campos vazios.`)
        return
    }

    // converter dados numericos
    const dadosNumericos = converterDadosNumericos(idadeCliente, rendaMensalCliente)

    //verificar dados numericos
    const dadosNumericosVerificados = verificarDadosNumericos(dadosNumericos)

    if (dadosNumericosVerificados === true) {
        console.log(`Processo cancelado: existem dados numéricos inválidos.`)
        return
    }

    // Verificar idade
    const idadeVerificada = verificarIdade(dadosNumericos)

    if (idadeVerificada === true) {
        console.log(`O cadastro não pode ser realizado: o cliente deve ter 18 anos ou mais.`)
        return
    }

    //verificar renda Mensal
    const rendaVerificada = verificarRendaMensal(dadosNumericos)

    if (rendaVerificada === true) {
        console.log(`O cadastro não pode ser realizado: a renda mensal deve ser maior que zero.`)
        return
    }

    //saida

    console.log(`Cadastro realizado com sucesso!`)
}


inicio()

