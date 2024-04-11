const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({

    product_id: {
        type: String,
        required: [true, 'El id es obligatorio.'],
        lowercase: true
    },
    product: {
        type: String,
        required: [true, 'El nombre es obligatorio.'],
        lowercase: true
    },
    category: {
        type: String,
        required: [true, 'La categoría es obligatoria.'],
        lowercase: true
    },
    quantity: {
        type: Number,
        required: [true, 'La cantidad es obligatoria.'],
        lowercase: true,
        default: 0
    },
    amount: {
        type: mongoose.Decimal128,
        required: [true, 'El importe es obligatorio.'],
        lowercase: true,
        default: 0
    },
    supplier_id: {
        type: String,
        required: [true, 'El proveedor es obligatorio.'],
        lowercase: true,
        default: 0
    }

}, { timestamps: true })

const Order = mongoose.model('order', orderSchema)

module.exports = Order