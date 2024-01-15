<script setup lang="ts">
const { t, locale, availableLocales, setLocaleCookie } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  setLocaleCookie(locale.value);
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-center flex flex-col items-center max-w-screen-sm mx-6 sm:mx-0 gap-4 sm:gap-5 lg:gap-6">
      <div class="font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl">
        <span>Это <span class="text-primary">Nuxt 3</span> приложение</span>
      </div>
      <div class="text-gray-600 dark:text-gray-300 text-base lg:text-xl">
        <span>Тестовое приложение Nuxt 3. Будет доступен десктопное приложение и мобильное.</span>
      </div>
      <NuxtLink to="/login/auth/" class="contents">
        <UButton size="lg" block class="text-xl" label="Продолжить"/>
      </NuxtLink>

      <UButton size="lg" variant="soft" block class="text-xl" @click="toggleLocales">
        {{ t("langChange") }}
      </UButton>
    </div>
  </div>
</template>
