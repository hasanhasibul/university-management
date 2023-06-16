import { QueryOptions } from 'mongoose'
import pick from './shared/pick'
import { possibleSemesterFields } from './app/modules/academicSemester/academicSemester.constant'

export const paginationHelper = (params: QueryOptions) => {
  const page = Number(params.page) || 1
  const limit = Number(params.perPage) || 2
  const sortBy = params.sortBy || 'createdAt'
  const sortOrder = params.sortOrder || 'desc'

  const skip = (page - 1) * limit

  const sort: any = {}
  if (sortBy && sortOrder) {
    sort[sortBy] = sortOrder
  }
  return {
    limit,
    skip,
    sort,
  }
}

export const searchAndFilterHelper = (
  params: QueryOptions,
  searchFilelds: string[]
) => {
  const filters = pick(params, possibleSemesterFields)
  const { keywords, ...filterOptions } = filters
  const searchConditions = []
  if (keywords) {
    searchConditions.push({
      $or: searchFilelds?.map((item: string) => {
        return {
          [item]: {
            $regex: keywords,
            $options: 'i',
          },
        }
      }),
    })
  }

  if (Object?.keys(filterOptions)?.length > 0) {
    searchConditions.push({
      $and: Object.entries(filterOptions).map(([key, value]) => {
        return {
          [key]: value,
        }
      }),
    })
  }

  return { searchConditions }
}
