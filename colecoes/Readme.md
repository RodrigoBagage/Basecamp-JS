# Coleções Chaveadas

Este repositório contém a atividade prática do Curso "Coleções Chaveadas", que faz parte do Basecamp de Javascript que assisti pela [Digital Innovation One](https://digitalinnovation.one/).

## Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função `getAdmins` que recebe um `Map`;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usu;arios que são administradores.

## Atividade 2: Sets

Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.



# Map


## Apresentar a coleção Map

Estrutura

Caracteristicas

- Uma coleção de arrays no formato [chave, valor]
- Pode ser iterado por um loop for...of

## Explicar a sua aplicação

Métodos

Adicionar, ler e deletar

```
const myMap = new Map()

myMap.set('apple' , 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get(apple);
// "fruit"

myMap.delete("apple")
// true

myMap.get("apple")
// undefined
```

## Explicar a diferença entre Map e objeto

Map x Objeto

- Maps podem ter chaves de qualquer tipo
- Maps possuem a propriedade length
- Maps são mais fáceis de iterar
- Utilizado quando o valor das chaves é desconhecido
- Os valores tem o mesmo tipo


# Set

## Apresentar a coleção Set

Estrutura

Sets são estruturas que armazenam valores únicos.

## Explicar sua aplicação

Métodos

Adicionar, ler e deletar

```
const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5);

```

## Explicar a diferença entre Set e Array

- Possui valores únicos
- Em vez da propriedade length, consulta-se o número
de registros pela propriedade size.
- Não possui os métodos map, filter, reduce etc.



