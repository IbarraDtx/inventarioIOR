const { Router } = require("express")

const UserController = require('../controllers/userController')
const AuthController = require('../controllers/authController')

const SupplierController = require('../controllers/supplierController')

const { auth, checkUser } = require('../middleware/auth')

const router = Router()

router.get('*', checkUser)
router.get('/', UserController.login)
router.get('/register', UserController.register)
router.get('/dashboard', auth, UserController.dashboard)
router.get('/inventory', auth, UserController.inventory)
router.get('/customer', auth, UserController.customer)
router.get('/product', auth, UserController.product)
router.get('/order', auth, UserController.order)
router.get('/release', auth, UserController.release)

router.get('/profile', auth, UserController.profile)
router.post('/change-password/:id', auth, UserController.changePassword)

router.get('/logout', UserController.logout)

router.get('/composistion/get', auth, UserController.getComposition)
router.get('/order/get', auth, UserController.getOrders)

router.post('/register', AuthController.store)
router.post('/login', (req, res, next) => {
    console.log("Received login request:", req.body); 
    next(); 
}, AuthController.auth)


module.exports = router
