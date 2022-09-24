import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://18.228.150.69:5000/api'
})
// Api.interceptors.request.use((config) => {
//   config.params = {
//     auth: localStorage.getItem('idToken')
//   }
//   return config
// })

export default Api