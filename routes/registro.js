const express = require('express');
const router = express.Router();

const registro = require('../services/registro');

//Lista todos os Usuários
router.get('/', async function (req, res, next) {
    try {
        res.json(await registro.getRegistro(req.body.id));
    
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err)
    }
});



// incluir Registro
router.post('/incluir', async function (req, res, next) {

    const pInfo =  {
        medicamento,
        farmacia,
        usuario,
        valor
    } = req.body;

    try {
        res.json(await registro.incluirRegistro(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err);
    }
});


// Alterar Registro
router.post('/update', async function (req, res, next) {
console.log(req);
    const pInfo =  {
        medicamento,
        farmacia,
        valor,
        usuario,
        id
    } = req.body;

    try {
        res.json(await registro.updateRegistro(pInfo));
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

//Consulta pelo Id
router.post('/id', async function (req, res, next) {
 
    const pInfo = {
       id
    } = req.body;

    try {
        res.json(await registro.consultRegistro(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err)
            
    }
})


module.exports = router;