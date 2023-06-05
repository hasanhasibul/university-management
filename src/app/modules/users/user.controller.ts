import { Request, Response } from 'express'
import { createUser } from './user.servises'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const response = await createUser(user)
    res.status(201).json({
      success: true,
      data: response,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'user created fail',
      error: error,
    })
  }
}
