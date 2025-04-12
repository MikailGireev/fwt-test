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
    <img :src="card.img" :alt="card.title" />
    <div :class="`card-title ${isLight ? 'light' : 'dark'}`">
      <Typography :size="isMobile ? '12px' : '16px'" class="card-title__title" :tag="Tags.P">
        {{ card.title.toUpperCase() }}
      </Typography>
      <Typography :size="isMobile ? '8px' : '12px'" class="card-title__year" :tag="Tags.SPAN">
        {{ card.year }}
      </Typography>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  img {
    width: 100%;
    max-width: 392px;
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
    bottom: 4.2px;
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
