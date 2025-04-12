import { defineStore } from 'pinia';
import type { Card, GalleryResponse } from '.';
import { ref } from 'vue';
import axios from 'axios';

export const useGalleryStore = defineStore('gallery', () => {
  const card = ref<Card[]>([]);
  const inputValue = ref<string>('');

  const isEmpty = ref<boolean>(false);
  const page = ref(1);
  const limit = 6;
  const totalPage = ref(0);

  const fetchCard = async () => {
    const res = await axios.get<GalleryResponse>(
      `https://fc8fbbdae7315d64.mokky.dev/gallery?title=*${inputValue.value}&page=${page.value}&limit=${limit}`
    );

    card.value = res.data.items;
    totalPage.value = Math.ceil(res.data.total / limit);

    if (res.data.items.length === 0) {
      isEmpty.value = true;
    } else {
      isEmpty.value = false;
    }

    return res.data.items;
  };

  return { card, fetchCard, inputValue, isEmpty };
});
