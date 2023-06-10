import { RequestHandler } from 'express'
import { createAcademicSemesterService } from './academicSemester.service'

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const reqbody = req?.body
    const response = await createAcademicSemesterService(reqbody)
    res.status(201).json({
      success: true,
      data: response,
      message: 'Academice semester created success',
    })
  } catch (error) {
    next(error)
  }
}

export const academicSemesterController = {
  createAcademicSemester,
}
