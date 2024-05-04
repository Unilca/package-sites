<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppCardList from './components/AppCardList.vue'
import AppFilter from './components/AppFilter.vue'
import AppDrawer from './components/AppDrawer.vue'

const items = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://c377d7930830f31e.mokky.dev/items')

    items.value = data
  } catch (error) {
    console.log('error load')
    console.log(error)
  }
})
</script>

<template>
  <div class="bg-white w-4/5 m-auto h-screen rounded-xl shadow-xl mt-14">
    <AppHeader />

    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">All cakes</h2>
        <AppFilter />
      </div>

      <div class="mt-10"><AppCardList :items="items" /></div>
    </div>
  </div>
</template>
