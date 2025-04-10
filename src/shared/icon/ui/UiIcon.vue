<script setup lang="ts">
import { computed } from 'vue';
import { iconMap } from '../model/iconMaps';

interface Props {
  icon: 'light' | 'dark' | string;
}

const props = defineProps<Props>();
const emit = defineEmits(['click']);

const IconComponent = computed(() => iconMap[props.icon]);
</script>

<template>
  <span :class="`icon-${props.icon}`" @click="emit('click')">
    <component :is="IconComponent" class="icon"></component>
  </span>
</template>

<style scoped lang="scss">
span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background-color: #1a1818;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.icon-light {
  transition: background-color 0.3s ease-in-out;
  background-color: transparent;
}
</style>
