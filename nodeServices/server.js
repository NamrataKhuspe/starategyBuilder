var express = require('express');
var bodyParser = require('body-parser');
fs = require('fs');
app = express();
const routes = require('./router/router');
const config = require('./config.json');

app.use('/app/api/buildstrategy/', routes);
app.listen(config.port);
console.log('Express listening on port --> ', config.port);
