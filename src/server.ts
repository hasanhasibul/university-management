import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'
// const port = 5000
// const pass = "aWCdTuSxebcaBER2"
// const user = "university-admin"
// const URL = "mongodb+srv://university-admin:aWCdTuSxebcaBER2@cluster0.ezexp.mongodb.net/university-management?retryWrites=true&w=majority"

const dbConnections = async () => {
  try {
    await mongoose.connect(config.dbUrl as string)
    logger.info('db connection success')
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('Failed to connect database', error)
  }
}

dbConnections()
