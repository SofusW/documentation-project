
const express = require('express');
const app = express();

app.use(express.json());

const pagePath = __dirname + '/pages'

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')

})