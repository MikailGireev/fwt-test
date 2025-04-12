<script setup lang="ts">
import { computed } from 'vue';
import type { Tags } from '../types';

interface Props {
  tag: Tags;
  color?: string;
  size?: string;
}

const props = defineProps<Props>();
const currentTag = computed(() => props.tag);
</script>

<template>
  <component
    :style="{ fontSize: props.size }"
    :class="`typography typography-${tag} typography-${color}`"
    :is="currentTag || 'p'"
  >
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.typography-primary-light {
  color: var(--color-primary-light);
}
.typography-primary-gray {
  color: var(--color-primary-gray);
}
</style>
