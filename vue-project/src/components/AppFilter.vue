<template>
  <div class="flex gap-4">
    <select class="py-2 px-3 border rounded-md outline-none">
      <option>by name</option>
      <option>by price (cheap)</option>
      <option>by price (high)</option>
    </select>

    <div class="relative">
      <img class="absolute left-3 top-3" src="/search.svg" />
      <input
        class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400"
        placeholder="search..."
      />
    </div>
  </div>
</template>
