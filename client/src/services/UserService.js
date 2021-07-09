import API from './'

export const GetUserByLogin = async (loginEmail, loginPassword) => {
  let body = {
    email: 'jd@mail.com',
    password: 'abc'
  }
  console.log(body)
  try {
    const res = await API.post(`/login`, body)
    console.log(res)
    return res.data //res.data returns {payload: {email, id}, token: ''}
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
    return res.data // ??? or just res.data ??
  } catch (error) {
    throw error
  }
}
