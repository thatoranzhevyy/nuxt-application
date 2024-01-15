<script setup lang="ts">

</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nuxt 3</span>
      </div>
      <div>
        <NuxtLink to="/login">
          <UButton label="Login" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>