import app from '../config/app'
import ConnectDB from '../../infra/db/mongodb/mongodb-connect'

const port = process.env.PORT ?? 3000

app.listen(port, () => {
  console.log(`Server is running in port: \x1b[32m ${port}\x1b[0m`)
  ConnectDB()
})
