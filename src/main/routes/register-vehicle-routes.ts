import { Request, Response, Router } from 'express'

export default (router: Router): void => {
  router.post('/register-vehicle', (req: Request, res: Response) => {
    console.log(req.body)
    res.sendStatus(200)
  })
}
