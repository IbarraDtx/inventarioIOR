const mongoose = require('mongoose')
const { isEmail } = require('validator')

const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'El campo nombre es obligatorio.'],
        lowercase: true
    },
    contact: {
        type: String,
        required: [true, 'El campo contacto es obligatorio.'],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'El campo del correo es obligatorio.'],
        lowercase: true,
        validate: [isEmail, 'Introduzca una dirección de correo electrónico válida']
    },
    address: {
        type: String,
        required: [true, 'El campo Dirección es obligatorio.'],
        lowercase: true
    }

}, { timestamps: true })

const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer