import User from '../models/User.js'

export const getUsers = async (req, res, next) => {
	try {
		const users = await User.find()
		res.status(200)
		res.setHeader('Content-Type', 'applicaiton/json')
		res.json(users)
	} catch (error) {
		throw new Error(`Error getting all users: ${error.message}`)
	}
}

export const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) return res.status(404).json({ message: 'Cannot find a user' })
		res.status(200)
		res.setHeader('Content-Type', 'applicaiton/json')
		res.json(user)
	} catch (error) {
		throw new Error(`Error getting a user: ${error.message}`)
	}
}

export const createUser = async (req, res, next) => {
	try {
		const newUser = await User.create(req.body)
		res.status(200)
		res.setHeader('Content-Type', 'applicaiton/json')
		res.json(newUser)
	} catch (error) {
		throw new Error(`Error creating a user: ${error.message}`)
	}
}

export const deleteUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) return res.status(404).json({ message: 'Cannot find a user' })
		await user.remove()
		res.json({ message: 'Deleted user' })
	} catch (error) {
		throw new Error(`Error deleting a user: ${error.message}`)
	}
}
