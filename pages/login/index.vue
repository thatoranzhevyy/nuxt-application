<script setup lang="ts">
const { t, locale, availableLocales } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-center flex flex-col items-center max-w-screen-sm mx-6">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
        <span>Это <span class="text-primary">Nuxt 3</span> приложение</span>
      </h2>
      <p class="mt-6 text-xl/8 text-gray-600 dark:text-gray-300">
        <span>Тестовое приложение Nuxt 3. Будет доступен десктопное приложение и мобильное.</span>
      </p>
      <NuxtLink to="/login/auth/" class="contents">
        <UButton
          size="lg"
          block
          class="mt-6 text-xl"
        >
          Продолжить
        </UButton>
      </NuxtLink>
      <UButton
        size="lg"
        variant="link"
        block
        class="mt-2 text-xl"
        @click="toggleLocales"
      >
        {{ t("langChange") }}
      </UButton>
    </div>
  </div>
</template>
