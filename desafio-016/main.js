const consultas = [
    {
        id: 1,
        paciente: "Marina",
        idade: 25,
        especialidade: "Cardiologia",
        horario: "14:00",
        status: "agendada"
    },
    {
        id: 2,
        paciente: "Lucas",
        idade: 17,
        especialidade: "Dermatologia",
        horario: "09:30",
        status: "agendada"
    },
    {
        id: 3,
        paciente: "Juliana",
        idade: 42,
        especialidade: "Pediatria",
        horario: "11:00",
        status: "confirmada"
    },
    {
        id: 4,
        paciente: "Pedro",
        idade: 30,
        especialidade: "Ortopedia",
        horario: "16:00",
        status: "cancelada"
    },
    {
        id: 5,
        paciente: "Ana",
        idade: 0,
        especialidade: "Neurologia",
        horario: "08:00",
        status: "agendada"
    }
];

function validarPaciente(consulta) {

    if (consulta === undefined || consulta === null) {
        throw new Error(`Consulta não informada ou inválida.`)
    }

    const { paciente } = consulta


    if (paciente === undefined || paciente === null) {
        throw new Error(`Paciente não informado ou inválido.`)
    }

    if (typeof paciente !== "string") {
        throw new TypeError(`Nome do paciente deve ser uma string.`)
    }

    if (paciente.trim() === "") {
        throw new Error(`Nome do paciente não informado.`)
    }


    return true
}

function validarIdade(consulta) {

    if (consulta === undefined || consulta === null) {
        throw new Error(`Consulta não informada ou inválida.`)
    }

    const { idade } = consulta


    if (idade === undefined || idade === null) {
        throw new Error(`Idade do paciente não informada.`)
    }

    if (typeof idade !== "number") {
        throw new TypeError(`Idade deve ser um número.`)
    }

    if (!Number.isFinite(idade)) {
        throw new TypeError(`Idade deve ser um número finito.`)
    }

    if (idade <= 0) {
        throw new Error(`Idade precisa ser maior que 0.`)
    }

    return true

}

function validarEspecialidade(consulta) {
    if (consulta === undefined || consulta === null) {
        throw new Error(`Consulta não informada ou inválida.`)
    }

    const { especialidade } = consulta

    if (especialidade === undefined || especialidade === null) {
        throw new Error(`Especialidade não informada.`)
    }

    if (typeof especialidade !== "string") {
        throw new TypeError(`Especialidade deve ser uma string.`)
    }

    if (especialidade.trim() === "") {
        throw new Error(`Especialidade não pode estar vazia.`)
    }

    return true

}

function validarHorario(consulta) {
    if (consulta === undefined || consulta === null) {
        throw new Error(`Consulta não informada ou inválida.`)
    }

    const { horario } = consulta

    if (horario === undefined || horario === null) {
        throw new Error(`Horário não informado.`)
    }

    if (typeof horario !== "string") {
        throw new TypeError(`Horário deve ser uma string.`)
    }

    if (horario.trim() === "") {
        throw new Error(`Horário não pode estar vazio.`)
    }


    if (horario.length !== 5) {
        throw new Error(`Horário inválido. Utilize o formato HH:MM.`)
    }

    if (horario[2] !== ":") {
        throw new Error(`Horário inválido. Utilize o formato HH:MM.`);
    }

    const partes = horario.split(":");

    const horas = Number(partes[0])
    const minutos = Number(partes[1])

    if (!Number.isInteger(horas) || !Number.isInteger(minutos)) {
        throw new TypeError(`Horário deve conter apenas números.`)
    }


    if (horas > 23 || horas < 0) {
        throw new Error(`Hora deve estar entre 00 e 23.`)
    }

    if (minutos > 59 || minutos < 0) {
        throw new Error(`Minutos devem estar entre 00 e 59.`)
    }


    return true

}

function validarStatus(consulta) {
    if (consulta === undefined || consulta === null) {
        throw new Error(`Consulta não informada ou inválida.`)
    }

    const { status } = consulta

    if (status === undefined || status === null) {
        throw new Error(`Status não informado.`)
    }

    if (typeof status !== "string") {
        throw new TypeError(`Status deve ser uma string.`)
    }

    if (status.trim() === "") {
        throw new Error(`Status não pode estar vazio.`)
    }

    const statusPermitidos = ["agendada", "confirmada", "cancelada"]

    if (!statusPermitidos.includes(status)) {
        throw new Error(`Status informado não é permitido.`)
    }

    return true
}


const erros = []
for (const consulta of consultas) {
    try {

        validarPaciente(consulta)
        validarIdade(consulta)
        validarEspecialidade(consulta)
        validarHorario(consulta)
        validarStatus(consulta)


        

    } catch (error) {
        erros.push({
            id: consulta.id,
            mensagem: error.message
        })
    }
}

if(erros.length === 0){
    console.log(`Todas as consultas foram validadas com sucesso!`)
}else {
    console.log(`Foram encontrados erros nas consultas.`);
}

erros.forEach((erro) => {
    console.log(`Consulta ${erro.id}: ${erro.mensagem}`)
})