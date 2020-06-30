import express from 'express'
import arithmeticAPI from './arithmeticAPI'

const app = express()
const port = 8081

app.use(express.json())

app.get('/', (_, res) =>
  res.json({
    hello: 'world',
  })
)

app.post('/arithmetic', arithmeticAPI)

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
)
