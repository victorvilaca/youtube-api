# YouTube API + Google OAuth 2.0 utilizando ReactJS

## Qual a estrutura inicial de código utilizada?

O projeto foi criado utilizando a estrutura do [Create React App](https://github.com/facebook/create-react-app).

## O que é o projeto?

O projeto é uma aplicação desenvolvida em ReactJS, utilizando APIs do Google e Youtube para realizar login, busca, listagem e play de vídeos.

## Guia do projeto

Primeiramente, é necessário fazer o login na aplicação. Para logar, foi utilizado Google OAuth 2.0.

Logo após o login ser feito, a página de listagem e busca de vídeos irá renderizar. Para buscar os vídeos, foi utilizado a API do YouTube.

O usuário consegue fazer uma busca através do input no header da aplicação. Após realizar a busca, a lista de vídeos irá atualizar no momento em que uma resposta da API for detectada.

O usuário também consegue dar play em qualquer vídeo que está listado na tela, bastando apenas clicar em cima do mesmo.

## Executando o projeto

Antes de executar o projeto, é necessário instalar todas as dependências necessárias para a execução. Para instalá-las, execute o comando abaixo:

### `npm install`

Após instalar todas as dependências, entre na pasta raiz do projeto e execute o comando abaixo para iniciar o projeto.

O projeto irá iniciar no [http://localhost:3000](http://localhost:3000). Acesse este endereço para visualizar a aplicação rodando.

### `npm start`

O projeto também possui alguns testes unitários na camada de Manager, que é a camada que trata o dado logo após a chamada de algum serviço.
Para rodar os testes unitários, execute o comando abaixo:

### `npm test`

## Demo

Você consegue ver uma demonstração da aplicação [aqui](https://cartola-youtube.herokuapp.com).
Para hospedar essa aplicação, foi utilizada a plataforma [Heroku](https://www.heroku.com/).
