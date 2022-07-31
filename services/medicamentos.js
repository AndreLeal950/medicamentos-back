const config = require('../config');
const db = require('./db');


async function getMedicamentos( page = 0 ) {
    const rows =
        await db.query("SELECT medicamento_codigo , medicamento_nome , medicamento_codigo_barras from medicamento ORDER BY medicamento_codigo  DESC ");
    return rows;
} 

async function incluirMedicamentos(data) {
    let retorno = 1;
    console.log(data);
    const sql = "INSERT INTO medicamento (medicamento_nome, medicamento_codigo_barras) VALUES (?, ?)";
    await db.query(sql, [data.nome, data.codigo_barras], function (err, rows) {
        if (err) {
            retorno = 0;
        }
         
    });
    return retorno;
}
async function updateMedicamentos(data) {
    
    let retorno = 1 `-Medicamento id:${data.codigo} nome:${data.nome} código de barra:${data.codigo_barras}, foi alterado com sucesso!`
   

    const sql = "UPDATE medicamento  SET medicamento_nome=?, medicamento_codigo_barras=? where  medicamento_codigo=?";
    await db.query(sql, [data.nome, data.codigo_barras, data.codigo], function (err, rows) {
        if (err) {
            retorno = 0;
        }
        
    });
    return retorno;
    
    
};

async function deleteMedicamentos(data) {
   
   let retorno = 1;
    
    const sql = "DELETE FROM medicamento WHERE medicamento_codigo=?";
    await db.query(sql, [data.id], function (err, rows) {
        if (err) {
            retorno = 0;
        }
    });
    return retorno;
}


module.exports = {
    getMedicamentos,
    incluirMedicamentos,
    updateMedicamentos,
    deleteMedicamentos

}
