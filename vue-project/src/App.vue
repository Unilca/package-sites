<script setup>
import AppHeader from './components/AppHeader.vue'
import AppCardList from './components/AppCardList.vue'
import AppDrawer from './components/AppDrawer.vue'
</script>

<template>
  <div class="bg-white w-4/5 m-auto h-screen rounded-xl shadow-xl mt-14">
    <AppHeader />

    <div class="p-10">
      <h2 class="text-3xl font-bold mb-8">All cakes</h2>

      <AppCardList />
      <AppDrawer />
    </div>
  </div>
</template>
