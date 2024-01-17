<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
      <div class="flex items-center space-x-3">
        <UAvatar size="md" src="https://www.datocms-assets.com/205/1667561117-nuxt.svg" />
        <div class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nuxt 3</div>
      </div>
      <div class="flex gap-2">
        <UButton icon="i-ph-magnifying-glass-bold" @click="isOpen = true" size="lg" color="gray" variant="ghost" />
        <UModal v-model="isOpen">
          <UCommandPalette multiple nullable />
        </UModal>
        <UButton icon="i-ph-bell-bold" size="lg" color="gray" variant="ghost" />
        <NuxtLink to="/login">
          <UButton label="Login" size="lg" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>