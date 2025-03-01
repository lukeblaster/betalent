# Teste Técnico Front-end BeTalent

Este projeto faz parte do processo de testes técnicos da BeTalent para Desenvolvedor Front-end. Este repositório disponibiliza uma visualização responsiva de dados de funcionários.

## Requisitos

Tenha instaladas em sua máquina as ferramentas [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) (ou outro gerenciador de pacotes de sua preferência) para poder trabalhar no projeto.

### Como rodar o projeto

1. Acessa a pasta `db` e instale as dependências executando o comando `npm install`.
2. Execute o comando `npx json-server db.json` ou
   com `yarn json-server <path>/db.json`, em que `<path>` é o caminho completo até o diretório em que o arquivo db.json está localizado. Se mesmo assim não funcionar, busque ajuda na web.
3. Acesse a pasta `frontend` e instale as dependências executando o comando `yarn install` ou outro equivalente.
4. Inicie o projeto usando o comando `yarn dev` ou outro equivalente.
5. Acesse a url `http://localhost:5173`.

### Tecnologias utilizadas

- Vite
- React
- TypeScript
- TailwindCSS
- HeadlessUI
