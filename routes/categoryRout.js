const express = require('express')
const categotyRouth = require('../controllers/categotyRouth')

const router = express.Router()

router.post('/', categotyRouth.create)
router.get('/', categotyRouth.getAll)
router.get('/:id', categotyRouth.getById)
router.delete('/:id', categotyRouth.remove)
router.patch('/:id', categotyRouth.update)

module.exports = router