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
</style>
