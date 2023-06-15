import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import createAcademicSemesterZodSchema from './academicSemester.validator'
import { academicSemesterController } from './academicSemester.controller'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(createAcademicSemesterZodSchema),
  academicSemesterController.createAcademicSemester
)
router.get('/semesters', academicSemesterController.getAllAcademicSemister)

export const academicSemesterRouter = router
