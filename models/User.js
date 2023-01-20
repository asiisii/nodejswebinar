import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema(
	{
		userName: {
			type: String,
			unique: true,
			required: true,
			maxLength: 20,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			enum: ['Male', 'Female'],
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
