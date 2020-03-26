const express = require('express')
const OngControlller = require('./controllers/OngController')
const IncidentController = require('./controllers/IncindentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();


// Rota/Recurso

/**
 * GET
 * query params: filtros paginação
 * route params: utilizado para identificar únicos recursos
 * request body
 */

 /**
  * SQL: Mysql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * Usado: SQLite (ele já é um arquivo dentro do projeto node então não precisa instalar ele)
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   * Usado: Query Builder knex.js
   */
  routes.post('/sessions', SessionController.create)

  routes.get('/ongs', OngControlller.index)
  routes.post('/ongs', OngControlller.create)

  routes.get('/profile', ProfileController.index)

  routes.post('/incidents', IncidentController.create)
  routes.get('/incidents', IncidentController.index)
  routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes;
