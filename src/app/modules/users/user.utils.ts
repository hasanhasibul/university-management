import { userModel } from './user.model'

const getUserId = async () => {
  const previousId = await userModel
    .findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return previousId?.id
}

export const autoGenarateId = async () => {
  const res = await getUserId()
  const id = res
    ? (parseInt(res) + 1).toString()
    : '1'.toString().padStart(5, '0')
  return id.toString().padStart(5, '0')
}
