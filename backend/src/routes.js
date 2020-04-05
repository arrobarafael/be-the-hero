const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

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
  routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2)
    })
  }), OngControlller.create)

  routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),ProfileController.index)

  routes.post('/incidents', IncidentController.create)
  routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    })
  }) ,IncidentController.index)
  routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),IncidentController.delete)


module.exports = routes;
