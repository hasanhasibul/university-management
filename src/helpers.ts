import { QueryOptions } from 'mongoose'

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
  const searchKeywords = params?.keywords
  const searchCondision = {
    $or: searchFilelds?.map((item: string) => {
      return {
        [item]: {
          $regex: searchKeywords,
          $options: 'i',
        },
      }
    }),
  }

  return { searchCondision }
}
