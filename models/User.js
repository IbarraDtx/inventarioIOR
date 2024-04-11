const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bycrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'El campo Nombre es obligatorio.'],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'El campo Correo es obligatorio.'],
        lowercase: true,
        unique: true,
        validate: [isEmail, 'Por favor ingresa un correo electronico valido']
    },
    password: {
        type: String,
        required: [true, 'El campo Contraseña es obligatorio.'],
        minlength: [6, 'La longitud mínima de la contraseña es de 6 caracteres.']
    }
})

// fire a function to hash the password using bycrypt
userSchema.pre('save', async function (next) {
    const salt = await bycrypt.genSalt()
    this.password = await bycrypt.hash(this.password, salt)
    next()
})

userSchema.statics.login = async function (email, password) {

    const user = await this.findOne({ email })

    if (user) {

        const auth = await bycrypt.compare(password, user.password)

        if (auth) {
            return user
        }
        throw Error('Contraseña incorrecta')
    }
    throw Error('Correo incorrecto')
}


const User = mongoose.model('user', userSchema)

module.exports = User