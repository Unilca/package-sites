<script setup>
import AppHeader from './components/AppHeader.vue'
import AppCardList from './components/AppCardList.vue'
import AppFilter from './components/AppFilter.vue'
</script>

<template>
  <div class="bg-white w-4/5 m-auto h-screen rounded-xl shadow-xl mt-14">
    <AppHeader />
    <AppFilter />
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">All cakes</h2>
      </div>

      <AppCardList />
    </div>
  </div>
</template>
