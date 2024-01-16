<script setup lang="ts">
const { t, locale, availableLocales,setLocaleCookie  } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  setLocaleCookie(locale.value)
};
</script>

<template>
  <ClientOnly>
    <UButton
      icon='i-ph-translate-bold'
      color="gray"
      variant="ghost"
      block
      class="justify-start"
      size="xl"
      aria-label="Language"
      :label="t('langChange')"
      @click="toggleLocales"
    />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>

</template>
