import { Model, model, Schema } from 'mongoose'
import { userInterface } from './user.interface'

type UserModel = Model<userInterface, object>

const userSchema = new Schema<userInterface>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
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

export const userModel = model<userInterface, UserModel>('User', userSchema)
