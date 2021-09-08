import request from './request'

export const authentication = ()=>{
  return request.get('/authentication')
}