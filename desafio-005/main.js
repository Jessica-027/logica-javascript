function verificarCancelamento(nomeDoCandidato, idadeDoCandidato, notaDoCandidato, quantidadeDeFamiliares, rendaFamiliarMensal) {
    if (nomeDoCandidato === null || idadeDoCandidato === null || notaDoCandidato === null || quantidadeDeFamiliares === null || rendaFamiliarMensal === null) {
        return true
    }

    return false

}

function tratarDadosDeEntrada(nomeDoCandidato, idadeDoCandidato, notaDoCandidato, quantidadeDeFamiliares, rendaFamiliarMensal) {

    const nome = nomeDoCandidato.trim()
    const idade = idadeDoCandidato.trim()
    const nota = notaDoCandidato.trim()
    const quantidadeFamiliares = quantidadeDeFamiliares.trim()
    const rendaFamiliar = rendaFamiliarMensal.trim()

    return { nome, idade, nota, quantidadeFamiliares, rendaFamiliar }
}

function verificarCamposVazios(dadosTratados) {
    if (dadosTratados.nome === "" || dadosTratados.idade === "" || dadosTratados.nota === "" || dadosTratados.quantidadeFamiliares === "" || dadosTratados.rendaFamiliar === "") {
        return true
    }

    return false
}

function converterDadosNumericos(dadosTratados) {
    const idade = Number(dadosTratados.idade)
    const nota = Number(dadosTratados.nota)
    const quantidadeFamiliares = Number(dadosTratados.quantidadeFamiliares)
    const rendaFamiliar = Number(dadosTratados.rendaFamiliar)

    return { idade, nota, quantidadeFamiliares, rendaFamiliar }

}

function verificarDadosNumericos(dadosNumericos) {
    if (isNaN(dadosNumericos.idade) || isNaN(dadosNumericos.nota) || isNaN(dadosNumericos.quantidadeFamiliares) || isNaN(dadosNumericos.rendaFamiliar)) {
        return true
    }

    return false
}

function verificarIdade(dadosNumericos) {
    if (dadosNumericos.idade <= 0) {
        return true
    }

    return false
}

function verificarNota(dadosNumericos) {
    if (dadosNumericos.nota < 0 || dadosNumericos.nota > 100) {
        return true
    }

    return false
}

function aplicarRegraNota(dadosNumericos) {
    if (dadosNumericos.nota < 60) {
        return "reprovado"
    }

    return "aprovado"
}

function verificarQuantidadeFamiliares(dadosNumericos) {
    if (dadosNumericos.quantidadeFamiliares <= 0) {
        return true
    }

    return false
}

function verificarRenda(dadosNumericos) {
    if (dadosNumericos.rendaFamiliar <= 0) {
        return true
    }

    return false
}

function calcularRendaPorPessoa(dadosNumericos) {
    return dadosNumericos.rendaFamiliar / dadosNumericos.quantidadeFamiliares
}

function aplicarRegraBolsa(rendaPorPessoa) {
    if (rendaPorPessoa > 2500) {
        return 0
    }
    if (rendaPorPessoa >= 1500) {
        return 40
    }
    if (rendaPorPessoa >= 800) {
        return 70
    }

    return 100
}

function inicio() {

    //ENTRADAS
    const nomeDoCandidato = prompt("Digite seu nome")
    const idadeDoCandidato = prompt("Digite sua idade")
    const notaDoCandidato = prompt("Digite a nota. (0 a 100)")
    const quantidadeDeFamiliares = prompt("Digite a quantidade de familiares")
    const rendaFamiliarMensal = prompt("Informe a renda familiar mensal")

    //Verificar Cancelamento
    const cancelamentoVerificado = verificarCancelamento(nomeDoCandidato, idadeDoCandidato, notaDoCandidato, quantidadeDeFamiliares, rendaFamiliarMensal)

    if (cancelamentoVerificado === true) {
        console.log("Processo cancelado: existem dados obrigatórios não informados.")
        return
    }

    //tratar dados
    const dadosTratados = tratarDadosDeEntrada(nomeDoCandidato, idadeDoCandidato, notaDoCandidato, quantidadeDeFamiliares, rendaFamiliarMensal)

    //verificar campos Vazios
    const camposVaziosVerificados = verificarCamposVazios(dadosTratados)

    if (camposVaziosVerificados === true) {
        console.log("Processo cancelado: existem campos vazios.")
        return
    }

    //converter dados Numericos
    const dadosNumericos = converterDadosNumericos(dadosTratados)

    //verificar dados numericos
    const dadosNumericosVerificado = verificarDadosNumericos(dadosNumericos)
    if (dadosNumericosVerificado === true) {
        console.log("Processo cancelado: existem dados numéricos inválidos.")
        return
    }

    //verificar Idade
    const idadeVerificada = verificarIdade(dadosNumericos)

    if (idadeVerificada === true) {
        console.log("Candidato reprovado: idade inválida.")
        return
    }

    //verificar nota
    const notaVerificada = verificarNota(dadosNumericos)

    if (notaVerificada === true) {
        console.log("Candidato reprovado: nota informada é inválida.")
        return
    }

    //aplicar regra nota
    const regraNota = aplicarRegraNota(dadosNumericos)

    if (regraNota === "reprovado") {
        console.log("Candidato reprovado: nota mínima não atingida.")
        return
    }

    //verificar quantidade de familiares
    const quantidadeFamiliaresVerificada = verificarQuantidadeFamiliares(dadosNumericos)

    if (quantidadeFamiliaresVerificada === true) {
        console.log("Processo cancelado: quantidade de familiares inválida.")
        return
    }

    //verificar renda familiar
    const rendaFamiliarVerificada = verificarRenda(dadosNumericos)

    if (rendaFamiliarVerificada === true) {
        console.log("Processo cancelado: renda familiar inválida.")
        return
    }

    //calcular renda por pessoa
    const rendaPorPessoa = calcularRendaPorPessoa(dadosNumericos)

    //aplicar regra de bolsa
    const regraBolsa = aplicarRegraBolsa(rendaPorPessoa)

    if (regraBolsa === 0) {
        console.log("Candidato aprovado, porém sem concessão de bolsa devido à renda por pessoa.")
        return
    }

    console.log(`Candidato aprovado. Percentual de bolsa concedido: ${regraBolsa}%`)
}

inicio()



