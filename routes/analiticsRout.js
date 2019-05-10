const express = require('express')
const analiticsController = require('../controllers/analiticsController')

const router = express.Router()

router.get('/analitycs', analiticsController.analitycs)
router.get('/overview', analiticsController.overview)

module.exports = router