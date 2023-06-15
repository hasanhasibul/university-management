import { IGenericErrorMessage } from './error'
export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}

export type paginationType = {
  page?: number
  perPage?: number
  sortBy?: string | undefined
  sortOrder?: string | undefined
}
