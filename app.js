import express from 'express';
const app = express();

app.use(express.static('public'));

import {frontpagePage, basicJavaScriptPage, dataTypesPage, variablesPage, loopsPage, timePage, setupProjectPage, esModuleVsCommonJsPage, staticFilesPage, apiDesignTemplatePage, templatingPage, nodemonPage, fetchingPage} from './templatingEngine/pages.js';
import {} from './templatingEngine/pages.js';

//------------------------------------ Front Page ------------------------------------------------

app.get('/', (req, res) => {

    res.send(frontpagePage);

});

//--------------------------------- Basic Java Script Pages --------------------------------------

app.get('/basic-javascript', (req, res) => {

    res.send(basicJavaScriptPage);

});

app.get('/data-types', (req, res) => {

    res.send(dataTypesPage);

});

app.get('/variables', (req, res) => {

    res.send(variablesPage);

});

app.get('/loops', (req, res) => {

    res.send(loopsPage);

});

app.get('/time', (req, res) => {

    res.send(timePage);

});

//------------------------------------ Setup Project Pages --------------------------------------

app.get('/setup-project', (req, res) => {

    res.send(setupProjectPage);

});

app.get('/es-module-vs-common-js', (req, res) => {

    res.send(esModuleVsCommonJsPage);

});

app.get('/static-files', (req, res) => {

    res.send(staticFilesPage);

})

app.get('/api-design-template', (req, res) => {

    res.send(apiDesignTemplatePage);

});

app.get('/templating', (req, res) => {

    res.send(templatingPage);

});

app.get('/nodemon', (req, res) => {

    res.send(nodemonPage);

});

//---------------------------------------- fetching ----------------------------------------------

app.get('/fetching', (req, res) => {

    res.send(fetchingPage);

});

app.listen(8080);