const { Router } = require("express")

const ReleaseController = require('../controllers/releaseController')

const { auth } = require('../middleware/auth')

let router = Router()

router.post('/store', auth, ReleaseController.store)
router.get('/show/:id', auth, ReleaseController.show)
router.get('/destroy/:id', auth, ReleaseController.destroy)
router.get('/update/:id', auth, ReleaseController.update)

module.exports = router