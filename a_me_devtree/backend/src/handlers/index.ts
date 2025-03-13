import type { Request, Response } from 'express'
import User from '../models/User'

export const createAccount = async (req: Request, res: Response) => {
  const { email } = req.body
  const userExists = await User.findOne({ email })
  if (userExists) {
    const error = new Error('El usuario ya está registrado')
    return res.status(409).json({ error: error.message })
  }
  //!1. Forma 1
  //await User.create(req.body)
  //!2. Forma 2
  const user = new User(req.body)
  await user.save()

  res.status(201).send({ msg: 'Registro creado correctamente' })
}
