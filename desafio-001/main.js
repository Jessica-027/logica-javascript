/* Desafio 1 — Validador de Maioridade */

function validarEntradaIdade(idadeDoUsuario) {

    if (idadeDoUsuario === null) {
        return "cancelado"
    }

    if (idadeDoUsuario.trim() === "") {
        return "vazio"
    }

    return "ok"

}

function converterIdade(idadeDoUsuario) {
    let idadeDoUsuarioConvertida = Number(idadeDoUsuario)

    return idadeDoUsuarioConvertida
}

function validacaoGeral(idadeDoUsuarioConvertida) {
    if (isNaN(idadeDoUsuarioConvertida)) {
        return "noNumber"
    }

    if (idadeDoUsuarioConvertida < 0) {
        return "invalido"
    }

    if (idadeDoUsuarioConvertida < 18) {
        return "menorIdade"
    }

    return "maiorIdade"

}

function inicio() {
    const idadeDoUsuario = prompt('Digite sua idade')

    let entradaValida = validarEntradaIdade(idadeDoUsuario)

    if (entradaValida === "cancelado") {
        console.log('Operação cancelada pelo usuário.')
        return
    }

    if (entradaValida === "vazio") {
        console.log('O campo idade é obrigatório. Por favor, informe sua idade.')
        return
    }

    /* converter */

    const idadeDoUsuarioConvertida = Number(idadeDoUsuario)
    const dadosValidos = validacaoGeral(idadeDoUsuarioConvertida)

    if (dadosValidos === "noNumber") {
        console.log('iIdade inválida. Informe apenas números')
        return
    }

    if(dadosValidos === "invalido"){
        console.log('Idade inválida. Informe uma idade igual ou maior que zero.')
        return
    }

    if(dadosValidos === "menorIdade"){
        console.log('Cadastro não permitido. É necessário ter 18 anos ou mais')
        return
    }

    console.log('Cadastro realizado com sucesso.')
}

inicio()