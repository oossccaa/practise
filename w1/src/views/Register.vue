<template lang="pug">
div
  .register-card.p-12.flex.flex-col.justify-between
    .title.pt-4 註冊
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
import Alert from '@/components/Alert/Plugins.js'
export default {
  components: { FormInput },
  setup() {
    const router = useRouter()
    const form = reactive({
      username: '',
      password: '',
      confirm: '',
    })
    const formVerify = reactive({
      username: false,
      password: false,
      confirm: false,
    })
    const isLoading = inject('isLoading')
    const goLogin = () => {
      router.push('/Login')
    }
    const verifyRegister = () => {
      formVerify.username = false
      formVerify.password = false
      formVerify.confirm = false
      const { username, password, confirm } = form
      if (!username) {
        formVerify.username = '請輸入帳號'
      } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(username)) {
        formVerify.username = '帳號必須是信箱'
      }
      if (!password) {
        formVerify.password = '請輸入密碼'
      } else if (!/^[A-z]\d{2,6}[A-z]$/.test(password)) {
        formVerify.password = '密碼格式錯誤'
      }

      if (!confirm) {
        formVerify.confirm = '請輸入確認密碼'
      } else if (!/^[A-z]\d{2,6}[A-z]$/.test(confirm)) {
        formVerify.confirm = '密碼格式錯誤'
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
      try {
        isLoading.value = true
        const result = await register({
          username: form.username,
          password: form.password,
        })
        if (result.status === 200) {
          Alert.success(result.data.message)
          router.push('/Login')
        }
        isLoading.value = false
      } catch (error) {
        isLoading.value = false
      }
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