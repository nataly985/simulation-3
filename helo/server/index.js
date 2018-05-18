require('dotenv').config();
const express = require('express');
const bodyParser = require('body-Parser');
const hc = require('./controller.js');
const massive = require('massive');

const app = express();

app.use(bodyParser.json() );

// massive(process.env.CONNECTION_STRING).then((db) => {
//     app.set('db', db);
// })

// app.use(express.static(__dirname + './../build'))

// app.get('api/', hc.read);
// app.post('api/', hc.create);
// app.delete('/:id', hc.delete);


const port = process.env.PORT || 3002
app.listen( port, () => {console.log (`Server listening on port ${port}.`)});