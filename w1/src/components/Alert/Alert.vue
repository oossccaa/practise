<template lang="pug">
transition(name="fade")
  .alert 
    .icon 
      img(:src="icon")
    .text {{text}}
</template>

<script>
import SuccessImg from '@/assets/success.png'
import ErrorImg  from '@/assets/error.png'
import { ref } from '@vue/reactivity'
export default {
  props: ['type','text'],
  setup ({text,type},{root}) {
    const icon = ref(null)
    if(type === 'success'){
      icon.value = SuccessImg
    }else if(type === 'error'){
      icon.value = ErrorImg
    }
    const close = () => {
    }
    setTimeout(()=>close(),3000)
    return {text,icon}
  }
}
</script>

<style lang="scss" scoped>
.alert{
  display: flex;
  background: #fff;
  width: fit-content;
  padding: 4px 20px;
  box-shadow: 2px 3px 6px rgba(0,0,0,0.16);
  margin-bottom: 20px;
}
.icon{
  img{
    width: 30px;
    height: 30px;
  }
}
.text{
  padding-left: 12px;
  display: flex;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>