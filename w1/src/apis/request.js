import axios from 'axios'
const instance = axios.create({
  baseURL: '/api',
  timeout: 50000
})
instance.interceptors.response.use(function (response) {
  return response
},
function (error){
  if(error.response && error.response.data){
    alert(error.response.data.message)
  }

})
export default instance
