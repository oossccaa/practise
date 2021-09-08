<template lang="pug">
.flex.justify-center
  label.pr-8.text-lg {{ title }}
  .relative.w-60
    input.w-60.outline-none(
      :type='inputType',
      v-model='inputValue',
      :class='{ verify: verify }'
    )
    .absolute.text-sm.text-red-500(v-show='verify') {{ verify }}
    img.eyes(
      v-if='hide !== undefined',
      src='@/assets/hide.png',
      @mousedown='visible = true',
      @mouseup='visible = false',
      @mouseleave='visible = false'
    )
</template>

<script>
import { computed, ref } from 'vue'
export default {
  props: ['modelValue', 'hide', 'title', 'verify'],
  emits: ["update:modelValue"],
  setup(props,{emit}) {
    const visible = ref(false)
    const inputType = computed(() => {
      if (props.hide === undefined) {
        return 'text'
      } else {
        return visible.value ? 'text' : 'password'
      }
    })
    const inputValue = computed({
      get: () => props.modelValue,
      set: val => emit("update:modelValue", val),
    });
    return {
      visible,
      inputType,
      inputValue,
      ...props,
    }
  },
}
</script>

<style lang="scss" scoped>
label {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
input {
  border: 1px solid #707070;
  height: 42px;
  line-height: 42px;
  padding: 8px;
}
.verify {
  border-color: red;
}
.eyes {
  position: absolute;
  right: 10px;
  top: 15px;
  cursor: pointer;
}
</style>