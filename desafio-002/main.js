function validarEntradasIniciais(nome, idade, salarioMensal, valorEmprestimo) {
    if (nome === null || idade === null || salarioMensal === null || valorEmprestimo === null) {
        return "cancelado"
    }

    if (nome.trim() === "" || idade.trim() === "" || salarioMensal.trim() === "" || valorEmprestimo.trim() === "") {
        return "vazio"
    }

    return "ok"
}

function converterDadosNumericos(idade, salarioMensal, valorEmprestimo) {

    const idadeNumero = Number(idade)
    const salarioMensalNumero = Number(salarioMensal)
    const valorEmprestimoNumero = Number(valorEmprestimo)

    return { idadeNumero, salarioMensalNumero, valorEmprestimoNumero }

}

function validarDadosNumericos(dadosConvertidos) {

    if (isNaN(dadosConvertidos.idadeNumero) || isNaN(dadosConvertidos.salarioMensalNumero) || isNaN(dadosConvertidos.valorEmprestimoNumero)) {
        return "noNumber"
    }

    return "ok"
}

function validarIdade(dadosConvertidos) {
    if(dadosConvertidos.idadeNumero <= 0){
        return "idadeInvalida"
    }

    if (dadosConvertidos.idadeNumero < 18) {
        return "menorIdade"
    }

    return "ok"
}

function validarSalario(dadosConvertidos){
    if(dadosConvertidos.salarioMensalNumero <= 0){
        return "salarioInvalido"
    }

    return "ok"
}

function validarEmprestimo(dadosConvertidos){
    if(dadosConvertidos.valorEmprestimoNumero <= 0){
        return "emprestimoInvalido"
    }

    return "ok"
}

function decidirAprovacao(dadosConvertidos){

    const limite = dadosConvertidos.salarioMensalNumero * 10

    if(dadosConvertidos.valorEmprestimoNumero > limite ){
        return "reprovado"
    }

        return "aprovado"   

}

function inicio(){
    /* entradas */

    const nome = prompt('Digite seu nome')
    const idade = prompt('Digite sua idade')
    const salarioMensal = prompt('Digite seu salário')
    const valorEmprestimo = prompt('Valor de emprestimo desejado')

    /* validar entrada */

    const entradasIniciaisValidas = validarEntradasIniciais(nome, idade, salarioMensal, valorEmprestimo)

    if(entradasIniciaisValidas === "cancelado"){
        console.log("Operação cancelada pelo usuário.")
        return
    }

    if(entradasIniciaisValidas === "vazio"){
        console.log("Todos os campos são obrigatórios. Preencha as informações e tente novamente.")
        return
    }

    /* converter numero */

    const dadosConvertidos = converterDadosNumericos(idade, salarioMensal, valorEmprestimo)

    /* validar numerico */

    const statusValidacaoNumerica = validarDadosNumericos(dadosConvertidos)

    if(statusValidacaoNumerica === "noNumber"){
        console.log("Idade, salário e valor do empréstimo devem conter apenas números.")
        return
    }

    /* validar idade */

    const idadeValida = validarIdade(dadosConvertidos)

    if(idadeValida === "idadeInvalida"){
        console.log("Idade inválida. Informe uma idade maior que zero.")
        return
    }

    if(idadeValida === "menorIdade"){
        console.log("Empréstimo não disponível. É necessário ter 18 anos ou mais.")
        return
    }

    /* validar salario */

    const salarioValido = validarSalario(dadosConvertidos)

    if(salarioValido === "salarioInvalido"){
        console.log("Salário inválido. Informe um valor maior que zero.")
        return
    }

    /* validar emprestimo */

    const emprestimoValido = validarEmprestimo(dadosConvertidos)

    if(emprestimoValido === "emprestimoInvalido"){
        console.log("Valor do empréstimo inválido. Informe um valor maior que zero.")
        return
    }

    /* decisão final */

    const statusDaAprovacao = decidirAprovacao(dadosConvertidos)

    if(statusDaAprovacao === "reprovado"){
        console.log("Empréstimo recusado. O valor solicitado excede o limite permitido.")
        return
    }


    console.log(`Solicitação aprovada!

                 Nome: ${nome}
                 Idade: ${dadosConvertidos.idadeNumero}
                 Salário: ${dadosConvertidos.salarioMensalNumero}
                 Valor solicitado: ${dadosConvertidos.valorEmprestimoNumero}

                 Status: APROVADO`)
}

inicio()