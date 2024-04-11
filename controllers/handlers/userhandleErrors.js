const userhandleErrors = (err) => {

    let errors = { name: '', email: '', password: '' }

    if (err.message === 'Correo incorrecto') {
        errors.email = 'Correo incorrecto'
    }

    if (err.message === 'Contraseña incorrecta') {
        errors.password = 'Contraseña incorrecta'
    }

    if (err.code === 11000) {
        errors.email = 'El correo electrónico ya está ocupado'
        return errors
    }
   
    if (err.message.includes('validación de usuario fallida')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}

module.exports = userhandleErrors