const config = require('../config');
const db = require('./db');


async function getFarmacia( page = 0 ) {
    const rows =
     await db.query("select * from farmacia order by farma_id DESC ");
     return rows;
} 

async function incluirFarmacia(data) {
    
    let retorno = 1;
    
    const sql = "insert into farmacia (farma_nome, farma_endereco, farma_localizacao) values (?, ?, ?)";
    await db.query(sql, [data.nome, data.endereco, data.localizacao], function (err, rows) {
        if (err) {
            retorno = 0;
        }
    });
    return retorno;
}

async function updateFarmacia(data) {
    
    let retorno = 1;
    
    const sql = "UPDATE farmacia  SET farma_nome=?, farma_endereco=?, farma_localizacao=? where  farma_id=?";
    await db.query(sql, [data.nome, data.endereco, data.localizacao, data.id], function (err, rows) {
        if (err) {
            retorno = 0;
        }
    });
    return retorno;
}

async function deleteFarmacia(data) {
   
    let retorno = 1;
    
    const sql = "DELETE FROM farmacia WHERE farma_id=?";
    await db.query(sql, [data.id], function (err, rows) {
        if (err) {
            retorno = 0;
        }
    });
    return retorno;
}

async function consultFarmacia(data) {
    
    let retorno = 1;
   
    const sql = "SELECT * FROM farmacia WHERE farma_id = ?";
    const rows = await db.query(sql, [data.id], function (err, rows) {
       if (err) {
            retorno = 0;
        }
       
    });
  
    retorno = rows;
    return retorno;
}


module.exports = {
    getFarmacia,
    incluirFarmacia,
    updateFarmacia,
    deleteFarmacia,
    consultFarmacia
    

}
