const jogadores = [
    { nome: "Lucas", partidas: 10, gols: 6, assistencias: 4, faltas: 8 },
    { nome: "Marina", partidas: 12, gols: 3, assistencias: 5, faltas: 4 },
    { nome: "Pedro", partidas: 9, gols: 8, assistencias: 2, faltas: 10 },
    { nome: "Julia", partidas: 11, gols: 5, assistencias: 3, faltas: 6 },
    { nome: "Rafael", partidas: 8, gols: 2, assistencias: 1, faltas: 3 }
];

function calcularTotalParticipacao(jogadores) {
    return jogadores.map(({ nome, gols, assistencias }) => ({
        nome,
        participacao: gols + assistencias
    }))
}

function filtrarJogadoresDestaque(jogadores) {

    return jogadores.filter(({ gols, assistencias }) => gols + assistencias >= 9)
}

function calcularMediaGols(jogadores) {
    const totalGols = jogadores.reduce((acumulador, { gols }) => {
        return acumulador + gols
    }, 0)

    const quantidadeDeJogadores = jogadores.length

    return totalGols / quantidadeDeJogadores
}

function encontrarArtilheiro(jogadores) {
    const melhorJogador = jogadores[0]


    return jogadores.reduce((acumulador, jogador) => {

        if (jogador.gols > acumulador.gols) {
            return jogador
        }

        return acumulador
    }, melhorJogador)
}

function gerarResumoCompeticao(jogadores) {
    return {
        totalJogadores: jogadores.length,
        totalGols: jogadores.reduce((acumulador, { gols }) => {
            return acumulador + gols
        }, 0),
        totalAssistencias: jogadores.reduce((acumulador, { assistencias }) => {
            return acumulador + assistencias
        }, 0),
        artilheiro: encontrarArtilheiro(jogadores).nome
    }
}

function existeJogadoresComMuitasFaltas(jogadores) {
    return jogadores.some(({ faltas }) => faltas > 7)
}

function classificarJogadores(jogadores) {
    const destaques = jogadores.filter(({ gols, assistencias }) => gols + assistencias >= 9)

    const demais = jogadores.filter(({ gols, assistencias }) => gols + assistencias < 9)

    return {
        destaques,
        demais
    }
}

function validarJogadores(jogadores) {
    return jogadores.length > 0 && jogadores.every(({ gols, assistencias }) => gols >= 0 && assistencias >= 0 )
}

//Participação
console.log("Participação: ", calcularTotalParticipacao(jogadores))

//jogadores destaque
console.log("Jogadores destaque: ", filtrarJogadoresDestaque(jogadores))

//Media de gols
console.log("Média de gols: ", calcularMediaGols(jogadores))

//Artilheiro
console.log("Artilheiro: ", encontrarArtilheiro(jogadores))

//Resumo
console.log("Resumo: ", gerarResumoCompeticao(jogadores))

//Muitas faltas
console.log("Muitas faltas: ", existeJogadoresComMuitasFaltas(jogadores))

//Classificação
console.log("Classificação: ", classificarJogadores(jogadores) )

//Jogadores Validos
console.log("Jogadores Válidos: ", validarJogadores(jogadores))