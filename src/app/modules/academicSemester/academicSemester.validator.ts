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

const updateAcademicDepartmentZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemesterTitleEnum] as [string, ...string[]], {
          required_error: 'Title is required',
        })
        .optional(),
      year: z
        .string({
          required_error: 'Year is required ',
        })
        .optional(),
      code: z
        .enum([...academicSemesterCodeEnum] as [string, ...string[]])
        .optional(),
      startMonth: z
        .enum([...academicSemesterMonthEnum] as [string, ...string[]], {
          required_error: 'Start month is needed',
        })
        .optional(),
      endMonth: z
        .enum([...academicSemesterMonthEnum] as [string, ...string[]], {
          required_error: 'End month is needed',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either both title and code should be provided or neither',
    }
  )

export const AcademicSemesterZodSchema = {
  createAcademicSemesterZodSchema,
  updateAcademicDepartmentZodSchema,
}
