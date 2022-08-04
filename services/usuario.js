const config = require('../config');
const db = require('./db');

//Consulta Registros
async function getUsuario( page = 0 ) {
    const rows =
        await db.query("select * from usuarios");
    return rows;
} 

//Consulta pelo Id
async function consultUsuario(data) {
    
    let retorno = 1;
   
    const sql = "SELECT * FROM usuarios WHERE usr_id = ?";
    const rows = await db.query(sql, [data.id], function (err, rows) {
       if (err) {
            retorno = 0;
        }
       
    });
  
    retorno = rows;
    return retorno;
}


//Inclui Registro
async function incluirUsuario(data) {
   
    let retorno = 1;
    const sql = "insert into usuarios (usr_nome, usr_email , usr_senha) values (?, ?, ?)";
    const rows = data.nome; data.email; data.senha
    await db.query(sql, rows, function (err, rows) {
        if (err) {
            retorno = 0;
        }
        retorno = 2;
    });
    console.log(data);
    retorno = rows
    return retorno;
}

//Alterar o Registro
async function updateUsuario(data) {
    
    let retorno = 1 
      
    const sql = "UPDATE usuarios SET usr_nome = ?, usr_email = ?, usr_senha =? WHERE usr_id  = ?";
    const rows = [data.nome, data.email, data.senha, data.id] 
        await db.query(sql, rows, function (err, rows) {
        if (err) {
            retorno = 0;
        }
    });
        retorno = rows
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



module.exports = {
    getUsuario,
    consultUsuario,
    incluirUsuario,
    updateUsuario
    
    }

