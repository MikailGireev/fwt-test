<script setup lang="ts">
import { computed } from 'vue';
import { iconMap, IconNames } from '../model/iconMaps';

interface Props {
  icon: IconNames;
  width?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['click']);

const IconComponent = computed(() => iconMap[props.icon]);
</script>

<template>
  <span
    :style="{ width: props.width, height: props.width }"
    :class="`icon-${props.icon}`"
    @click="emit('click')"
  >
    <component :is="IconComponent" class="icon"></component>
  </span>
</template>

<style scoped lang="scss">
span {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;

  &.icon-light {
    background-color: var(--color-secondary);
  }

  &.icon-dark {
    background-color: transparent;
    &:hover {
      background-color: #f3f3f3;
    }
  }
}
</style>
