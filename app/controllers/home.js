var login = require('../../config/auth').login;

module.exports = function(app){
    var Curso = app.models.curso;

    var controller = {
        index: function(req,res){
            res.send({
                teste:1
            });
            
        },        
        login: function(req, res){
            var name = req.body.name,
                password = req.body.password;

            login(name,password, function(result){
                if(result)
                    res.json(result);
                else
                    res.status('401').json({message:'Erro de autenticação'});
            });
        }
    }

    return controller;
}