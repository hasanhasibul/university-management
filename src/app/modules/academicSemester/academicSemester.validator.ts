import { z } from 'zod'
import {
  academicSemesterCodeEnum,
  academicSemesterMonthEnum,
  academicSemesterTitleEnum,
} from './academicSemester.constant'

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitleEnum] as [string, ...string[]], {
      required_error: 'Title is required',
      invalid_type_error: "Title value should be 'Spring' | 'Summer' |'Fall ",
    }),
    code: z.enum([...academicSemesterCodeEnum] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    startMonth: z.enum(
      [...academicSemesterMonthEnum] as [string, ...string[]],
      {
        required_error: 'Start Month is required',
      }
    ),
    endMonth: z.enum([...academicSemesterMonthEnum] as [string, ...string[]], {
      required_error: 'End Month is required',
    }),
  }),
})

export default createAcademicSemesterZodSchema
