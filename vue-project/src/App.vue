<script setup>
import { ref, watch, provide } from 'vue'
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppDrawer from './components/AppDrawer.vue'

import Home from './pages/Home.vue'

//массив с корзиной
const cart = ref([])
const drawerIsOpen = ref(false)

const closeDrawer = () => {
  drawerIsOpen.value = false
}
const openDrawer = () => {
  drawerIsOpen.value = true
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

//все функции обьявляем глобально (все функции корзины)
provide(
  /* key global */ 'cart',
  /* value */ { cart, closeDrawer, openDrawer, addToCart, removeFromCart }
)
</script>

<template>
  <div class="bg-white w-4/5 m-auto h-auto rounded-xl shadow-xl mt-14 mb-14">
    <AppHeader @open-drawer="openDrawer" />
    <AppDrawer v-if="drawerIsOpen" />
    <div class="p-10">
      <!-- будут все страницы -->
      <router-view></router-view>
    </div>
  </div>
</template>
