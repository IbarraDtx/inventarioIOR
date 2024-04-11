const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({

    category: {
        type: String,
        required: [true, 'El campo Categoría es obligatorio.'],
        lowercase: true
    }

}, { timestamps: true })

const Category = mongoose.model('category', categorySchema)

module.exports = Category