<script setup lang="ts">
import { useStoreThemeSwither } from '@/features/themeSwitcher';
import { Icon } from '@/shared/icon';
import { IconNames } from '@/shared/icon/model/iconMaps';
import { useGalleryStore } from '@/widgets/gallery/model/galleryStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const storeGallery = useGalleryStore();
const { setPage } = storeGallery;
const { totalPage, page } = storeToRefs(storeGallery);

const storeTheme = useStoreThemeSwither();
const { isLight } = storeToRefs(storeTheme);

const visiblePages = computed(() => {
  const total = totalPage.value;
  const current = page.value;
  const pages: (number | string)[] = [];

  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  pages.push(1);
  if (current > 3) pages.push('...');
  if (current > 2 && current < total - 1) pages.push(current);
  if (current < total - 2) pages.push('...');
  pages.push(total);

  return pages;
});
</script>

<template>
  <div :class="`pagination ${isLight ? 'light' : 'dark'}`">
    <button @click="setPage(page - 1)" :disabled="page === 1">
      <Icon class="arrow" :icon="IconNames.LeftArrow" />
    </button>
    <div class="pagination__pages">
      <button
        v-for="p in visiblePages"
        :key="p"
        @click="typeof p === 'number' && setPage(p)"
        :disabled="p === '...'"
        :class="{ active: p === page }"
      >
        {{ p }}
      </button>
    </div>
    <button @click="setPage(page + 1)" :disabled="page === totalPage">
      <Icon class="arrow" :icon="IconNames.RightArrow" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  --hover-underline-color: var(--color-primary-gray);

  display: flex;
  gap: 20px;
  margin-bottom: 100px;

  .pagination__pages {
    display: flex;
    gap: 4px;
    align-items: center;

    button {
      position: relative;
      transition: all 0.2s ease-in-out;

      &:not(.active):hover::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: var(--hover-underline-color);
      }
    }
  }

  button {
    font-size: 16px;
    border: none;
    background-color: transparent;
    color: var(--color-primary-light);
    cursor: pointer;
    padding: 1px 8px;

    &:disabled {
      color: var(--color-primary-gray);
      cursor: not-allowed;
    }
  }

  .active {
    background-color: var(--color-secondary);
    color: var(--color-primary-light);
    border-radius: 4px;
  }
}

.light {
  --hover-underline-color: var(--color-main-gray);

  button {
    color: var(--color-primary-gray);
  }

  :deep(svg path) {
    transition: fill 0.3s ease-in-out;
    fill: var(--color-main-gray);
  }

  :deep(svg:hover path) {
    fill: var(--hover-underline-color);
  }

  .active {
    background-color: #1212120d;
    color: var(--color-primary-gray);
  }
}
</style>
