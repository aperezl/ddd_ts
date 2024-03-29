import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../interfaces/http-interface'

export const serverSuccess = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack ?? 'error')
})
