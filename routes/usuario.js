const express = require('express');
const router = express.Router();

const usuario = require('../services/usuario');

//Lista todos os Usuários
router.get('/', async function (req, res, next) {
    try {
        res.json(await usuario.getUsuario(req.body.id));
    
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err)
    }
});


//Consulta pelo Id
router.post('/id', async function (req, res, next) {
 
    const pInfo = {
       id
    } = req.body;

    try {
        res.json(await usuario.consultUsuario(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err)
            
    }
})




// incluir Usuário
router.post('/incluir', async function (req, res, next) {

    const pInfo =  {
        nome,
        email,
        senha
    } = req.body;

    try {
        res.json(await usuario.incluirUsuario(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err);
    }
});

//data.nome, data.email, data.senha, data.id
// Alterar Registro
router.post('/update', async function (req, res, next) {
console.log(req);
    const pInfo =  {
        nome,
        email,
        senha,
        id
    } = req.body;

    try {
        res.json(await usuario.updateUsuario(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err);
    }
});

// Excluir os dados 
router.post('/exclui', async function (req, res, next) {
  
    const pInfo = {
       id
    } = req.body;
    
    try {
        res.json(await registro.deleteRegistro(pInfo));
    } catch (error) {
        console.error(`Erro`, err.message);
        next(err)
        
    }
})


module.exports = router;