const { body, validationResult } = require('express-validator')

module.exports = [
    body.apply('name').notEmpty().withMessage('debe completar este campo'),
    body.apply('email').notEmpty().withMessage('debe completar este campo'),
    body.apply('color').notEmpty().withMessage('debe completar este campo'),
    body.apply('birthDate').notEmpty().withMessage('debe completar este campo'),
]