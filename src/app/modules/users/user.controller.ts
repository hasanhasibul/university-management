import { NextFunction, Request, Response } from 'express'
import { createUser } from './user.servises'

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body
    const response = await createUser(reqBody)
    res.status(201).json({
      success: true,
      data: response,
    })
  } catch (error) {
    next(error)
  }
}
