const { Router } = require("express")

const ProductController = require('../controllers/productController')

const { auth } = require('../middleware/auth')

let router = Router()

router.get('/create', auth, ProductController.create)
router.get('/edit/:id', auth, ProductController.edit)
router.post('/store', auth, ProductController.store)
router.post('/update/:id', auth, ProductController.update)
router.get('/destroy/:id', auth, ProductController.destroy)

module.exports = router