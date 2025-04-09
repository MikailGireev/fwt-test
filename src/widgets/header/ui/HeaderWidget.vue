<script setup lang="ts">
import { Container } from '@/shared/container';
import { Icon } from '@/shared/icon';
import { Logo } from '@/shared/logo';
</script>

<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <Logo color="light" />
        <Icon icon="theme-light" />
      </div>
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 80px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
