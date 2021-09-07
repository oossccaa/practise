import axios from 'axios'
import Alert from '@/components/Alert/Plugins.js'
import { store } from '@/store'
const instance = axios.create({
  baseURL: '/api',
  timeout: 50000
})
instance.interceptors.request.use(
  config=>{
    if(config.url !== '/login' && config.url !== '/register'){
      config.headers['AUTHENTICATION_TOKEN'] = store.state.token
    }
    return config
  },
  error =>{
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(function (response) {
  return response
},
function (error){
  if(error.response && error.response.data){
    if(error.response.status){
      store.commit('CLEAR_TOKEN')
    }
    Alert.error(error.response.data.message)
  }
  return Promise.reject(error)
})
export default instance
