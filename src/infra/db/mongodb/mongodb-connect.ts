import mongoose from 'mongoose'

export default (): void => {
  const url = process.env.MONGO_URI ?? 'mongodb://localhost:21017'
  mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, dbName: 'tdd' }, (err) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log('DB connected')
    }
  })
}
