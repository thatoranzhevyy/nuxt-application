<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <div class="p-2 sm:p-4">
    <div class="flex items-center justify-between">
      <NuxtLink to="/login/">
        <UButton
          size="lg"
          color="gray"
          variant="ghost"
          class="text-xl font-semibold leading-6 text-gray-900 dark:text-white uppercase"
          icon="i-heroicons-arrow-left-16-solid"
        />
      </NuxtLink>
      <UButton
        size="lg"
        @click="isOpen = true"
        color="gray"
        variant="ghost"
        class="text-base font-semibold leading-6 text-gray-900 dark:text-white uppercase"
        label="Настройки"
      />
      <UModal v-model="isOpen">
        <div
          class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">

          <div class="px-5 py-3">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-semibold leading-6 text-gray-900 dark:text-white">
                Настройки
              </h3>
              <UButton
                color="gray"
                variant="ghost"
                size="md"
                icon="i-heroicons-x-mark-20-solid"
                @click="isOpen = false"
              />
            </div>
          </div>
          <div class="flex flex-col p-4 gap-2">
            <ColorModeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </UModal>
    </div>
  </div>
</template>

<style scoped>

</style>