import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount } from './handlers'

const router = Router()

/** Autentificación y Registro **/
router.post(
  '/auth/register',
  body('handle').notEmpty().withMessage('El handle no puede ir vacío'),
  body('name').notEmpty().withMessage('El nombre no puede ir vacío'),
  body('email').isEmail().withMessage('E-mail no válido'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('El password es muy corto, mínimo 8 caracteres'),
  createAccount
)

export default router
