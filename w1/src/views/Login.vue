<template lang="pug">
div
  .login-card.p-12.flex.flex-col.justify-between
    .title.pt-4 登入
    .form 
      .form__input
        FormInput(title="帳號" v-model="account" :verify="formVerify.account")
      .form__input.pt-8
        FormInput(title="密碼" v-model="password" :verify="formVerify.password" hide)
    .control.flex.flex-col.items-center
      .button.text-blue-500.w-32.pb-12.cursor-pointer(@click="goRegister") 註冊
      .button.bg-blue-500.text-white.rounded-md.w-32.text-lg.p-1.cursor-pointer(@click="handleLogin") 登入
</template>

<script>
import { inject, reactive,toRefs } from 'vue'
import {login} from '@/apis/user'
import {useRouter} from 'vue-router'
import FormInput from '@/components/FormInput.vue'
export default {
  components: {FormInput},
  setup() {
    const router = useRouter()
    const form = reactive({
      account: '',
      password: '',
    })
    const formVerify = {
      account: false,
      password: false
    }
    const isLoading = inject('isLoading')
    const goRegister = ()=>{
      router.push('/Register')
    }
    const handleLogin = async()=>{
      isLoading.value = true
      const result = await login({account: 'tris',password:'123'})
      isLoading.value = false
    }
    return { goRegister,handleLogin,...toRefs(form),formVerify }
  },
}
</script>

<style lang="scss" scoped>
.main {
  background: #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-card {
  background: #fff;
  width: 510px;
  height: 510px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.16);
  .title {
    font-size: 28px;
  }
}
</style>