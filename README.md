# API Tegra-Food
"Com base na descrição da API, você deve codificar a listagem de produtos (todos) e a listagem com filtro por produto." ~ Projeto Simulado do processo seletivo Jovens Tegranos

## Como Executar?
Para executar este projeto, precisamos seguir alguns passos:

- Abra o terminal e clone este projeto: `git clone 'link para este projeto'`
- Abra a pasta do projeto (api-tegra) e baixe as dependências do projeto com: `npm install`
- Inicialize a API: `npm run dev`
- Recomendo utilizar uma extensão do vscode chamada Live Server. Com ela, clique em "Go Live" e em seu navegador, vá até: localhost:5500/view/
- Explore a aplicação :)


## Documentação da estrutura do projeto

| Path:           | Description:                                                      |
| ----------------- | ---------------------------------------------------------------- |
| node_modules                              | diretório criado pelo gerenciador de pacotes npm com as dependências para rodar a aplicação |
| src                                       | pasta principal com os arquivos da api (back-end) |
| src/controllers                           | pasta com os controllers da aplicação |
| src/controllers/products-controller.js    | arquivo do controller de 'produtos' |
| ㅤㅤㅤㅤㅤ | ㅤㅤㅤㅤㅤ |
| src/app.js                                | arquivo principal da api |
| src/config-database.js                    | arquivo para configuração do banco de dados |
| src/database.db                           | arquivo '.db'. É o banco de dados da aplicação (escrito em SQLite) |
| src/routes.js                             | arquivo com as rotas (endpoints) |
| ㅤㅤㅤㅤㅤ | ㅤㅤㅤㅤㅤ |
| view                                      | pasta principal com os arquivos da parte visual (front-end). |
| view/pages                                | pasta com as páginas da aplicação |
| view/pages/delete-products-id.html        | arquivo para a página DELETE (deletar produtos por id) |
| view/pages/find-products-filtering.html   | arquivo para a página GET (listar produtos COM FILTRO) |
| view/pages/find-products-id.html          | arquivo para a página GET (listar produtos por id) |
| view/pages/find-products.html             | arquivo para a página GET (lista todos os produtos) |
| view/pages/save-products.html             | arquivo para a página POST (salvar produtos) |
| view/pages/update-products-id.html        | arquivo para a página PUT (editar produtos por id) |
| view/index.html                           | arquivo principal. Para visualizar o front-end, entre nesta página (localhost:5500/view/index.html caso esteja usando a extensão Live Server) |
| ㅤㅤㅤㅤㅤ | ㅤㅤㅤㅤㅤ |
| .gitignore                                | arquivo de configuração para diretórios que serão ignorados pelo github |
| package-lock.json                         | arquivo '.json'. Faz o relacionamento das dependências e suas versões baixadas. |
| package.json                              | arquivo '.json' utilizado para estipular e configurar as dependências do projeto (quais outros pacotes vai precisar ser instalado para ser executar) |
| README.md                                 | arquivo '.md' utilizado para estilizar uma página de "resumo" para o projeto no github |

