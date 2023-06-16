import { RequestHandler } from 'express'
import {
  createAcademicSemesterService,
  getAcademicSemisterDetailsService,
  getAllAcademicSemisterServices,
  updateAcademicSemisterService,
} from './academicSemester.service'
import { StatusCodes } from 'http-status-codes'

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

const getAllAcademicSemister: RequestHandler = async (req, res, next) => {
  try {
    const response = await getAllAcademicSemisterServices(req?.query)
    res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      message: 'Academice semester fetch success',
    })
  } catch (error) {
    next(error)
  }
}

const getAcademicSemisterDetails: RequestHandler = async (req, res, next) => {
  try {
    const response = await getAcademicSemisterDetailsService(req?.params)
    res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      message: 'Academice details fetch success',
    })
  } catch (error) {
    next(error)
  }
}
const updateAcademicSemister: RequestHandler = async (req, res, next) => {
  try {
    const response = await updateAcademicSemisterService(req?.params, req?.body)
    res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      message: 'Academice semester update  success',
    })
  } catch (error) {
    next(error)
  }
}
export const academicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemister,
  getAcademicSemisterDetails,
  updateAcademicSemister,
}
