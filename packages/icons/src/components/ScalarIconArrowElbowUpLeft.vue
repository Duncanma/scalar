/* GENERATED FILE */
<script lang="ts">
export default {
  name: 'ScalarIconArrowElbowUpLeft',
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
        d="M204,80V224a12,12,0,0,1-24,0V92H77l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L77,68H192A12,12,0,0,1,204,80Z" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M96,32v96L48,80Z"
        opacity="0.2" />
      <path
        d="M192,72H104V32a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,104,128V88h80V224a8,8,0,0,0,16,0V80A8,8,0,0,0,192,72ZM88,108.69,59.31,80,88,51.31Z" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M200,80V224a8,8,0,0,1-16,0V88H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,32V72h88A8,8,0,0,1,200,80Z" />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M198,80V224a6,6,0,0,1-12,0V86H62.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,1,1,8.48,8.48L62.49,74H192A6,6,0,0,1,198,80Z" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M200,80V224a8,8,0,0,1-16,0V88H67.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48-.06-.07c-.16-.16-.32-.34-.47-.52l-.23-.31a3.71,3.71,0,0,1-.23-.32l-.23-.37a2.91,2.91,0,0,1-.17-.3c-.07-.12-.13-.25-.19-.38s-.1-.21-.15-.33-.09-.25-.14-.37l-.13-.36-.09-.39c0-.13-.07-.25-.1-.37s0-.31-.06-.46,0-.21-.05-.32a8.34,8.34,0,0,1,0-1.58c0-.11,0-.21.05-.32s0-.31.06-.46.06-.24.1-.37l.09-.39.13-.36c.05-.12.09-.25.14-.37s.1-.22.15-.33.12-.26.19-.38a2.91,2.91,0,0,1,.17-.3l.23-.37a3.71,3.71,0,0,1,.23-.32l.23-.31c.15-.18.31-.36.47-.52l.06-.07,48-48a8,8,0,0,1,11.32,11.32L67.31,72H192A8,8,0,0,1,200,80Z" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M196,80V224a4,4,0,0,1-8,0V84H57.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L57.66,76H192A4,4,0,0,1,196,80Z" />
    </g>
  </svg>
</template>
