const Sequelize = require('sequelize');
//conecção com banco de dados
const sequelize = new Sequelize('web-vendas','root','123456789',{
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    sequelize: sequelize,
    Sequelize : Sequelize
};


//teste de conecção
/* sequelize.authenticate().then(function () {
    console.log('conectado com sucesso')

}).catch(function(error){ 
 console.log('não foi possivel conectar'+error)

});*/
