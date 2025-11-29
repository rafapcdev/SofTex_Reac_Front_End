# 💻 Softex - React Front-End: Jornada de Desenvolvimento Web

Este repositório documenta minha jornada de aprendizado no desenvolvimento Front-end, cobrindo o tripé fundamental (HTML, CSS e JavaScript), a transição para TypeScript e a utilização do framework moderno ReactJS.

O conteúdo está organizado em módulos que simulam a progressão de um curso.

## 🎯 Visão Geral do Processo de Desenvolvimento Front-end

O desenvolvimento Front-end moderno é um processo em camadas, onde cada tecnologia resolve um problema específico:

| Pilar | Foco Principal | Ferramentas Aprendidas |
| :--- | :--- | :--- |
| **Estrutura** | Esqueleto do Conteúdo Web | HTML Semântico |
| **Estilização** | Design e Responsividade | CSS, SASS, CSS Modules |
| **Lógica** | Interatividade e Comportamento | JavaScript (ES6+), TypeScript |
| **Reatividade** | Interfaces Dinâmicas | React JS (Componentes e Hooks) |

---

## 📚 Módulos do Curso e Aprendizados Chave

### Módulo 1: `html/` (Estrutura e Estilização Base)

Foco na criação de interfaces visuais e na adaptação para diferentes dispositivos.

| Arquivo/Pasta | Tópico Principal | Aprendizado |
| :--- | :--- | :--- |
| **Ex. 1 e 2 (.html)** | HTML Semântico e Estrutura | Uso de tags modernas (`<header>`, `<footer>`, `<div>`) e organização básica de conteúdo. |
| **Ex. 3 a 6 (.css/.html)** | CSS Básico e Layouts | Domínio do **Modelo de Caixa (Box Model)**, seletores CSS e introdução a layouts (talvez Flexbox ou Grid, dependendo da atividade). |
| **Ex. 7 e 8 (.scss)** | Pré-processadores CSS (SASS) | Como usar variáveis, aninhamento e mixins com SASS para escrever CSS de forma mais limpa, modular e eficiente. |
| **src/ (TailwindCSS)** | Frameworks CSS (Tailwind) | Aplicação de classes utilitárias para construir interfaces rapidamente, entendendo o conceito de Design System. |
| **Atividade Final** | **Responsividade e Projeto Completo** | Integração de HTML, CSS e SASS/Tailwind para construir uma página completa e responsiva. |

### Módulo 2: `Javascript/` (Lógica e Interatividade)

Focado em adicionar comportamento à interface e manipulação de dados.

| Arquivo/Pasta | Tópico Principal | Aprendizado |
| :--- | :--- | :--- |
| **atividade.js** | Fundamentos de JavaScript | Variáveis, operadores, estruturas de controle de fluxo (`if/else`, `for`, `while`) e funções básicas. |
| **atividade_git.pdf** | Controle de Versão (Teórico) | Entendimento dos comandos essenciais do Git (`commit`, `push`, `pull`, `branch`) e a importância do controle de versão no desenvolvimento. |

### Módulo 3: `Typescript/` (Desenvolvimento Robusto com Tipagem)

Transição de JavaScript para TypeScript para adicionar segurança e escalabilidade ao código.

| Arquivo/Pasta | Tópico Principal | Aprendizado |
| :--- | :--- | :--- |
| **exerciciosSoftex.ts** | Tipos Primitivos e Inferência | Uso de tipos básicos (`string`, `number`, `boolean`, `any`) e como o TypeScript infere tipos automaticamente. |
| **exercicio3.ts, exercicio4.ts** | Funções e Tipos de Retorno | Definição de tipos para parâmetros de funções e garantia de que a função retorna o tipo esperado. |
| **exercicio5.ts, exercicio8.ts** | Interfaces e Tipos Complexos | Criação de **Interfaces** para definir a estrutura de objetos, garantindo o formato de dados em coleções (Arrays) e objetos. |
| **exercicio9.ts, exercicio10.ts** | **Programação Orientada a Objetos (POO)** | Implementação de classes, encapsulamento, herança e polimorfismo para modelar o domínio da aplicação. |
| **Atividade Final (PDF)** | **Revisão de POO e Tipagem** | Consolidação do conhecimento em Orientação a Objetos e o uso de classes e interfaces para um projeto prático. |

### Módulo 4: `react/` (Interfaces Reativas com Componentes)

Aplicação dos conhecimentos anteriores no framework de mercado mais popular para construir interfaces reativas.

| Arquivo/Pasta | Tópico Principal | Aprendizado |
| :--- | :--- | :--- |
| **src/components/Saudacao.jsx** | Componentes Funcionais (Props) | Como criar componentes reutilizáveis e passar dados de pai para filho via `props`. |
| **src/components/Contador.jsx** | Estado (`useState`) | Introdução ao **Estado Reativo** e ao Hook `useState` para gerenciar dados que mudam com a interação do usuário. |
| **src/components/Timer.jsx** | Efeitos Colaterais (`useEffect`) | Uso do Hook `useEffect` para gerenciar o ciclo de vida do componente, como iniciar um timer ou buscar dados. |
| **src/components/Formulario.jsx** | Formulários Controlados | Gerenciamento de entradas de usuário em formulários, vinculando campos a um estado e manipulando eventos. |
| **src/projeto-final-react/** | **Componentização Complexa** | Aplicação de todos os conceitos (Estado, Props, Componentes) em um projeto maior (Lista de Tarefas), focando na arquitetura de componentes. |

---

## 🚀 Como Executar o Projeto

Para visualizar e rodar os exercícios localmente:

### Pré-requisitos
* [Node.js](https://nodejs.org/) (necessário para TypeScript e React)
* [Git](https://git-scm.com/)

### 1. Clonar o Repositório
```bash
git clone [https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github](https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
cd softex_reac_front_end