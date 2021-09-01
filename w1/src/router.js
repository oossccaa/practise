import { createRouter, createWebHashHistory } from 'vue-router'
const router = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('@/App.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: ()=> import('@/views/Home.vue')
      },
      {
        path: 'Login',
        name: 'Login',
        component: ()=> import('@/views/Login.vue')
      },
      {
        path: 'Register',
        name: 'Register',
        component: ()=> import('@/views/Register.vue')
      }
    ]
  },
]

const routers = createRouter({
  history: createWebHashHistory(),
  routes: router,
})

export default routers
