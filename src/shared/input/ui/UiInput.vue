<script setup lang="ts">
interface Props {
  placeholder?: string;
  type?: string;
  theme?: string;
}

defineProps<Props>();
const emits = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="input-container">
    <slot name="icon"></slot>
    <input
      @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
      :class="`input ${theme}`"
      :type="type"
      :placeholder="placeholder"
    />
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
    border: 1px solid var(--color-primary-light);
    border-radius: 4px;
    color: var(--color-primary-gray);
    outline: none;

    &.light {
      background-color: var(--color-secondary);
      border: none;
      color: var(--color-primary-light);

      &:focus {
        border: 1px solid var(--color-primary-light);
      }
    }

    &.dark {
      &:focus {
        border: 1px solid var(--color-primary-gray);
      }
    }
  }

  :deep(.icon) {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    z-index: 1;
  }
}

@media screen and (max-width: 1239px) {
  .input {
    max-width: 296px;
  }
}
@media screen and (max-width: 767px) {
  .input {
    max-width: 280px;
  }
}
</style>
