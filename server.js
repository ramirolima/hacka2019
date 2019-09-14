var app = require('./config/express')();

require('./config/database')('mongodb://localhost:27017/hack4');

app.listen(app.get('port'), function(){
     console.log(`Express on port ${app.get('port')}`);
}); 