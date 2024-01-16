<script setup lang="ts">
const { t, locale, availableLocales, setLocaleCookie } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  setLocaleCookie(locale.value);
};
</script>

<template>
  <UButton size="lg" variant="soft" block class="text-xl" @click="toggleLocales">
    {{ t("langChange") }}
  </UButton>
</template>

<style scoped>

</style>