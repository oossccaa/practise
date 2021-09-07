<template lang="pug">
div
  .login-card.p-12.flex.flex-col.justify-between
    .title.pt-4 登入
    .form 
      .form__input
        FormInput(
          title='帳號',
          v-model='username',
          :verify='formVerify.username'
        )
      .form__input.pt-8
        FormInput(
          title='密碼',
          v-model='password',
          :verify='formVerify.password',
          hide
        )
    .control.flex.flex-col.items-center
      .button.text-blue-500.w-32.pb-12.cursor-pointer(@click='goRegister') 註冊
      .button.bg-blue-500.text-white.rounded-md.w-32.text-lg.p-1.cursor-pointer(
        @click='handleLogin'
      ) 登入
  Verify(v-show='VerifyVisible')
</template>

<script>
import { inject, reactive, toRefs, ref } from 'vue'
import { login } from '@/apis/user'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import FormInput from '@/components/FormInput.vue'
import Verify from '@/components/Verify.vue'
import Alert from '@/components/Alert/Plugins.js'
export default {
  components: { FormInput, Verify },
  setup() {
    const router = useRouter()
    const store = useStore()
    const form = reactive({
      username: '',
      password: '',
    })
    const formVerify = {
      username: false,
      password: false,
    }
    const isLoading = inject('isLoading')
    const VerifyVisible = ref(false)
    const goRegister = () => {
      router.push('/Register')
    }
    const handleLogin = async () => {
      try {
        isLoading.value = true
        const result = await login({
          username: form.username,
          password: form.password,
        })
        if (result.status === 200) {
          Alert.success('登入成功!')
          const {token} = result.data
          store.commit('SET_TOKEN',token)
          setTimeout(()=>router.push('/'),0)
        }
        isLoading.value = false
      } catch (error) {
        isLoading.value = false
      }
    }
    return {
      goRegister,
      handleLogin,
      ...toRefs(form),
      formVerify,
      VerifyVisible,
    }
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