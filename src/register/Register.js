const { Router } = require('express');
const Express = require('express');
const user = require('../db/models');

const register = Express.Router();

//rota register
register.post('/register', async (req, res)=>{
    try {
        let usuario = await user.create(req.body);

        return res.send('Registro Concluido');
    } catch (error) {
        return res.send(error);
    }
})

module.exports = app => app.use(register)



