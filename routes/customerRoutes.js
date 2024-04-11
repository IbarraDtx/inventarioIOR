const { Router } = require("express")

const CustomerController = require('../controllers/customerController')

const { auth } = require('../middleware/auth')

let router = Router()

router.get('/create', auth, CustomerController.create)
router.get('/edit/:id', auth, CustomerController.edit)
router.post('/store', auth, CustomerController.store)
router.post('/update/:id', auth, CustomerController.update)
router.get('/destroy/:id', auth, CustomerController.destroy)

module.exports = router