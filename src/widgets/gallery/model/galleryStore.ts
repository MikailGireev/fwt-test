import { defineStore } from 'pinia';
import type { Card } from '.';
import { ref } from 'vue';
import axios from 'axios';

export const useGalleryStore = defineStore('gallery', () => {
  const card = ref<Card[]>([]);

  const fetchCard = async () => {
    const res = await axios.get<Card[]>('https://fc8fbbdae7315d64.mokky.dev/gallery');
    card.value = res.data;

    return res.data;
  };

  return { card, fetchCard };
});
