import express from 'express'
import bodyParser from 'body-parser'
import teams from './routes/teams'

const app = express()

app.use(bodyParser.json())

app.use('/api/teams', teams)

app.listen(8080)
