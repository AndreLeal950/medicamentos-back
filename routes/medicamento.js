const express = require('express');
const router = express.Router();

const medicamentos = require('../services/medicamentos');

//Lista todos os medicamentos
router.get('/', async function (req, res, next) {
    try {
        res.json(await medicamentos.getMedicamentos(req.query.page));
    
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err)
    }
});

// Incluir Medicamento
router.post('/incluir', async function (req, res, next) {
    console.log(req);

    const pInfo = {
        nome,
        codigo_barras
    } = req.body;
    console.log(nome);
    try {
        res.json(await medicamentos.incluirMedicamentos(pInfo));
    } catch (error) {
        console.error(`Erro`, err.message);
        next(err)
        
    }
})

// Alterar os dados 
router.post('/update', async function (req, res, next) {
    
    
    const pInfo = {
        nome,
        codigo_barras,
        codigo
    } = req.body;
   
    try {
        res.json(await medicamentos.updateMedicamentos(pInfo));
    } catch (error) {
        console.error(`Erro`, error.message);
        next(error)

      
        
    }
    
})

// Excluir os dados
router.post('/exclui', async function (req, res, next) {
  
    const pInfo = {
       codigo
    } = req.body;
    
    try {
        res.json(await medicamentos.deleteMedicamentos(pInfo));
    } catch (error) {
        console.error(`Erro`, err.message);
        next(err)
        
    }
})


// Conultar Medicamento pelo ID 
router.post('/codigo', async function (req, res, next) {
    console.log(req);
    const pInfo = {
       codigo
    } = req.body;

    try {
        res.json(await medicamentos.consultMedicamentos(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err)
       
        
    }
})

module.exports = router;