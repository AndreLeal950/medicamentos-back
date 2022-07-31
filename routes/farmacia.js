const express = require('express');
const router = express.Router();

const farmacia = require('../services/farmacia');

//Lista todas as farmacias
router.get('/', async function (req, res, next) {
    try {
        res.json(await farmacia.getFarmacia(req.body.id));
    
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err)
    }
});

// Incluir Farmacia
router.post('/incluir', async function (req, res, next) {
    console.log(req);
    
    const pInfo = {
        nome,
        endereco,
        localizacao
    } = req.body;
    console.log(nome);
    try {
        res.json(await farmacia.incluirFarmacia(pInfo));
    } catch (error) {
        console.error(`Erro`, err.message);
        next(err)
        
    }
})
// Atualiza os dados 
router.post('/update', async function (req, res, next) {
    console.log(req);

    const pInfo = {
        nome,
        endereco,
        localizacao,
        id
    } = req.body;
    
    try {
        res.json(await farmacia.updateFarmacia(pInfo));
    } catch (error) {
        console.error(`Erro`, err.message);
        next(err)
        
    }
})

// Excluir os dados 
router.post('/exclui', async function (req, res, next) {
  
    const pInfo = {
       id
    } = req.body;
    
    try {
        res.json(await farmacia.deleteFarmacia(pInfo));
    } catch (error) {
        console.error(`Erro`, err.message);
        next(err)
        
    }
})



module.exports = router;