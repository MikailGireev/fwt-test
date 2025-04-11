<script setup lang="ts">
import { Gallery } from '@/widgets/gallery';
import { Header } from '@/widgets/header';
</script>

<template>
  <Header />
  <main class="main">
    <Gallery />
  </main>
</template>

<style scoped lang="scss">
.home {
  color: var(--color-primary-light);
}
</style>
