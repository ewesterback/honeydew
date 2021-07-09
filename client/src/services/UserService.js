import API from './'

export const GetUserByLogin = async (loginEmail, loginPassword) => {
  let body = {
    email: loginEmail,
    password: loginPassword
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
      email: regEmail,
      password: regPassword,
      name: regUsername
    })
    console.log(res.data)
    return res.data 
  } catch (error) {
    throw error
  }
}
