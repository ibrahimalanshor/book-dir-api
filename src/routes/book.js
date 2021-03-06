const { Router } = require('express')
const router = Router()

const { BookController } = require('../controllers')
const { BookRequest } = require('../requests')

router.get('/', BookController.get)
router.post('/', BookRequest.create, BookController.create)
router.get('/:id', BookController.find)
router.put('/:id', BookRequest.create, BookController.update)
router.delete('/:id', BookController.delete)

module.exports = router