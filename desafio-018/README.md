# Desafio 018 - Sistema de Processamento de Pedidos e Gerenciamento de Eventos

Projeto desenvolvido para praticar lógica de programação com JavaScript.

## Objetivos

- Filtragem de pedidos de acordo com o status
- Filtragem de pedidos com base em um valor mínimo
- Cálculo do valor total dos pedidos
- Contagem de pedidos por status
- Geração de resumo dos pedidos
- Processamento de pedidos utilizando callbacks
- Execução de diferentes comportamentos por meio de callbacks
- Criação de Higher-Order Functions
- Criação de closures para preservar estados internos
- Gerenciamento de eventos
- Registro de eventos em um histórico privado
- Consulta e contagem de eventos registrados
- Proteção do histórico contra modificações externas
- Geração de relatório final
- Separação de responsabilidades
- Reutilização e composição de funções

## Regras

- Cada pedido deve possuir identificador, nome do cliente, valor e status.
- Os pedidos devem ser filtrados de acordo com o status informado.
- O sistema deve permitir filtrar pedidos com base em um valor mínimo.
- O valor total dos pedidos deve ser calculado somando os valores de todos os pedidos.
- A quantidade de pedidos deve ser contabilizada de acordo com cada status.
- O resumo deve apresentar a quantidade de pedidos cadastrados, aprovados, pendentes e cancelados, além do valor total.
- O processamento deve receber uma função callback como parâmetro.
- Diferentes callbacks devem executar comportamentos específicos para cada situação dos pedidos.
- O gerenciador de eventos deve permitir registrar, consultar e contar eventos.
- O histórico de eventos deve permanecer privado dentro de uma closure.
- A consulta ao histórico deve retornar uma cópia dos eventos registrados.
- O relatório final deve apresentar o resumo dos pedidos, a quantidade de eventos e o histórico registrado.
- Cada regra deve ser implementada em uma função específica.

## Aprendizados

- Funções
- Parâmetros
- Retorno de funções
- Objetos
- Arrays
- `filter()`
- `reduce()`
- `forEach()`
- `push()`
- `length`
- Destructuring
- Spread operator
- Arrow functions
- Callbacks
- Higher-Order Functions
- Closures
- Estado privado
- Imutabilidade
- Cópia de arrays
- Reutilização de funções
- Composição de funções
- Separação de responsabilidades
- Organização de regras de negócio

## Tecnologias

- JavaScript