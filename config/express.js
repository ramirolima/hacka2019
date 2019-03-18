var express = require('express'); 
var bodyParser = require('body-parser');
var load = require('express-load');

var auth = require('./auth').auth;

const PORT = process.env.PORT;
// const PORT = 3000;

module.exports = function(){
    var app = express();

    app.set('port', PORT);
    app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({extend: true}));
    app.use(express.static('./public'));  
    app.use(auth.initialize()); 

    load('models',{cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}