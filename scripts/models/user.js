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
