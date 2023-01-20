import mongoose from 'mongoose'

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log('====================================')
	console.log(`MongoDB connected: ${conn.connection.host}`)
	console.log('====================================')
}

export default connectDB
