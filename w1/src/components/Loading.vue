<template lang="pug">
.loading-wrap
  .con
    .circle 
    .circle 
    .circle 
    .circle 
    .circle 
    .circle 
    .circle 
    .circle 
</template>

<script>
export default {
  setup() {},
}
</script>

<style lang="scss" scoped>
.loading-wrap {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.2);
}
.con{
	position: relative;
	width: 300px;
	height: 300px;
}
.circle{
	z-index: 1000;
  width: 100px;
  height: 150px;
	position: absolute;
	top: 50%;
	left: 50%;
	&:before{
		border-radius: 50%;
		position: absolute;
		background: #2c3cce;
		width: 20px;
		height: 20px;
		content: '';
		animation: loading 1.2s infinite;
		opacity: 0;
	}
}

@keyframes loading{
	0%{
		opacity: 1;
	}
	100%{
		transform: scale(0.7);
		opacity: 0;
	}
}

@for $i from 1 through 12 {
	.circle:nth-child(#{$i}){
		transform: translate(-50%,-50%) rotate(#{$i*45}deg);
		&:before{
			animation-delay: #{$i*0.15}s;
		}
	}
}
</style>