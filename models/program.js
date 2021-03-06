const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programSchema = new Schema({
    name: {type: String, required: [true, 'El nombre del programa es requerido']},
    register: {type: String, required: [true, 'El registro calificado es requerido']},
    campus: {type: String, required: [true, 'La sede es requerida']},
});

module.exports = mongoose.model('programa', programSchema);