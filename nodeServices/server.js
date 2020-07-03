// var express = require('express');
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
// fs = require('fs');
// app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// const routes = require('./router/router');
// const config = require('./config.json');
// app.use('/app/api/buildstrategy/', routes);

// app.listen(config.port);
// console.log('Express listening on port --> ', config.port);


// ----------------------------

var express = require('express');
var bodyParser = require('body-parser');
fs = require('fs');
app = express();

app.use(express.json())

const routes = require('./router/router');
const config = require('./config.json');

app.post('/test',(req,res)=>{
    console.log('req.body--',req.body)
})
app.use('/app/api/buildstrategy/', routes);
app.listen(config.port);
console.log('Express listening on port --> ', config.port);

