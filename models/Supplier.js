const mongoose = require('mongoose')


const supplierSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'El campo Nombre es obligatorio.'],
        lowercase: true
    },
    contact: {
        type: String,
        required: [true, 'El campo Contacto es obligatorio.'],
        lowercase: true,
    },
    address: {
        type: String,
        required: [true, 'El campo Dirección es obligatorio.'],
        lowercase: true,
    }
}, { timestamps: true })

const Supplier = mongoose.model('supplier', supplierSchema)

module.exports = Supplier