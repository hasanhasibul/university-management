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
  const { searchConditions } = searchAndFilterHelper(
    params,
    SemestersearchFilelds
  )
  let findBody
  if (Object.keys(searchConditions).length > 0) {
    findBody = { $and: searchConditions }
  } else {
    findBody = {}
  }
  const allSemester = await academicSemesterModel
    .find(findBody)
    .skip(skip)
    .limit(limit)
    .sort(sort)
  if (!allSemester) {
    throw Error('Fail to get semester')
  }

  return allSemester
}

export const getAcademicSemisterDetailsService = async (
  params: QueryOptions
) => {
  const id = params?.id
  const response = await academicSemesterModel.findById(id)
  if (!response) {
    throw Error('Fail to get details')
  }
  return response
}

export const updateAcademicSemisterService = async (
  params: QueryOptions,
  reqbody: academicSemesterInterface
) => {
  const id = params?.id
  if (academicSemesterCode[reqbody.title] !== reqbody?.code) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Academice code is not valid ')
  }
  const academicSemester = await academicSemesterModel.findByIdAndUpdate(
    { _id: id },
    reqbody,
    { new: true }
  )

  if (!academicSemester) {
    throw Error('fail to create academic semester')
  }
  return academicSemester
}
