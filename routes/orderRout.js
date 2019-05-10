const express = require('express')
const orderController = require('../controllers/orderController')

const router = express.Router()

router.post('/', orderController.create)
router.get('/', orderController.getAll)

module.exports = router