<template lang="pug">
.card(ref='card')
  .title 滑塊認證
  .draw
    .img
      .destination
    .hover(ref="hover" :style="moveStyle")
  .drop
    .circle(ref='circle' :style="moveStyle")
    .rect 滑動以解鎖滑塊
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { onDeactivated, onMounted } from '@vue/runtime-core'
export default {
  setup() {
    const card = ref(null)
    const circle = ref(null)
    const hover = ref(null)
    const isDrop = ref(false)
    const xStart = ref(0)
    const xMove = ref(0)
    onMounted(() => {
      circle.value.addEventListener('mousedown', (e) => {
        isDrop.value = true
        xStart.value = e.clientX
      })
      card.value.addEventListener('mouseup', (e) => {
        isDrop.value = false
      })
      card.value.addEventListener('mousemove', (e) => {
        if (isDrop.value) {
          xMove.value = e.clientX - xStart.value
        }
      })
    })
    const moveStyle = computed(()=>{
      return {
        transform: `translateX(${xMove.value}px)`
      }
    })
    return { card, circle,hover ,moveStyle }
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 500px;
  height: 500px;
  position: absolute;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .title {
    font-size: 36px;
    font-weight: bold;
  }
}
.draw {
  position: relative;
}
.img {
  height: 250px;
  width: 250px;
  position: relative;
  background-size: 250px 250px;
  background-image: url('http://www.u-acg.com/wp-content/uploads/2015/12/LOVELIVE22.jpg');
}
.destination {
  position: absolute;
  width: 50px;
  height: 50px;
  background: #ccc;
  bottom: 50px;
  right: 50px;
}
.hover {
  position: absolute;
  bottom: 50px;
  left: -100px;
  width: 50px;
  height: 50px;
  background-size: 250px 250px;
  background-position: bottom 25% right 25%;
  background-image: url('http://www.u-acg.com/wp-content/uploads/2015/12/LOVELIVE22.jpg');
}

.drop {
  padding: 20px;
  position: relative;
  .circle {
    position: absolute;
    width: 45px;
    height: 45px;
    background: #0011ff;
    cursor: pointer;
  }
  .rect {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 300px;
    height: 45px;
    background: #ccc;
  }
}
</style>