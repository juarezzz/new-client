import axios from 'axios'

const API = axios.create({
    baseURL: 'https://openbooks-server.herokuapp.com'
})

export default API