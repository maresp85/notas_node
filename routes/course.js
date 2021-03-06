const express = require('express');
const Course = require('../models/course');

const app = express();

app.use(express.json());

app.get('/cursos', (req, res) => {
    Course.find({})
        .populate('program')
        .exec((err, cursos) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }

        res.json({
            cursos
        });
    });
});

app.get('/cursos/:_id', (req, res) => {
    let _id = req.params._id

    Course.find({_id: _id})
        .populate('program')
        .exec((err, cursos) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }

        res.json({
            cursos
        });
    });
});

app.get('/cursos/programa/:program_id', (req, res) => {
    let program_id = req.params.program_id

    Course.find({program: program_id})
        .populate('program')
        .exec((err, cursos) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }

        res.json({
            cursos
        });
    });
});

app.post('/cursos', (req, res) => {
    let body = req.body; 

    let course = new Course({
        name: body.name,
        semester: body.semester,
        credit: body.credit,
        program: body.program
    });

    course.save((error, courseDB) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                error
            });
        }

        res.json({
            ok: true,
            resp: courseDB
        });
    });
});

app.put('/cursos/:_id', (req, res) => {
    let _id = req.params._id
    let body = req.body

    Course.findByIdAndUpdate(_id, body, {new: true}, (error, courseDB) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                error
            });
        }

        res.json({
            ok: true,
            resp: courseDB
        });
    });
    
});

app.delete('/cursos', (req, res) => {

});

module.exports = app;
