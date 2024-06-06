<template>
  <div class="flex justify-center p-24">
    <div class="flex justify-between items-center flex-col gap-4 bg-blue-100 rounded-md py-6 w-96">
      <h1 class="text-xl">Sign in</h1>
      <input
        class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400 opacity-80"
        placeholder="username"
      />
      <input
        class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400 opacity-80"
        placeholder="password"
      />
      <button
        class="text-xs border rounded-md px-4 py-1 bg-white text-gray-400 hover:bg-gray-200 active:border-gray-400"
      >
        Login
      </button>
    </div>
  </div>
</template>
