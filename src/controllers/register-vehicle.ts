export class RegisterVehicle {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) { // eslint-disable-line
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }

    if (!httpRequest.body.model) { // eslint-disable-line
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }
  }
}
