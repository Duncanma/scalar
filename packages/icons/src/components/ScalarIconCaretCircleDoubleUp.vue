/* GENERATED FILE */
<script lang="ts">
export default {
  name: 'ScalarIconCaretCircleDoubleUp',
}
</script>
<script lang="ts" setup>
import { useScalarIcon } from '@/hooks'
import type { ScalarIconProps } from '@/types'

const props = defineProps<ScalarIconProps>()

const { bind, weight } = useScalarIcon(props)
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    v-bind="bind">
    <slot />
    <g v-if="weight === 'bold'">
      <path
        d="M204.4,51.6a108,108,0,1,0,0,152.8A108.16,108.16,0,0,0,204.4,51.6Zm-17,135.82a84,84,0,1,1,0-118.84A84.12,84.12,0,0,1,187.42,187.42ZM168.5,159.53a12,12,0,0,1-17,17L128,153l-23.53,23.53a12,12,0,0,1-17-17l32-32a12,12,0,0,1,17,0Zm0-56a12,12,0,1,1-17,17L128,97l-23.53,23.52a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0Z" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M195.88,195.88a96,96,0,1,1,0-135.76A96,96,0,0,1,195.88,195.88Z"
        opacity="0.2" />
      <path
        d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-24.57-27.89a8,8,0,0,1-11.32,11.32L128,147.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Zm0-56a8,8,0,0,1-11.32,11.32L128,91.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M201.58,54.43a104,104,0,1,0,0,147.14A104.17,104.17,0,0,0,201.58,54.43Zm-35.9,119.25a8,8,0,0,1-11.32,0L128,147.32l-26.35,26.36a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.68,173.68Zm0-56a8,8,0,0,1-11.32,0L128,91.29l-26.35,26.36a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.68,117.65Z" />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M200.12,55.87A102,102,0,0,0,55.87,200.12,102,102,0,1,0,200.12,55.87Zm-8.48,135.77a90,90,0,1,1,0-127.28A90.1,90.1,0,0,1,191.64,191.64Zm-27.4-27.88a6,6,0,1,1-8.48,8.48L128,144.49l-27.76,27.75a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0Zm0-56a6,6,0,1,1-8.48,8.48L128,88.49l-27.76,27.75a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0Z" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-24.57-27.89a8,8,0,0,1-11.32,11.32L128,147.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Zm0-56a8,8,0,0,1-11.32,11.32L128,91.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29Zm-5.66,135.76A92,92,0,1,1,220,128,91.37,91.37,0,0,1,193.05,193.05Zm-30.22-27.88a4,4,0,0,1-5.66,5.66L128,141.66,98.83,170.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Zm0-56a4,4,0,0,1-5.66,5.66L128,85.66,98.83,114.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Z" />
    </g>
  </svg>
</template>
