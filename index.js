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


app.get('/', (req, res) => {
    res.json({ message: "api esta no ar" });
});

app.get('/coders', (req, res) => {
    res.json({ message: "coders" });
});



app.use('/medicamentos', medicamentoRouter);
app.use('/farmacias', farmaciaRouter);

app.listen(port, () => {
    console.log('Servidor está rodando na porta ' + port);
})