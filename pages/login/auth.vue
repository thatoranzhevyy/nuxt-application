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
          icon="i-ph-arrow-left-bold"
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
          <div class="px-6 py-3">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-semibold leading-6 text-gray-900 dark:text-white">
                Настройки
              </h3>
              <UButton
                color="gray"
                variant="ghost"
                size="md"
                icon="i-ph-x-bold"
                @click="isOpen = false"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2 p-2">
            <ColorModeSwitcherMenuItem />
            <LanguageSwitcherMenuItem />
          </div>
        </div>
      </UModal>
    </div>
  </div>
  <div class="h-dvw flex items-center justify-between">
    <div class="space-y-6 mx-auto w-full max-w-sm py-8 px-4 sm:px-0 ">
      <div class="gap-y-6 flex flex-col">
        <form class="space-y-6">
          <div class="">
            <div class="flex content-center items-center justify-between text-sm">
              <label class="block font-medium text-gray-700 dark:text-gray-200" for="nuid-19">
                Email
              </label>
            </div>

            <div class="mt-1 relative">
              <div class="relative">
                <input type="email" placeholder="Enter your email" id="nuid-19"
                       class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400">
              </div>
            </div>
          </div>
          <div class="">
            <div class="flex content-center items-center justify-between text-sm">
              <label class="block font-medium text-gray-700 dark:text-gray-200" for="nuid-20">
                Password
              </label>
            </div>

            <div class="mt-1 relative">
              <div class="relative">
                <input type="password" placeholder="Enter your password" id="nuid-20"
                       class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400">
              </div>
            </div>
          </div>
          <NuxtLink to="/" class="contents ">
            <UButton
              block
              class="mt-6"
              label="Continue"
            />
          </NuxtLink>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>