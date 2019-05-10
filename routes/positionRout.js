const express = require('express')
const positionControler = require('../controllers/positionControler')

const router = express.Router()

router.post('/', positionControler.create)
router.get('/:categoryId', positionControler.getByCategoryId)
router.delete('/:id', positionControler.remove)
router.patch('/:id', positionControler.update)

module.exports = router