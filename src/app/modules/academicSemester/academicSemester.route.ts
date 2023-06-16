import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { academicSemesterController } from './academicSemester.controller'
import { AcademicSemesterZodSchema } from './academicSemester.validator'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterZodSchema.createAcademicSemesterZodSchema),
  academicSemesterController.createAcademicSemester
)
router.patch(
  '/update-semester/:id',
  validateRequest(AcademicSemesterZodSchema.updateAcademicDepartmentZodSchema),
  academicSemesterController.updateAcademicSemister
)
router.get('/semesters', academicSemesterController.getAllAcademicSemister)
router.get(
  '/details/:id',
  academicSemesterController.getAcademicSemisterDetails
)

export const academicSemesterRouter = router
