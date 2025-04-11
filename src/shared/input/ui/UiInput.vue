<script setup lang="ts">
interface Props {
  placeholder?: string;
  type?: string;
  theme?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="input-container">
    <slot name="icon"></slot>
    <input :class="`input ${theme}`" :type="type" :placeholder="placeholder" />
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  position: relative;
  width: 100%;
  max-width: 336px;

  .input {
    position: relative;
    font-size: 14px;
    width: 100%;
    padding: 8px 0px 8px 30px;
    border: none;
    border-radius: 4px;

    &.light {
      background-color: #1a1818;
    }
  }

  :deep(.icon) {
    position: absolute;
    top: 50%;
    left: 22px;
    transform: translateY(-50%);
    z-index: 1;
  }
}
</style>
