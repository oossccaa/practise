<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import {authentication} from '@/apis/admin.js'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Alert from '@/components/Alert/Plugins.js'
  export default {
    components:{
      Header
    },
    setup(){
      const store = useStore()
      const router = useRouter()
      onMounted(async ()=>{
        if(!store.state.token){
          router.push('/Login')
          return 
        }
        try {
          const result = await authentication()
          if (result.status === 200) {
            //call get other data API
          }
        } catch (error) {
          router.push('/Login')
          console.log(error);
        }
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>