import API from './'

export const GetListsByUser = async () => {
  try {
    let token = localStorage.getItem('token')
    //let tokenObj = { token: token }
    const res = await API.get(`./lists/user/${token}`)
    return res.data // ??? or just res.data ??
  } catch (error) {
    throw error
  }
}

export const CreateList = async (title) => {
  try {
    let token = localStorage.getItem('token')
    const res = await API.post(`./lists/user/${token}`, { title: title })
    return res.data
  } catch (error) {
    throw error
  }
}
