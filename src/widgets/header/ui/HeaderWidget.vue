<script setup lang="ts">
import { useStoreThemeSwither } from '@/features/themeSwitcher/model/themeSwitcherStore';
import ThemeSwitcher from '@/features/themeSwitcher/ui/ThemeSwitcher.vue';
import { Container } from '@/shared/container';
import { Logo } from '@/shared/logo';
import { storeToRefs } from 'pinia';

const storeTheme = useStoreThemeSwither();
const { isLight } = storeToRefs(storeTheme);
</script>

<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <Logo :color="isLight ? 'light' : 'dark'" />
        <ThemeSwitcher color="dark" />
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
