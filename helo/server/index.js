require('doten').config();
const express = require('express');
const bodyParser = require('body-Parser');

const app = express();

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})