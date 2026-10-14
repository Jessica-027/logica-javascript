const vendas = [
  { produto: "Teclado", valor: 150, status: "aprovada" },
  { produto: "Mouse", valor: 80, status: "aprovada" },
  { produto: "Monitor", valor: 900, status: "pendente" },
  { produto: "Headset", valor: 200, status: "aprovada" },
  { produto: "Webcam", valor: 120, status: "cancelada" }
];

function identificarVendasAprovadas(vendas){
    return vendas.filter(({status}) => status === "aprovada")
}


function calcularFaturamentoTotal(vendasAprovadas){
  return vendasAprovadas.reduce((acumulador, {valor}) => {
    return acumulador + valor
  }, 0)
}

function contarVendasAprovadas(vendasAprovadas){
  return vendasAprovadas.length
}

function calcularTicketMedio(faturamentoTotal, quantidadeVendas){
  
  if(quantidadeVendas === 0){
    return 0
  }
  const resultado = (faturamentoTotal / quantidadeVendas)

  return resultado

}

function gerarRelatorioVendas(vendas){
  const vendasAprovadas = identificarVendasAprovadas(vendas)
  const faturamentoTotal = calcularFaturamentoTotal(vendasAprovadas)
  const quantidadeVendas = contarVendasAprovadas(vendasAprovadas)
  const ticketMedio = calcularTicketMedio(faturamentoTotal, quantidadeVendas)

  return{
    vendasAprovadas,
    faturamentoTotal,
    quantidadeVendas,
    ticketMedio
  }

}

console.log(gerarRelatorioVendas(vendas))