import {
	getUsers,
	getUser,
	createUser,
	deleteUser,
} from '../controllers/userController.js'
import express from 'express'
const router = express.Router()

router.get('/user', getUsers)
router.post('/user', createUser)
router.get('/user/:id', getUser)
router.delete('/user/:id', deleteUser)

export default router
