/* eslint-disable no-unused-expressions */
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { academicSemesterRouter } from './app/modules/academicSemester/academicSemester.route'
import { StatusCodes } from 'http-status-codes'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', userRouter)
app.use('/api/v1/academicSemester', academicSemesterRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)

app.use((req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    data: {},
    message: '404 not found',
  })
})

export default app
