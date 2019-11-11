require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')
const cb = require('./routeCallbacks');
const port = 3020;
app.use(express.static(path.join(__dirname, '../public')));

const jsonParser = bodyParser.json();

app.use(cors());

app.get('/songs/:id', cb.getSong);

app.put('/like/:songId',jsonParser, cb.likeEntry);

app.post('/playlist/:songId', jsonParser, cb.playlistEntry);

app.delete('/playlist/:listId', jsonParser, cb.playlistDelete);

app.listen(port, () => console.log(`server is listening on port ${port}!`));
