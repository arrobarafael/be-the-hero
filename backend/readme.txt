npm install knex
npm instal sqlite3

npx knex init


Pensando nas entidades e funcionalidades da aplicação:
Entidades:
-ONG
-Caso(incident)
Funcionalidades:
-Login de ONG
-Cadastro de ONG
-Logout de ONG
-Cadastrar novos casos
-Deletar casos
-Listar casos específicos da ONG
-Listar todos os casos
-Entrar em contato com a ONG

COMANDOS DE MIGRATIONS
npx knex migrate:make create_ongs
npx knex migrate:latest
npx knex migrate:make create_incidents
npx knex (mostra todos os comandos)
npx knex migrate:rollback 