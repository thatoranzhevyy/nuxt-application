<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <div class="px-2 py-2 sm:px-6">
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
        class="text-xl font-semibold leading-6 text-gray-900 dark:text-white uppercase"
        label="Настройки"
      />
      <UModal v-model="isOpen">
        <UCard>
          <template #header>
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
          </template>

          <template #default>
            <div>
              <h3 class="text-md font-semibold leading-6 text-gray-900 dark:text-white">
                Цветовая тема
              </h3>
              <ColorModeSwitcher />
            </div>
          </template>
        </UCard>
      </UModal>
    </div>
  </div>
</template>

<style scoped>

</style>