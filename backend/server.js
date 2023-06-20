import express from 'express'
import dotenv from 'dotenv/config'
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/User.Routes.js'

const port = process.env.PORT
const app = express()

app.use('/api/users', userRoutes)
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`) )

