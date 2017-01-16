import express from 'express'
import bodyParser from 'body-parser'
import team from './routes/team'
import teams from './routes/teams'
import teamMembers from './routes/teamMembers'
import mongoose from 'mongoose'
import config from './config'

const app = express()

mongoose.connect(config.database)
mongoose.connection.on('error', () => {
  // eslint-disable-next-line no-console
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?')
})

app.use(bodyParser.json())

app.use('/api/team', team)
app.use('/api/teams', teams)
app.use('/api/teammembers', teamMembers)

// eslint-disable-next-line no-console
app.listen(8080, () => console.info('Running server on 8080'))
