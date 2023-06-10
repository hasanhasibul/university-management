import { Schema, model } from 'mongoose'
import {
  academicSemesterInterface,
  academicSemesterModel,
} from './academicSemester.interface'
import {
  academicSemesterCodeEnum,
  academicSemesterMonthEnum,
  academicSemesterTitleEnum,
} from './academicSemester.constant'
import ApiError from '../../../errors/ApiError'
import { StatusCodes } from 'http-status-codes'

const academicSemesterSchema = new Schema<academicSemesterInterface>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitleEnum,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodeEnum,
    },
    year: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonthEnum,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonthEnum,
    },
  },
  {
    timestamps: true,
  }
)

academicSemesterSchema.pre('save', async function (next) {
  const isMatch = await academicSemesterModel.findOne({
    title: this.title,
    year: this.year,
  })
  if (isMatch) {
    throw new ApiError(
      StatusCodes.CONFLICT,
      'Academic semester is already exist!'
    )
  }
  next()
})

const academicSemesterModel = model<
  academicSemesterInterface,
  academicSemesterModel
>('academicSemesters', academicSemesterSchema)
export default academicSemesterModel
