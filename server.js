var http = require('http');
var express = require('express');
var cors = require('cors')
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

var db = require("./scripts/db");
var auth = require("./scripts/auth");
// const router = express.Router();


let app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');

var schema = buildSchema(`
    type Query {
        message: String
        cyril: String
        auth(email: String, password: String): String
    },
`);



// Root resolver
var root = {
    message: () => 'Hello World!',
    auth: auth.login,
};

app.server = http.createServer(app);


app.use('/graphql' , cors(), express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4001, () => console.log('Express GraphQL Server Now Running On localhost:4001/graphql'));
