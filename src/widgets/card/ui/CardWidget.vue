<script setup lang="ts">
import { Typography } from '@/shared/typography';
import { Tags } from '@/shared/typography';

interface Card {
  title: string;
  img: string;
  year: string;
}

interface Props {
  card: Card;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <img :src="card.img" :alt="card.title" />
    <div class="card-title">
      <Typography :tag="Tags.P">
        {{ card.title }}
      </Typography>
      <Typography :tag="Tags.SPAN">
        {{ card.year }}
      </Typography>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
