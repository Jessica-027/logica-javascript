const pagamentos = [
  {
    id: 1,
    cliente: "Ana",
    valor: 250,
    status: "aprovado"
  },
  {
    id: 2,
    cliente: "Carlos",
    valor: 0,
    status: "pendente"
  },
  {
    id: 3,
    cliente: "Marina",
    valor: 800,
    status: "aprovado"
  },
  {
    id: 4,
    cliente: "João",
    valor: -100,
    status: "aprovado"
  }
];

function validarIDPagamento(id) {
  if (typeof id !== "number") {
    throw new TypeError(`Informação inválida:  O ${id} não corresponde a um número`)
  }

  return id
}


function identificarPagamentoPorId(pagamentos, id) {
  const pagamentoEncontrado = pagamentos.find((pagamento) => pagamento.id === id)

  if (!pagamentoEncontrado) {
    throw new Error(`Pagamento com id ${id} não encontrado`)
  }

  return pagamentoEncontrado
}

function validarValorPagamento(pagamento) {
  if (pagamento.valor <= 0) {
    throw new Error(`Valor de pagamento inválido: ${pagamento.valor}`)

  }

  return pagamento
}


function processarPagamento(pagamentos, id) {
  try {
    validarIDPagamento(id)
    const pagamento = identificarPagamentoPorId(pagamentos, id)

    return validarValorPagamento(pagamento)

  } catch (erro) {

    if (erro instanceof TypeError) {
      console.log(`Erro de tipo: ${erro.message}`)
    } else {
      console.log(erro.message)
    }


  }
}

function identificarPagamentosAprovados(pagamentos){
 return pagamentos.filter(({status, valor}) => status === "aprovado" && valor > 0)
}

function calcularFaturamentoAprovados(pagamentosAprovados){
 return pagamentosAprovados.reduce((acumulador, pagamento) => {
  return acumulador + pagamento.valor
 }, 0)
}

function gerarRelatorioPagamento(pagamentos){
  const pagamentosAprovados = identificarPagamentosAprovados(pagamentos)
  const faturamentoTotal = calcularFaturamentoAprovados(pagamentosAprovados)
  const quantidadeTotal = pagamentos.length

  return{
    pagamentosAprovados,
    faturamentoTotal,
    quantidadeTotal
  }
  
}



