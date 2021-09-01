<template lang="pug">
div
  .register-card.p-12.flex.flex-col.justify-between
    .title.pt-4 註冊
    .form 
      .form__input
        FormInput(title='帳號', v-model='account', :verify='formVerify.account')
      .form__input.pt-8
        FormInput(
          title='密碼',
          v-model='password',
          :verify='formVerify.password',
          hide
        )
      .form__input.pt-8
        FormInput(
          title='確認密碼',
          v-model='confirm',
          :verify='formVerify.confirm',
          hide
        )
    .control.flex.flex-col.items-center
      .button.text-blue-500.w-32.pb-12.cursor-pointer(@click='goLogin') 返回登入
      .button.bg-blue-500.text-white.rounded-md.w-32.text-lg.p-1.cursor-pointer(
        @click='handleRegister'
      ) 註冊
</template>


<script>
import { inject, ref, reactive, toRefs } from 'vue'
import { register } from '@/apis/user'
import { useRouter } from 'vue-router'
import FormInput from '@/components/FormInput.vue'
export default {
  components: { FormInput },
  setup() {
    const router = useRouter()
    const form = reactive({
      account: '',
      password: '',
      confirm: '',
    })
    const formVerify = reactive({
      account: false,
      password: false,
      confirm: false,
    })
    const isLoading = inject('isLoading')
    const goLogin = () => {
      router.push('/Login')
    }
    const verifyRegister = () => {
      formVerify.account = false
      formVerify.password = false
      formVerify.confirm = false
      const { account, password, confirm } = form
      if (!account) {
        formVerify.account = '請輸入帳號'
      }
      if (!password) {
        formVerify.password = '請輸入密碼'
      }
      if (!confirm) {
        formVerify.confirm = '請輸入確認密碼'
      }
      if (String(password) != String(confirm)) {
        formVerify.confirm = '與密碼不同'
      }
      return Object.values(formVerify).every((item) => item === false)
    }
    const handleRegister = async () => {
      if (!verifyRegister()) {
        return false
      }
      isLoading.value = true
      const result = await register({ account: 'tris', password: '123' })
      if (result) {
        //登入成功!
      }
      isLoading.value = false
    }
    return { goLogin, handleRegister, ...toRefs(form), formVerify }
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
.register-card {
  background: #fff;
  width: 510px;
  height: 510px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.16);
  .title {
    font-size: 28px;
  }
}
</style>