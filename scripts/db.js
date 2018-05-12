const Sequelize = require('sequelize');
var db = {};

const sequelize = new Sequelize('wayve_dev', 'cferte', 'temp_cferte', {
  host: 'localhost',
  port:32771,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

const User = sequelize.define('user', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});


sequelize.sync()
  .then(() => User.create({
    email: 'c.ferte@hotmail.fr',
    password: 'temp_cferte'
  }))
  .then(cyril => {
    console.log(cyril.toJSON());
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  db.user = User;

  db.sequelize = sequelize;

  module.exports = db;
