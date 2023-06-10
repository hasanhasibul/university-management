import { StatusCodes } from 'http-status-codes'
import ApiError from '../../../errors/ApiError'
import { academicSemesterCode } from './academicSemester.constant'
import { academicSemesterInterface } from './academicSemester.interface'
import academicSemesterModel from './academicSemester.modal'

export const createAcademicSemesterService = async (
  reqbody: academicSemesterInterface
) => {
  if (academicSemesterCode[reqbody.title] !== reqbody?.code) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Academice code is not valid ')
  }
  const academicSemester = await academicSemesterModel.create(reqbody)
  if (!academicSemester) {
    throw Error('fail to create academic semester')
  }
  return academicSemester
}
