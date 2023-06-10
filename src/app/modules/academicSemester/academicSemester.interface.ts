import { Model } from 'mongoose'

type academicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

type academicSemesterCode = '01' | '02' | '03'
type academicSemesterTitle = 'Spring' | 'Summer' | 'Fall'

export type academicSemesterInterface = {
  title: academicSemesterTitle
  year: number
  code: academicSemesterCode
  startMonth: academicSemesterMonth
  endMonth: academicSemesterMonth
}

export type academicSemesterModel = Model<academicSemesterInterface, object>
