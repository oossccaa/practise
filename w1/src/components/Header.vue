<template lang="pug">
.header
  .menus
    .menus-link 首頁
    .menus-link 最新消息
</template>

<script>
export default {
  setup () {
    
    return {}
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 83.5px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.menus{
  display: flex;
  &-link{
    padding: 20px;
    color: #007ED2;
  }
}
</style>