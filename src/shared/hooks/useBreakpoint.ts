import { onMounted, onUnmounted, ref } from 'vue';

export const useBreakpoint = () => {
  const isMobile = ref<boolean>(false);
  const isTablet = ref<boolean>(false);

  const check = () => {
    const width = window.innerWidth;
    isMobile.value = width <= 767;
    isTablet.value = width > 767 && width <= 1239;
  };

  onMounted(() => {
    check();
    window.addEventListener('resize', check);
  });

  onUnmounted(() => {
    window.addEventListener('resize', check);
  });

  return { isMobile, isTablet };
};
