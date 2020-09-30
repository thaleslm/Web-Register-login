const { response } = require('express')
const Express = require('express')
const login = Express.Router()

const user = require('../db/models')


//rota de autenticação de login
login.post('/login', async (req, res)=>{
    
   const usuario = await user.findOne({
        where:{
            username : req.body.username,
            password : req.body.password
        }})
    try {
        if(usuario.username != null && usuario.password != null){
           return res.send('acesso permitido')}
        
        
    } catch (error) {
        res.status(400).send(`${error}`)
        
    } })
    
            

module.exports = app => app.use(login)


