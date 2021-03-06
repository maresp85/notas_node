const express = require('express');
const Program = require('../models/program');

const app = express();

app.use(express.json());

app.get('/programas', (req, res) => {
    
});

app.post('/programas', (req, res) => {
    let body = req.body; 

    let program = new Program({
        name: body.name,
        register: body.register,
        campus: body.campus,
    });

    program.save((error, programDB) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                error
            });
        }

        res.json({
            ok: true,
            resp: programDB
        });
    });

});

app.put('/programas', (req, res) => {

});

app.delete('/programas', (req, res) => {

});

module.exports = app;