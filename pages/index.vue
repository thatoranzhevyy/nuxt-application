<script setup lang="ts">
import useElectron from "~/composables/useElectron";
</script>

<template>
  <NuxtLink to="/login">
    <UButton label="Login"/>
  </NuxtLink>

  <p>isElectron: {{ useElectron().isElectron ? "🟢" : "🔴" }}</p>

</template>

<style scoped>

</style>