const express = require('express');
const path = require('path');
const cb = require('./routeCallbacks');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/test', cb.test);

app.get('/play/:songid', cb.play);

app.listen(3020);
