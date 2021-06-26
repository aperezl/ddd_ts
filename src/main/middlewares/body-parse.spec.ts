import request from 'supertest'
import app from '../config/app'

describe('Body Parse', () => {
  it('should return Body-Parse', async () => {
    app.post('/body-parse', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/body-parse')
      .send({ name: 'Antonio' })
      .expect({ name: 'Antonio' })
  })
})
