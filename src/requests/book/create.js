const { body, validationResult } = require('express-validator')
const { validator } = require('../../utils');

const rules = [
  body('name').isLength({ min: 5 }).custom(validator.string),
  body('writer').isLength({ min: 1 }),
  body('year').isNumeric().isLength({ min: 4 }).customSanitizer(val => +val),
]

const handle = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) return res.status(422).json(errors)

  next()
}

module.exports =  [
  rules,
  handle
]