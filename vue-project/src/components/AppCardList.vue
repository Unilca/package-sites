<script setup>
import AppCard from './AppCard.vue'

const onClickAdd = () => {
  alert('dsdsdsdsdsd')
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <AppCard
      title="dsfgdfggfsggsdfgsdfg"
      imageUrl="/cakes/cakes-1.jpg"
      :price="123123"
      :isAdded="false"
      :isFavorite="false"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>
