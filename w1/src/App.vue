<script>
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
import Loading from '@/components/Loading.vue'
export default {
  components: { Loading },
  setup() {
    const isLoading = ref(false)
    provide('isLoading', isLoading)
    return { isLoading }
  },
}
</script>

<template>
  <div>
    <Loading v-show="isLoading" />
    <router-view class="main w-full" />
    <div id="message-list" />
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  width: 100%;
  min-height: 100vh;
}
#message-list{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  text-align: center;
}
#message-list:empty{
  margin-top: 0;
}
.message-item{
  display: flex;
  justify-content: center;
}
</style>
