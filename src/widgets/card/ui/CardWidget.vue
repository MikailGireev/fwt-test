<script setup lang="ts">
import { useStoreThemeSwither } from '@/features/themeSwitcher';
import { useBreakpoint } from '@/shared/hooks/useBreakpoint';
import { Typography } from '@/shared/typography';
import { Tags } from '@/shared/typography';
import { storeToRefs } from 'pinia';

interface Card {
  title: string;
  img: string;
  year: string;
}

interface Props {
  card: Card;
}

defineProps<Props>();

const storeTheme = useStoreThemeSwither();
const { isLight } = storeToRefs(storeTheme);

const { isMobile } = useBreakpoint();
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="card.img" :alt="card.title" />
    </div>
    <div :class="`card-title ${isLight ? 'light' : 'dark'}`">
      <div class="card-title__content">
        <Typography :size="isMobile ? '12px' : '16px'" class="card-title__title" :tag="Tags.P">
          {{ card.title.toUpperCase() }}
        </Typography>
        <Typography :size="isMobile ? '8px' : '12px'" class="card-title__year" :tag="Tags.SPAN">
          {{ card.year }}
        </Typography>
      </div>
      <div class="card-title__lorem">
        <Typography :size="isMobile ? '12px' : '16px'" class="card-title__title" :tag="Tags.P">
          JEAN-HONORE FRAGONARD
        </Typography>
        <Typography :size="isMobile ? '8px' : '12px'" class="card-title__year" :tag="Tags.SPAN">
          LOUVRE MUSEUM
        </Typography>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;

  &:deep(.typography-p) {
    font-family: 'Cormorant SC';
  }

  .card-image {
    overflow: hidden;
    border-radius: 4px;
    transform-style: preserve-3d;
    background-color: var(--color-main-dark);

    img {
      width: 100%;
      display: block;
      transition: transform 0.5s ease;
    }
  }

  &:hover .card-image img {
    transform: scale(1.1) translateZ(0);
  }

  &-title {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 300px;
    height: 82px;
    padding: 20px 0;
    padding-left: 20px;
    position: absolute;
    left: 0;
    bottom: 0px;
  }

  &-title.dark {
    background-color: var(--color-main-dark);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 20px;
      height: 42px;
      width: 2px;
      background-color: var(--color-gold);
    }

    .card-title__year {
      color: var(--color-gold);
    }
  }

  &-title.light {
    background-color: var(--color-main-light);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 20px;
      height: 42px;
      width: 2px;
      background-color: var(--color-red);
    }
    .card-title__year {
      color: var(--color-red);
    }
  }

  &-title__content {
    opacity: 1;
    transition: all 0.5s ease-in-out;
    transform: translateY(0);
  }

  &-title__lorem {
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.5s ease-in-out;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  &:hover {
    .card-title__content {
      opacity: 0;
      transform: translateY(50px);
    }

    .card-title__lorem {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

@media screen and (max-width: 1239px) {
  img {
    width: 100%;
    max-width: 352px;
  }

  .card-title {
    height: 66px;
    padding: 12px 12px;
  }

  .card-title::before {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  img {
    width: 100%;
    max-width: 280px;
  }

  .card-title {
    height: 45px;
    width: 236px;
    padding: 8px 12px;
  }

  .card-title::before {
    display: none;
  }
}
</style>
