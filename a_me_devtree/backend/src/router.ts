import { Router } from 'express'

const router = Router()

/** Autentificación y Registro **/
router.post('/auth/register', (req, res) => {
  console.log('Desde Register')
  console.log(req.body)
})

export default router
