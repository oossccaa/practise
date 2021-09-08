import request from './request';

export const login = (data)=>{
  return request.post('login',data)
}

export const register = (data)=>{
  return request.post('register',data)
}