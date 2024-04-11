const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'El campo Nombre del producto es obligatorio.'],
        lowercase: true
    },
    supplier: {
        type: String,
        required: [true, 'El campo Proveedor es obligatorio.'],
        lowercase: true
    },
    category: {
        type: String,
        required: [true, 'El campo Categoría es obligatorio.'],
        lowercase: true
    },
    stock: {
        type: Number,
        required: [true, 'Campo obligatorio.'],
        lowercase: true,
        default: 0
    },
    acquisition_price: {
        type: mongoose.Decimal128,
        required: [true, 'El campo Precio de adquisición es obligatorio.'],
        lowercase: true,
        default: 0
    },
    retail_price: {
        type: mongoose.Decimal128,
        required: [true, 'El campo Precio de venta al público es obligatorio.'],
        lowercase: true,
        default: 0
    }

}, { timestamps: true })

const Product = mongoose.model('product', productSchema)

module.exports = Product