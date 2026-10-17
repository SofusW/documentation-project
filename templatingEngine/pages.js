//-------------------------------------- Import ----------------------------------------------

import { constructPage, readPage } from "./templatingEngine.js";

//------------------------------------ Front Page --------------------------------------------

const frontpage = readPage('public/pages/frontpage/frontpage.html');

export const frontpagePage = constructPage(frontpage, {
    cssLinks: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css" />`,
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`
});

//---------------------------------- Basic Java Script Pages ------------------------------------

const basicJavaScript = readPage('public/pages/basic-javascript/basic-javascript.html');
const dataTypes = readPage('public/pages/basic-javascript/data-types/data-types.html');
const variables = readPage('public/pages/basic-javascript/variables/variables.html');

export const basicJavaScriptPage = constructPage(basicJavaScript, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Basic Java Script"
});

export const dataTypesPage = constructPage(dataTypes, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Data Types"
});

export const variablesPage = constructPage(variables, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`,
    tabTitle: "Variables"
});

//-------------------------------------- Setup Project Pages -----------------------------------

const setupProject = readPage('public/pages/setup-project/setup-project.html');
const apiDesignTemplate = readPage('public/pages/setup-project/api-design-template/api-design-template.html');
const templating = readPage('public/pages/setup-project/templating/templating.html');

export const setupProjectPage = constructPage(setupProject, {
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