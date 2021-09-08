<template>
  <div class="sidebar fixed h-full left-0">
    <div class="menus">
      <div class="menus__item">個人資訊管理</div>
      <div class="menus__item">會員管理</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 175px;
  position: fixed;
  height: 100vh;
  left: 0;
  border-right: 1px solid #000;
  &.hide {
    display: none;
  }
  &.short {
    width: 50px;
  }
}
.menus{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  &__item{
    padding: 10px;
    cursor: pointer;
    &:hover{
      color: #0292d4;
    }
  }
}
</style>