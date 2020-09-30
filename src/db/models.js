const Sequelize  = require('./index');

const db = require('./index');
/* model de usuario */
const user = db.sequelize.define('usuarios', {
    name : {
        type: db.Sequelize.STRING,
        require: db.Sequelize.TRUE
    },
    email:{
        type: db.Sequelize.STRING,
        unique: db.Sequelize.TRUE,
        require: db.Sequelize.TRUE
    },
    username:{
        type: db.Sequelize.STRING,
        unique: db.Sequelize.TRUE,
        require: db.Sequelize.TRUE
    },
    password:{
        type:  db.Sequelize.STRING,
        require: db.Sequelize.TRUE,
        
    }
});

module.exports = user;

//para criar o model
 /*user.sync({force: true})  */