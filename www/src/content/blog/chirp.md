---
title: "Mono repositórios"
description: "Criando incentivos para reutilização de código e padronizações a nível de projeto"
---

<!-- Monorepo, PNPM, changesets, typescript project reference  -->

# Mono repositórios

## O que é um repositório?

Geralmente quando discutimos de repositórios, nos referimos a repositórios git. Nao vou entrar em detalhes sobre o que é um repositório git, mas basicamente é um local onde você armazena seu código fonte com um histórico de alterações.

Muitos projetos optam por ter um repositório por aplicação ou por pacote, o que pode funcionar muito bem para uma aplicação única, como e o caso de um monólito. Mas quando a aplicação e apenas parte de um sistema maior, manter todas essas partes separadas pode causar baixa coesão, duplicação de código e problemas para versionar o sistema como um todo.

## O que é um mono repositório?

O mono repositório é uma abordagem onde você mantém todo o código fonte de um sistema em um único repositório git. Isso pode incluir várias aplicações, bibliotecas, pacotes, etc. A ideia é que você possa versionar o sistema como um todo, garantindo que todas as partes funcionem bem juntas.

