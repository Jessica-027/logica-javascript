# Desafio 016 - Sistema de Agendamento de Consultas

Projeto desenvolvido para praticar lógica de programação com JavaScript.

## Objetivos

- Validação dos dados de consultas médicas
- Verificação dos dados dos pacientes
- Validação de idade
- Validação de especialidades médicas
- Validação de horários
- Validação de status das consultas
- Tratamento de erros durante as validações
- Identificação de consultas com dados inválidos
- Geração de relatório de erros
- Manipulação de arrays e objetos
- Uso de funções independentes
- Uso de destructuring
- Uso de `typeof`
- Uso de `Number.isFinite()`
- Uso de `Number.isInteger()`
- Uso de `trim()`
- Uso de `split()`
- Uso de `includes()`
- Uso de `for...of`
- Uso de `forEach()`
- Uso de `push()`
- Uso de `length`
- Separação de responsabilidades
- Organização de regras de negócio

## Regras

- Cada consulta deve possuir identificador, nome do paciente, idade, especialidade, horário e status.
- O nome do paciente deve ser informado, ser uma string e não pode estar vazio.
- A idade deve ser informada, ser um número finito e maior que zero.
- A especialidade deve ser informada, ser uma string e não pode estar vazia.
- O horário deve ser informado no formato `HH:MM`, com valores de hora entre 00 e 23 e minutos entre 00 e 59.
- O status deve ser informado e corresponder a um dos valores permitidos: `agendada`, `confirmada` ou `cancelada`.
- Cada validação deve ser implementada em uma função específica.
- Quando uma validação encontrar um erro, deve lançar uma exceção com uma mensagem correspondente.
- O tratamento de erros deve permitir que o processamento continue para as próximas consultas.
- Os erros encontrados devem ser armazenados com o identificador da consulta e a respectiva mensagem.
- Ao final, o sistema deve informar se todas as consultas foram validadas ou apresentar um relatório dos erros encontrados.

## Aprendizados

- Funções
- Parâmetros
- Retorno de funções
- Objetos
- Arrays
- Destructuring
- `typeof`
- `Number.isFinite()`
- `Number.isInteger()`
- `trim()`
- `split()`
- `includes()`
- `for...of`
- `forEach()`
- `push()`
- `length`
- Condições
- Operadores de comparação
- Validação de tipos e valores
- Validação de propriedades de objetos
- Tratamento de exceções
- Uso de `throw`
- Uso de `Error` e `TypeError`
- Uso de `try...catch`
- Armazenamento de erros em arrays
- Geração de relatórios
- Separação de responsabilidades
- Reutilização de código
- Organização de regras de negócio

## Tecnologias

- JavaScript
