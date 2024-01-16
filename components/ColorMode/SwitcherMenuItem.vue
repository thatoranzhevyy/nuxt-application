<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  }
});
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-ph-moon-bold' : 'i-ph-sun-bold'"
      color="gray"
      variant="ghost"
      block
      class="justify-start"
      size="xl"
      aria-label="Theme"
      :label="isDark ? 'Переключить на дневную тему' : 'Переключить на ночную тему'"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
