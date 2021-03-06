const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {type: String, unique: true, required: [true, 'El nombre del curso es requerido']},
    semester: {type: Number, required: [true, 'El semestre es requerido']},
    credit: {type: Number, required: [true, 'El número de créditos es requerido']},
    program: {type: Schema.Types.ObjectId, ref: 'programa', required: true}
});

module.exports = mongoose.model('curso', courseSchema);