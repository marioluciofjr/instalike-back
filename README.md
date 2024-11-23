# Projeto Instaport

Esse projeto foi desenvolvido na Imersão Dev Back-end da Alura

## índice

* [Introdução](#introdução)
* [Resultado](#resultado)
* [Estrutura do projeto](#estrutura-do-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Links úteis](#links-úteis)
* [Contato](#contato)

## Introdução

O projeto resultou em desenvolver toda a estrutura back-end necessárria para o front-end criar um site similar ao Instagram. No meu caso eu adaptei para um site que trouxesse algumas imagens que gerei via inteligência artificial generativa.

## Resultado

<div>
  <img align="center" src="https://github.com/marioluciofjr/instaport/blob/main/instaport.gif?raw=true" />
</div>

## Estrutura do projeto

`Aula 1.` Instalação do Node.Js e início da criação do projeto com NPM, criação da API Key no Google AI Studio, a API do Gemini.

+ Conhecimento sobre o projeto de blog de fotos;
+ Instalação do Node.js;
+ Aprendizado sobre o que é um servidor;
+ Criação de um servidor;
+ Criação da API Key do Gemini.

`Aula 2.` Criação de uma base de dados e um mock, com ajuda do Gemini, além de adicionar rotas e iniciar o processo de integrar a API no banco de dados, via MongoDB.

+ Criação de uma base de dados;
+ Criação de um mock com ajuda do Gemini;
+ Armazenamento dos dados;
+ Adicionamento de rotas;
+ Utilização do bancos de dados MongoDB;
+ Preparação do MongoDB para subir o recurso na Nuvem.

`Aula 3.` Criação de variáveis de ambiente, configuração do primeiro cluster, databse e coleção no MongoDB, conexão com a API do Gemini.

+ Configuração do primeiro Cluster, Database e coleção no MongoDB;
+ Criação de variáveis de ambiente;
+ Conexão do Banco com a API via String de conexão;
+ Criação do código de configuração do banco na API;
+ Refatoração do primeiro get.

`Aula 4.` Implementação do upload das imagens no projeto, além de testar a API com o Postman.

+ Envio das informações para a base de dados;
+ Aprendizado sobre verbos HTTP;
+ Criação da rota POST/post e POST/upload;
+ Implementação do upload de imagens;
+ Teste da API com thunderClient e Postman.

`Aula 5.` Finalização do projeto, colocando a lógica de armazenamento de imagens no servidor, integrando o Front-End do projeto e fazendo o deploy do back-end na Google Cloud.

+ Realização da lógica de armazenamento de imagens no servidor;
+ Criação da rota PUT para atualização de post;
+ Integração com o Frontend;
+ Integração com a API do Gemini;
+ Realização do deploy do back-end na Google Cloud.

💡 Para criar as imagens do projeto, eu utilizei o prompt - [Método 3W1H](https://github.com/marioluciofjr/prompts/blob/main/IAs_de_Imagem/metodo_3w1h.md) no Glif personalizado - [Glif - model flux ultra 1.1
](https://glif.app/@marioluciofjr/glifs/cm37rxgd1000j1of1ltky92h3)

⚠️ Os arquivos do Front-end do projeo você encontra aqui [Insta-like](https://github.com/guilhermeonrails/insta-like)

## Tecnologias utilizadas

<div>
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
  <img align="center" height="60" width="80" src="https://www.svgrepo.com/show/353478/bash-icon.svg" />
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" />
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" />  
  <img align="center" height="60" width="80" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" />
</div>
          

## Links úteis

+ [Node.js](https://nodejs.org/en) - Instalação do Node.js;
+ [VisualStudio Code: instalação, teclas de atalho, plugins e integrações](https://www.alura.com.br/artigos/visualstudio-code-instalacao-teclas-de-atalho-plugins-e-integracoes) - Guia da Alura sobre o VSCode;
+ [Passo a passo para criar a API Key](https://www.notion.so/Imers-o-Dev-Back-End-Guia-de-Mergulho-31067142b5d54643a32edbb158f8e681?pvs=4#f43f33e067924f0a95fc86313b9d3189) - Guia de merguulho da Imersão Back-End com o passo a passo para solicitar a API Key no Google AI Studio;
+ [O que é Node.js?](https://youtu.be/8VSTrZY8vwI?si=2nk6yTvHnx8QbOj6) - Vídeo do canal da Alura no YouTube, onde a Juliana Amoasei, Instrutora na Escola de Programação da Alura, apresenta a vocês o Node.js, o ambiente de execução do Javascript;
+ [Entenda a diferença entre var, let e const no JavaScript](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript) - Guia da Alura sobre as variáveis no JavaScript;
+ [O que é uma API?](https://www.alura.com.br/artigos/api) - Guia da Alura sobre APIs;
+ [Estrutura de uma URL](https://www.alura.com.br/artigos/estrutura-url) - Guia da Alura sobre a estrutura e a importância de criar uma URL bem organizada;
+ [HTTP: Guia completo](https://www.alura.com.br/artigos/http) - Guia da Alura sobre o que é e como funciona o protocolo da web;
+ [Mongo Atlas](https://www.mongodb.com/products/platform/atlas-database) - Link para o Mongo Atlas, que é um serviço de banco de dados multinuvem desenvolvido pelas mesmas pessoas que desenvolvem o MongoDB;
+ [O que é JSON?](https://www.alura.com.br/artigos/o-que-e-json) - Guia da Alura sobre o que é e como utilizar um arquivo JSON;
+ [Async/await no JavaScript: o que é?](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar) - Guia da Alura sobre o que é e quando usar a programação assíncrona;
+ [Postman](https://www.postman.com/) - Faça o download do Postman, que é uma plataforma de API para construir e usar APIs;
+ [Documentação Google Cloud](https://cloud.google.com/docs?hl=pt-br) - Guia do Google sobre tudo que você precisa saber a respeito do Google Cloud;
+ [Subindo projeto para o GitHub](https://www.alura.com.br/artigos/o-que-e-git-github) - Guia da Alura sobre Git e GitHub;
+ [Escrevendo um README no seu GitHub](https://www.alura.com.br/artigos/escrever-bom-readme) - Guia da Alura sobre como fazer um ótimo READ.ME no GitHub;
+ [Como enviar sua pasta direto do VS Code para um novo repositório no GitHub](https://pt.linkedin.com/pulse/como-enviar-sua-pasta-direto-do-vs-code-para-um-novo-reposit%C3%B3rio-ml) - Tutorial de como criar um repositório do zero no GitHub através do Visual Studio Code.

## Contato
Mário Lúcio - Prazo Certo®
<div>  	
  <a href="https://www.linkedin.com/in/marioluciofjr" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
  <a href = "mailto:marioluciofjr@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://prazocerto.me/contato" target="_blank"><img src="https://img.shields.io/badge/prazocerto.me/contato-230023?style=for-the-badge&logo=wordpress&logoColor=white"></a>
  
</div>
