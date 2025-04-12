<script setup lang="ts">
import { Pagination } from '@/shared/pagination';
import { Gallery } from '@/widgets/gallery';
import { Header } from '@/widgets/header';
</script>

<template>
  <Header />
  <main class="main">
    <Gallery />
    <Pagination />
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
