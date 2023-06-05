import config from '../../../config'
import { userInterface } from './user.interface'
import { userModel } from './user.model'
import { autoGenarateId } from './user.utils'

export const createUser = async (user: userInterface) => {
  if (!user.password) {
    user.password = config.defaultPass as string
  }
  if (!user.id) {
    user.id = await autoGenarateId()
  }
  const userCreate = await userModel.create(user)
  if (!userCreate) {
    throw new Error('user not created')
  } else {
    return userCreate
  }
}
