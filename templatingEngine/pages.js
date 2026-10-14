import { constructPage, readPage } from "./templatingEngine.js";

const frontpage = readPage('public/pages/frontpage/frontpage.html');

export const frontpagePage = constructPage(frontpage, {
    jsLinks: `<script src="/assets/js/escapeHTML.js" />`
});