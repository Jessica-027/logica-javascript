const funcionarios = [
    {
        id: 1,
        nome: "Ana",
        salario: 3500,
        ativo: true,
        departamento: "TI"
    },
    {
        id: 2,
        nome: "Carlos",
        salario: 2800,
        ativo: false,
        departamento: "RH"
    },
    {
        id: 3,
        nome: "Mariana",
        salario: 4200,
        ativo: true,
        departamento: "TI"
    },
    {
        id: 4,
        nome: "Pedro",
        salario: 3100,
        ativo: true,
        departamento: "Financeiro"
    },
    {
        id: 5,
        nome: "Julia",
        salario: 2500,
        ativo: false,
        departamento: "RH"
    }
];

function filtrarFuncionariosAtivos(funcionarios) {
    return funcionarios.filter(({ ativo }) => ativo)
}

function calcularFolhaSalarial(funcionarios) {
    return funcionarios.reduce((acumulador, { salario }) => {
        return acumulador + salario
    }, 0)
}

function obterNomesFuncionarios(funcionarios) {
    return funcionarios.map(({ nome }) => nome)
}


function executarAnalise(funcionarios, callback) {
    return callback(funcionarios)
}

const ativos = executarAnalise(funcionarios, filtrarFuncionariosAtivos)

const salarios = executarAnalise(funcionarios, calcularFolhaSalarial)

const nomes = executarAnalise(funcionarios, obterNomesFuncionarios)


console.log(ativos)
console.log(`Total: `, salarios)
console.log(nomes)


function criarFiltroDepartamento(departamento) {

    return (funcionarios) => {
        return funcionarios.filter((funcionario) => funcionario.departamento === departamento)
    }
}

const filtrarPorTI = criarFiltroDepartamento("TI")
const filtrarPorRH = criarFiltroDepartamento("RH")

console.log(filtrarPorTI(funcionarios))
console.log(filtrarPorRH(funcionarios))