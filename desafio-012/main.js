const tarefas = [
  { id: 1, titulo: "Estudar JavaScript", status: "concluida" },
  { id: 2, titulo: "Praticar Git", status: "pendente" },
  { id: 3, titulo: "Criar projeto frontend", status: "em andamento" },
  { id: 4, titulo: "Estudar funções", status: "pendente" }
];


function buscarTarefaPorId(tarefas, idProcurado) {
  return tarefas.find(({ id }) => id === idProcurado)
}

function existeTarefaComStatus(tarefas, statusProcurado) {
  return tarefas.some(({ status }) => status === statusProcurado)
}

function verificarTodasConcluidas(tarefas) {
  return tarefas.every(({ status }) => status === "concluida")
}


function validarStatus(status) {

  const statusValidos = ["pendente", "em andamento", "concluida"]
  return statusValidos.includes(status)
}


function atualizarStatusTarefas(tarefas, idProcurado, novoStatus) {

  const statusValido = validarStatus(novoStatus)

  if (!statusValido) {

    throw new Error("Operação inválida.")
   
  }

   return tarefas.map((tarefa) => {
      if (tarefa.id === idProcurado) {
        return {
          ...tarefa,
          status: novoStatus
        }
      }

      return tarefa
    })

}

function gerarResumoTarefas(tarefas){


  return {
    totalTarefas: tarefas.length,
    tarefasConcluidas: tarefas.filter(({status}) => status === "concluida").length,
    tarefasPendentes: tarefas.filter(({status}) => status === "pendente").length,
    tarefasEmAndamento: tarefas.filter(({status}) => status === "em andamento").length,
    todasConcluidas: verificarTodasConcluidas(tarefas)
  }
}

try {
 const tarefasAtualizadas =  atualizarStatusTarefas(tarefas, 2, "concluida")

 console.log("Tarefas atualizadas com sucesso: ", tarefasAtualizadas)
 console.log(gerarResumoTarefas(tarefasAtualizadas))
  
} catch (error) {
  console.log("Erro ao atualizar: ", error.message)
}



