import type { Request, Response } from 'express'
import User from '../models/User'

export const createAccount = async (req: Request, res: Response) => {
  //!1. Forma 1
  //await User.create(req.body)
  //!2. Forma 2
  const user = new User(req.body)
  await user.save()

  res.send({ msg: 'Registro creado correctamente' })
}
