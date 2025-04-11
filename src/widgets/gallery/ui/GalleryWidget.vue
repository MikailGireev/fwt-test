<script setup lang="ts">
import { Input } from '@/shared/input';
import { Icon } from '@/shared/icon';
import { IconNames } from '@/shared/icon/model/iconMaps';

import { storeToRefs } from 'pinia';

import { useStoreThemeSwither } from '@/features/themeSwitcher';
import { Container } from '@/shared/container';
import { onMounted } from 'vue';
import { useGalleryStore } from '../model/galleryStore';
import { Card } from '@/widgets/card';

const storeTheme = useStoreThemeSwither();
const { isLight } = storeToRefs(storeTheme);

const storeGallery = useGalleryStore();
const { fetchCard } = storeGallery;
const { card } = storeToRefs(storeGallery);

onMounted(async () => {
  await fetchCard();
});
</script>

<template>
  <div class="gallery">
    <Container>
      <div class="gallery-content">
        <Input
          class="input"
          :theme="isLight ? 'dark' : 'light'"
          placeholder="Painting title"
          type="text"
          ><template #icon>
            <Icon
              width="16px"
              :icon="isLight ? IconNames.SearchLight : IconNames.SearchDark" /></template
        ></Input>
        <div class="gallery-card">
          <Card v-for="item in card" :key="item.id" :card="item" />
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="scss">
.gallery {
  margin-top: 40px;
  margin-bottom: 40px;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .input {
    margin-bottom: 20px;
  }
}
</style>
