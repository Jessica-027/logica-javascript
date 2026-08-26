function verificarDadosAusentes(nomeDoCliente, idadeDoCliente, senhaDoCliente, statusDaConta) {
    if (!nomeDoCliente || !idadeDoCliente || !senhaDoCliente || !statusDaConta
    ) {
        return true
    }

    return false
}

function tratamentoDeDados(nomeDoCliente, idadeDoCliente, senhaDoCliente, statusDaConta) {
    const nome = nomeDoCliente.trim()
    const status = statusDaConta.trim().toLowerCase()
    const senha = senhaDoCliente.trim()

    const idade = Number(idadeDoCliente)

    return { nome, status, senha, idade }
}

function verificarIdade(dadosTratados) {
    if (isNaN(dadosTratados.idade)) {
        return true
    }
    return false
}

function aplicarRegraIdade(dadosTratados) {
    if (dadosTratados.idade < 18) {
        return true
    }

    return false
}

function aplicarRegraSenha(dadosTratados) {
    if (dadosTratados.senha.length < 8) {
        return true
    }

    return false
}

function verificarStatus(dadosTratados) {
    if (dadosTratados.status !== "inativo" && dadosTratados.status !== "ativo") {
        return true
    }

    return false
}

function aplicarRegraStatus(dadosTratados) {
    if (dadosTratados.status === "inativo") {
        return true
    }

    return false
}

function inicio() {
    //Entradas
    const nomeDoCliente = prompt(`Digite seu nome`)
    const idadeDoCliente = prompt(`Digite sua idade`)
    const senhaDoCliente = prompt(`Digite sua senha`)
    const statusDaConta = prompt(`Digite o status da conta`)

    //Verificar dados ausentes
    const dadosVerificados = verificarDadosAusentes(nomeDoCliente, idadeDoCliente, senhaDoCliente, statusDaConta)

    if (dadosVerificados === true) {
        console.log(`Dados obrigatórios não informados.`)
        return
    }

    // Tratar dados
    const dadosTratados = tratamentoDeDados(nomeDoCliente, idadeDoCliente, senhaDoCliente, statusDaConta)

    //Verificar idade
    const idadeVerificada = verificarIdade(dadosTratados)

    if (idadeVerificada === true) {
        console.log(`A idade informada é inválida.`)
        return
    }

    //Aplicar regra de idade
    const regraIdade = aplicarRegraIdade(dadosTratados)

    if (regraIdade === true) {
        console.log(`Acesso negado: usuário menor de 18 anos.`)
        return
    }

    //Aplicar regra da senha
    const regraSenha = aplicarRegraSenha(dadosTratados)

    if (regraSenha === true) {
        console.log(`Acesso negado: a senha deve possuir pelo menos 8 caracteres.`)
        return
    }

    //Verificar status
    const statusVerificado = verificarStatus(dadosTratados)

    if (statusVerificado === true) {
        console.log(`O status da conta informado é inválido.`)
        return
    }

    //Aplicar regra de status
    const regraStatus = aplicarRegraStatus(dadosTratados)

    if (regraStatus === true) {
        console.log(`Acesso negado: a conta está inativa.`)
        return
    }


    //Passou em tudo: acesso permitido
    console.log(`Acesso permitido.`)
}

inicio()