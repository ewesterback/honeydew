import Axios from 'axios'
import { BASE_URL } from '../globals'

//const API = Axios.create({ baseURL: BASE_URL })
const API = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_URL
      : 'http://localhost:5000'
})

export default API
