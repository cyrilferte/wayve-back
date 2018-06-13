var db = require("./db");
var jwt = require('jsonwebtoken');
var auth =  {


    login(arg) {
      // console.log(arg)
       return db.user.find({ where: { email: arg.email, password: arg.password } })
       .then(user => {
        //  console.log('user:', user)
         if (user){
           console.log('true')
           var token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: 'foobar'
          }, 'secret');
             return user;
         } else {
           console.log('false')
           return false;
         }
       })

    },
}


 module.exports = auth;
