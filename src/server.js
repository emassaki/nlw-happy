//impórtar dependências
const express = require("express");
const path = require("path");
const pages = require('./pages.js');

//iniciando o express (biblioteca)
const server = express();
server
  //utilizar body da req
  .use(express.urlencoded({ extended: true }))

  //utilizando os arquivos estáticos (não serão alterados durante a execução (pasta ./public))
  .use(express.static("public")) //cria todas as rotas para os arquivos estáticos
  //Criar uma rota ('/')

  //configurar template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //rotas da aplicação
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)


//ligar o servidor
server.listen(5500);
