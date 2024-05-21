<script setup>
import { inject } from 'vue'

const { closeDrawer } = inject('cart')
</script>

<template>
  <div class="flex items-center gap-5 mb-8">
    <svg
      @click="closeDrawer"
      class="opacity-30 cursor-pointer hover:opacity-100"
      width="35.000000"
      height="35.000000"
      viewBox="0 0 35 35"
      fill="none"
    >
      <defs />
      <rect
        id="Rectangle 22"
        rx="8.000000"
        width="35.000000"
        height="35.000000"
        transform="matrix(-1 0 0 1 35 0)"
        fill="#FFFFFF"
        fill-opacity="1.000000"
      />

      <path
        id="Vector 217"
        d="M16 22L21 17L16 12"
        stroke="black"
        stroke-opacity="1.000000"
        stroke-width="1.500000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>
    <h2 class="text-2xl font-bold">Cart</h2>
  </div>
</template>
