<script setup>
import CartItemList from './CartItemList.vue'
import DrawerHeader from './DrawerHeader.vue'

defineProps({
  totalPrice: Number
})
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 bg-opacity-70">
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 overflow-auto">
      <DrawerHeader />
      <CartItemList />
      <div class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span>Total:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>${{ totalPrice }}</b>
        </div>

        <div class="flex gap-2">
          <span>Tax:5%</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>${{ ((totalPrice / 100) * 5).toFixed(1) }}</b>
        </div>
        <button
          disabled=""
          class="mt-4 transition bg-blue-400 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-blue-200 active:bg-blue-600 cursor-pointer"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>
