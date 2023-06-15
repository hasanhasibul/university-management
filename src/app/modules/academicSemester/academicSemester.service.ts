import { StatusCodes } from 'http-status-codes'
import ApiError from '../../../errors/ApiError'
import {
  SemestersearchFilelds,
  academicSemesterCode,
} from './academicSemester.constant'
import { academicSemesterInterface } from './academicSemester.interface'
import academicSemesterModel from './academicSemester.modal'
import { paginationHelper, searchAndFilterHelper } from '../../../helpers'
import { QueryOptions } from 'mongoose'

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

export const getAllAcademicSemisterServices = async (params: QueryOptions) => {
  const { limit, skip, sort } = paginationHelper(params)
  const { searchCondision } = searchAndFilterHelper(
    params,
    SemestersearchFilelds
  )
  const allSemester = await academicSemesterModel
    .find(searchCondision)
    .skip(skip)
    .limit(limit)
    .sort(sort)
  if (!allSemester) {
    throw Error('Fail to get semester')
  }

  return allSemester
}
