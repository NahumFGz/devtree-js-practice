import { Router } from 'express'
import User from './models/User'

const router = Router()

/** Autentificación y Registro **/
router.post('/auth/register', async (req, res) => {
  //!1. Forma 1
  //await User.create(req.body)
  //!2. Forma 2
  const user = new User(req.body)
  await user.save()

  res.send({ msg: 'Registro creado correctamente' })
})

export default router
