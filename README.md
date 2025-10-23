# 🎬 Moviepédia - Seu Guia de Filmes

Este é um projeto de front-end que permite aos usuários descobrir filmes populares e pesquisar por títulos específicos, exibindo detalhes como sinopse e avaliação.

Este projeto foi construído como parte do meu portfólio de desenvolvimento Front-End, com foco na manipulação do DOM e consumo de APIs REST.

---

## 🚀 Demo ao Vivo

Você pode testar o projeto em funcionamento clicando aqui:
**[Moviepédia](https://geisonsile.github.io/moviepedia/)**

---

## 📸 Screenshot

![MoviePedia em ação](screenshot_home.jpg)

---

## ✨ Funcionalidades (Features)

* **Filmes Populares:** Carrega automaticamente os filmes mais populares do momento ao abrir a página.
* **Busca Dinâmica:** Permite que o usuário pesquise filmes por nome.
* **Detalhes do Filme:** Exibe uma janela (modal) com informações detalhadas (pôster, título, nota e sinopse) ao clicar em um card.
* **Feedback Visual:** Mostra um "spinner" de carregamento (loader) enquanto os dados da API estão sendo buscados.
* **Design Responsivo:** A grade de filmes se adapta a diferentes tamanhos de tela (desktop e mobile).

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **HTML5** (com foco em estrutura semântica)
* **CSS3** (utilizando Flexbox, Grid Layout e Animações `@keyframes`)
* **JavaScript (ES6+)** (Vanilla JS, sem frameworks)
* **Fetch API** (para comunicação assíncrona)
* **TheMovieDB (TMDB) API** (como fonte de dados dos filmes)
* **Git & GitHub** (para versionamento)

---

## 📚 O que eu aprendi

* Manipulação avançada do DOM (criar, adicionar e modificar elementos dinamicamente).
* Uso de `async/await` com a `Fetch API` para lidar com requisições assíncronas.
* Tratamento de erros com blocos `try...catch...finally`.
* Técnica de **Delegação de Eventos** (Event Delegation) para adicionar "listeners" em elementos criados dinamicamente (os cards de filme).
* Armazenamento de dados em elementos HTML usando `data-attributes`.
* Criação de um layout em grid responsivo e moderno.

---

## ⚙️ Como rodar o projeto localmente

1.  Clone este repositório:
    ```bash
    git clone https://github.com/geisonsile/moviepedia.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd nome-do-repositorio
    ```
3.  **Importante:** Você precisará de uma chave de API do [TheMovieDB](https://www.themoviedb.org/).
    * Crie um arquivo chamado `config.js` na raiz do projeto.
    * Dentro dele, cole a seguinte linha, substituindo pela sua chave:
        ```javascript
        const API_KEY = 'SUA_CHAVE_DA_API_AQUI';
        ```
    * *(O arquivo `config.js` está intencionalmente no `.gitignore` para proteger chaves sensíveis)*
4.  Abra o arquivo `index.html` no seu navegador de preferência.
