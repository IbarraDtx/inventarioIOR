const mongoose = require('mongoose')


const releaseSchema = new mongoose.Schema({

    customer_name: {
        type: String,
        required: [true, 'El campo Nombre del cliente es obligatorio.'],
        lowercase: true
    },
    items: {
        type: Array,
        required: [true, 'Campo obligatorio.'],
        lowercase: true
    },
    no_of_items: {
        type: Number,
        required: [true, 'El campo de nombre No_de_artículos es obligatorio.'],
        lowercase: true
    },
    total_amount: {
        type: mongoose.Decimal128,
        required: [true, 'El campo Nombre del importe es obligatorio.'],
        lowercase: true
    },
    status: {
        type: Number,
        required: [true, 'El campo Estado es obligatorio.'],
        lowercase: true
    },
    releasedAt: {
        type: mongoose.Mixed,
        default: null
    }
}, { timestamps: true })

const Release = mongoose.model('release', releaseSchema)

module.exports = Release