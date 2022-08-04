const config = require('../config');
const db = require('./db');

//Consulta Registros
async function getRegistro( page = 0 ) {
    const rows =
        await db.query("select * from registro_precos_medicamentos order by registro_id DESC ");
    return rows;
} 

//Inclui Regisdtro
async function incluirRegistro(data) {
   
    let retorno = 1;
    const sql = "insert into registro_precos_medicamentos(medicamento_codigo, farma_id , usr_id, registro_data , registro_valor ) values (?, ?, ?, now(), ?)";
    await db.query(sql, [data.medicamento, data.farmacia, data.usuario, data.valor], function (err, rows) {
        if (err) {
            retorno = 0;
        }
        retorno = 2;
    });
    console.log(data);
    return retorno;
}

//Alterar o Registro
async function updateRegistro(data) {
    
    let retorno = 1 
      
    const sql = "UPDATE registro_precos_medicamentos SET medicamento_codigo = ?, farma_id = ?, registro_valor =? , usr_id = ? WHERE registro_id  = ?";
    await db.query(sql, [data.medicamento, data.farmacia, data.valor, data.usuario, data.id], function (err, rows) {
        if (err) {
            retorno = 0;
        }
        
    });
    return retorno;    
    
};

async function deleteRegistro(data) {
   
    let retorno = 1;
    
    const sql = "DELETE FROM registro_precos_medicamentos WHERE registro_id=?";
    await db.query(sql, [data.id], function (err, rows) {
        if (err) {
            retorno = 0;
        }
    });
    return retorno;
}

async function consultRegistro(data) {
    
    let retorno = 1;
   
    const sql = "SELECT * FROM registro_precos_medicamentos WHERE registro_id = ?";
    const rows = await db.query(sql, [data.id], function (err, rows) {
       if (err) {
            retorno = 0;
        }
       
    });
  
    retorno = rows;
    return retorno;
}



module.exports = {
    getRegistro,
    incluirRegistro,
    updateRegistro,
    deleteRegistro,
    consultRegistro
}

