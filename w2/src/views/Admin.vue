<template>
  <div>
    <Header />
    <side-bar />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
  export default {
    components:{
      Header,
      SideBar
    },
    setup(){
      const store = useStore()
      const router = useRouter()
      onMounted(async ()=>{
        if(!store.state.token){
          router.push('/Login')
          return 
        }
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>