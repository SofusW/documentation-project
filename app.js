
import express from 'express';
const app = express();

app.use(express.static('public'));

import {frontpagePage} from './templatingEngine/pages.js';

app.get('/', (req, res) => {

    res.send(frontpagePage);

})

app.listen(8080);

