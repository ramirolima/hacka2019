var auth = require('../../config/auth').auth;

module.exports = function(app){   
    
    var controller = app.controllers.home;

    app.get('/init', controller.index);        
    app.post('/login',controller.login);
}