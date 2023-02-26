import express from 'express'
import cors from 'cors';

import detailRoute from './routes/detail.route';

const app = express()
const port = 3000

app.use(express.json())
app.use(cors());

app.use('/detail', detailRoute);

const start = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      console.log('Server started on port 3000')
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

void start()
