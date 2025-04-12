<script setup lang="ts">
import { Input } from '@/shared/input';
import { Icon } from '@/shared/icon';
import { IconNames } from '@/shared/icon/model/iconMaps';
import { Container } from '@/shared/container';
import { useBreakpoint } from '@/shared/hooks/useBreakpoint';
import { Tags, Typography } from '@/shared/typography';

import { storeToRefs } from 'pinia';

import { useStoreThemeSwither } from '@/features/themeSwitcher';

import { onMounted, watch } from 'vue';
import { useGalleryStore } from '../model/galleryStore';
import { Card } from '@/widgets/card';

const storeTheme = useStoreThemeSwither();
const { isLight } = storeToRefs(storeTheme);

const storeGallery = useGalleryStore();
const { fetchCard } = storeGallery;
const { card, inputValue, isEmpty } = storeToRefs(storeGallery);

const { isMobile } = useBreakpoint();

onMounted(async () => {
  await fetchCard();
});

let timer: ReturnType<typeof setTimeout>;
watch(inputValue, () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    fetchCard();
  }, 500);
});
</script>

<template>
  <div class="gallery">
    <Container>
      <div class="gallery-content">
        <Input
          v-model="inputValue"
          class="input"
          :theme="isLight ? 'dark' : 'light'"
          placeholder="Painting title"
          type="text"
          ><template #icon>
            <Icon :icon="isLight ? IconNames.SearchLight : IconNames.SearchDark" /></template
        ></Input>
        <div v-if="!isEmpty" class="gallery-card">
          <Card v-for="item in card" :key="item.id" :card="item" />
        </div>
        <div v-else class="empty">
          <Typography color="primary-light" :size="isMobile ? '16px' : '20px'" :tag="Tags.P"
            >No matches for <b>{{ inputValue }}</b></Typography
          >
          <Typography color="primary-gray" :size="isMobile ? '14px' : '16px'" :tag="Tags.SPAN"
            >Please try again with a different spelling or keywords.</Typography
          >
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="scss">
.gallery {
  margin-top: 44px;
  margin-bottom: 40px;

  &-content {
    display: flex;
    flex-direction: column;
  }

  &-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .input {
    margin-bottom: 20px;
    width: 100%;
  }

  .empty {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

.gallery:deep(.input-container) {
  align-self: flex-end;
}

@media screen and (max-width: 1239px) {
  .gallery-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
@media screen and (max-width: 767px) {
  .gallery-card {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}
</style>
