const { Router } = require("express")

const CategoryController = require('../controllers/categoryController')

const { auth } = require('../middleware/auth')

let router = Router()

router.get('/create', auth, CategoryController.create)
router.post('/store', auth, CategoryController.store)
router.get('/destroy/:id', auth, CategoryController.destroy)

module.exports = router