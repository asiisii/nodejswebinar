import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/user.js'

dotenv.config()

// need to add it before we initalize our app
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.use(router)

const PORT = process.env.PORT || 5000

// app.use(logger)

const server = app.listen(PORT, () => {
	console.log('====================================')
	console.log(`Server is listening on port: ${PORT}`)
	console.log('====================================')
})

//gracefully shutting down the rejections or error
process.on('unhandledRejection', err => {
	console.log('====================================')
	console.log(`Error: ${err.message}`)
	console.log('====================================')
	server.close(() => process.exit(1)) //terminates the program and one indicates failure, if it was success it would have been 0
})
