var app = require('./config/express')();
require('./config/database')('mongodb+srv://myuser:<mypass>@cluster0-xtv11.mongodb.net/test?retryWrites=true');

app.listen(app.get('port'), function(){
     console.log(`Express on port ${app.get('port')}`);
}); 