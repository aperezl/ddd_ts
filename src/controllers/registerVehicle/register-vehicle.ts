import { MissingFormalParameters } from '../../errors/client-error'
import { serverError, serverSuccess } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class RegisterVehicle implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'model', 'year', 'color']
      for (const props of requiredProperties) {
        if (!httpRequest.body[props]) {
          return {
            statusCode: 400,
            body: new MissingFormalParameters(props)
          }
        }
      }
    } catch (error) {
      serverError(error)
    }
    const data = httpRequest.body
    return serverSuccess(data)
  }
}
