const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use(require('./routes/routes'));

mongoose.connect('mongodb://localhost/notasdb', (err, res) => {
    if (err) throw err;
    console.log('Conexión a la base de datos');
});

app.listen(3002, () => {
    console.log('Server UP!')
});