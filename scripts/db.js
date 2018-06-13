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
sequelize.drop()
const User = sequelize.define('user', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  type: Sequelize.STRING,
});


sequelize.sync()
  .then(() => {
    User.create({
    email: 'c.ferte@hotmail.fr',
    password: 'temp_cferte',
    type: 'admin',
    name: 'cyril',
  });
  User.create({
  email: 'admin',
  password: 'password',
  type: 'admin',
  name: 'admin',
});
User.create({
email: 'reader',
password: 'password',
type: 'reader',
name: 'reader',
})
User.create({
email: 'user',
password: 'password',
type: 'user',
name: 'user',
})
})


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
