<template>
  <select class="py-2 px-3 border rounded-md outline-none">
    <option>by name</option>
    <option>by cheap price</option>
    <option>by high price</option>
  </select>

  <div class="relative">
    <img class="absolute left-3 top-3" src="/search.svg" />
    <input
      class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400"
      placeholder="search..."
    />
  </div>
</template>
