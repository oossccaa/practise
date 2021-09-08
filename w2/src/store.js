import {createStore} from 'vuex'
export const store = createStore({
  state: {
    token: localStorage.getItem('token')
  },
  mutations:{
    SET_TOKEN(state,token){
      localStorage.setItem('token',token)
      state.token = token
    },
    CLEAR_TOKEN(state){
      localStorage.removeItem('token')
      state.token = ''
    }
  },
})