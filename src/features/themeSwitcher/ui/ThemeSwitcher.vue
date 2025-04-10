<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStoreThemeSwither } from '../model/themeSwitcherStore';
import { Icon } from '@/shared/icon';
import { computed } from 'vue';

interface Props {
  color: 'light' | 'dark';
}

defineProps<Props>();

const store = useStoreThemeSwither();
const { toggleTheme } = store;
const { isLight } = storeToRefs(store);

const currentIcon = computed<'light' | 'dark'>(() => (isLight.value ? 'light' : 'dark'));
</script>

<template>
  <Icon @click="toggleTheme" :icon="currentIcon" :key="currentIcon" />
</template>

<style scoped lang="scss"></style>
