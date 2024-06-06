<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import AppCardList from '../components/AppCardList.vue'

const favorites = ref([])
onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://c377d7930830f31e.mokky.dev/favorites?_relations=items'
    )

    favorites.value = data.map((obj) => obj.item)
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-8">Favorites</h2>
    </div>
    <div class="mt-10">
      <AppCardList :items="favorites" :isFavorites="true" />
    </div>
  </div>
</template>
