<script setup lang="ts">
import { computed } from 'vue';
import type { Tags } from '../types';

interface Props {
  tag: Tags;
  color?: string;
}

const props = defineProps<Props>();
const currentTag = computed(() => props.tag);
</script>

<template>
  <component :class="`typography-${color} typography-${tag}`" :is="currentTag || 'p'">
    <slot></slot>
  </component>
</template>

<style scoped lang="scss"></style>
