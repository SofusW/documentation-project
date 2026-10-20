//-------------------------------------- Import ----------------------------------------------

import { constructPage, readPage } from "./templatingEngine.js";

//------------------------------------ Front Page --------------------------------------------

const frontpage = readPage('public/pages/frontpage/frontpage.html');

export const frontpagePage = constructPage(frontpage, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`
});

//---------------------------------- Basic Java Script Pages ------------------------------------

const basicJavaScript = readPage('public/pages/basic-javascript/basic-javascript.html');
const dataTypes = readPage('public/pages/data-types/data-types.html');
const variables = readPage('public/pages/variables/variables.html');
const loops = readPage('public/pages/loops/loops.html');
const time = readPage('public/pages/time/time.html');

export const basicJavaScriptPage = constructPage(basicJavaScript, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Basic Java Script"
});

export const dataTypesPage = constructPage(dataTypes, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Data Types"
});

export const variablesPage = constructPage(variables, {
    cssLinks: `<link rel="stylesheet" href="/pages/variables/variables.css" />`,
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Variables"
});

export const loopsPage = constructPage(loops, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Loops"
});

export const timePage = constructPage(time, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Time"
});

//-------------------------------------- Setup Project Pages -----------------------------------

const setupProject = readPage('public/pages/setup-project/setup-project.html');
const esModuleVsCommonJs = readPage('public/pages/es-module-vs-common-js/es-module-vs-common-js.html');
const staticFiles = readPage('public/pages/static-files/static-files.html');
const apiDesignTemplate = readPage('public/pages/api-design-template/api-design-template.html');
const templating = readPage('public/pages/templating/templating.html');
const nodemon = readPage('public/pages/nodemon/nodemon.html');

export const setupProjectPage = constructPage(setupProject, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Setup Project"
});

export const esModuleVsCommonJsPage = constructPage(esModuleVsCommonJs, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Setup Project"
});

export const staticFilesPage = constructPage(staticFiles, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Setup Project"
});

export const apiDesignTemplatePage = constructPage(apiDesignTemplate, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "API Design Template"
});

export const templatingPage = constructPage(templating, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Templating"
});

//-------------------------------- Fetching ------------------------------------------------

const fetching = readPage('public/pages/fetching/fetching.html')

export const fetchingPage = constructPage(fetching, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Templating"
});

//------------------------------- Nodemon ---------------------------------------------------

export const nodemonPage = constructPage(nodemon, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Development in Node.js"
});