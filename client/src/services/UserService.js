import API from './'

export const GetUserByLogin = async (loginEmail, loginPassword) => {
  try {
    const res = await API.post(`/login`, {
      email: loginEmail,
      password: loginPassword
    })
    return res.data.user               // ??? or just res.data ??
  } catch (error) {
    throw error
  }
}

export const PostNewUser = async (regEmail, regPassword, regUsername) => {
  try {
    const res = await API.post(`/register`, {
      name: regUsername,
      email: regEmail,
      password: regPassword
    })
    return res.data.user               // ??? or just res.data ??
  } catch (error) {
    throw error
  }
}