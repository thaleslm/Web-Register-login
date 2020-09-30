const Express = require('express');
const bodyParser = require('body-parser');

const user = require('./db/models');

const app = Express();

// converção bdy -> json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//register
require('./register/Register')(app)
// login
require('./login/Login')(app)



app.listen(3003);
