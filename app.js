import express from 'express';
const app = express();

app.use(express.static('public'));

import {frontpagePage, basicJavaScriptPage, dataTypesPage, variablesPage, setupProjectPage, apiDesignTemplatePage, templatingPage} from './templatingEngine/pages.js';

//------------------------------------ Front Page ------------------------------------------------

app.get('/', (req, res) => {

    res.send(frontpagePage);

})

//--------------------------------- Basic Java Script Pages --------------------------------------

app.get('/basic-javascript', (req, res) => {

    res.send(basicJavaScriptPage);

})

app.get('/data-types', (req, res) => {

    res.send(dataTypesPage);

})

app.get('/variables', (req, res) => {

    res.send(variablesPage);

})

//------------------------------------ Setup Project Pages --------------------------------------

app.get('/setup-project', (req, res) => {

    res.send(setupProjectPage);

})

app.get('/api-design-template', (req, res) => {

    res.send(apiDesignTemplatePage);

})

app.get('/templating', (req, res) => {

    res.send(templatingPage);

})

//-----------------------------------------------------------------------------------------------

app.listen(8080);