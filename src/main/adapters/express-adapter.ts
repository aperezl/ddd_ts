import { Controller } from '../../interfaces/controller'
import { Request, Response } from 'express'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export const AdapterRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
