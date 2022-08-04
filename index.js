const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const medicamentoRouter = require('./routes/medicamento');
const farmaciaRouter = require('./routes/farmacia');
const registroRouter = require('./routes/registro');
const usuarioRouter = require('./routes/usuario');


app.get('/', (req, res) => {
    res.json({ message: "api esta no ar" });
});

app.get('/coders', (req, res) => {
    res.json({ message: "coders" });
});



app.use('/medicamentos', medicamentoRouter);
app.use('/farmacias', farmaciaRouter);
app.use('/registros', registroRouter);
app.use('/usuarios', usuarioRouter);

app.listen(port, () => {
    console.log('Servidor está rodando na porta ' + port);
})