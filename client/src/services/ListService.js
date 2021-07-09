import API from './'

export const GetListsByUser = async () => {
  try {
    console.log('made it to service')
    let token = localStorage.getItem('token')
    console.log(token)
    let tokenObj = { token: token }
    console.log(tokenObj)
    const res = await API.get(`./lists/user/${token}`)
    console.log(res)
    return res.data // ??? or just res.data ??
  } catch (error) {
    throw error
  }
}
