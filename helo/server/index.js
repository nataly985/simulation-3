require('dotenv').config();
const express = require('express');
const bodyParser = require('body-Parser');
const hc = require('./controller.js');
const session = require('express-session');
// const Auth0Strategy = require('passport- auth0');
const massive = require('massive');

const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING
} = process.env;

const app = express();

app.use(bodyParser.json() );

massive(CONNECTION_STRING).then((db) => {
    console.log(db);
    app.set('db', db);
})

app.use(express.static(__dirname + './../build'))

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
// console.log(session);
app.get('api/user', hc.read);
app.get('api/post', hc.create)
app.post('api/', hc.create);
app.delete('api/post/:id', hc.delete);


const port = process.env.PORT || 3002
app.listen( port, () => {console.log (`Server listening on port ${port}.`)});