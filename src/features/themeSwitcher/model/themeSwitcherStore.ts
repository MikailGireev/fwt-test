import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStoreThemeSwither = defineStore('themeSwitcher', () => {
  const isLight = ref<boolean>(false);

  const toggleTheme = () => {
    isLight.value = !isLight.value;
    document.body.classList.toggle('light', isLight.value);
  };

  return { isLight, toggleTheme };
});
