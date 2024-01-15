<script setup lang="ts">

</script>

<template>
  <NavigationBar />
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
      <div class="lg:col-span-2 h-screen bg-red-200"></div>
      <div class="lg:col-span-8 h-screen bg-green-200"></div>
    </div>
  </div>
  <p>isElectron: {{ useElectron().isElectron ? "🟢" : "🔴" }}</p>

</template>

<style scoped>

</style>