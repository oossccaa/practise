<template lang="pug">
div
  .alert 
    .icon icon
    .text {{text}}
</template>

<script>
export default {
  props: ['type','text'],
  setup (props,{root}) {
    const close = () => {
      console.log('刪除')
      console.log(root)
      root.$destroy();
      root.$el.parentNode.removeChild(root.$el);
    }
    setTimeout(()=>close(),3000)
    return {text:props.text}
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
}
</style>