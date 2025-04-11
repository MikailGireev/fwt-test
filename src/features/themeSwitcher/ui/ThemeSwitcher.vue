<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStoreThemeSwither } from '../model/themeSwitcherStore';
import { Icon } from '@/shared/icon';
import { computed } from 'vue';
import { IconNames } from '@/shared/icon/model/iconMaps';

interface Props {
  color: 'light' | 'dark';
}

defineProps<Props>();

const store = useStoreThemeSwither();
const { toggleTheme } = store;
const { isLight } = storeToRefs(store);

const currentIcon = computed<IconNames.Light | IconNames.Dark>(() =>
  isLight.value ? IconNames.Dark : IconNames.Light
);
</script>

<template>
  <Icon width="40px" @click="toggleTheme" :icon="currentIcon" :key="currentIcon" />
</template>

<style scoped lang="scss"></style>
