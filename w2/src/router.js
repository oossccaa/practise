import { createRouter, createWebHistory } from 'vue-router'
const router = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('@/App.vue'),
    children: [
      {
        path: '/',
        name: 'Admin',
        component: ()=> import('@/views/Admin.vue'),
        children: [
          {
            path: '/',
            name: 'Home',
            component: ()=>  import('@/views/Home.vue'),
          },
        ]
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
      },
      {
        path: '*',
        name: '404',
        component: () => import('@/views/404.vue')
      }
    ]
  },
]

const routers = createRouter({
  history: createWebHistory(),
  routes: router,
})

export default routers
