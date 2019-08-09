import { check } from 'express-validator/check'

export const addValidator = [
    check('name').not().isEmpty()
]