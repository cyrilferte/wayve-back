var db = require("./db");
var auth =  {


    login(arg) {
      // console.log(arg)
       return db.user.find({ where: { email: arg.email, password: arg.password } })
       .then(user => {
        //  console.log('user:', user)
         if (user){
           console.log('true')
             return true;
         } else {
           console.log('false')
           return false;
         }
       })

    },
}


 module.exports = auth;
