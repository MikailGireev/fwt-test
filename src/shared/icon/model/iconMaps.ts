import LightIcon from '../icons/light_icon.svg?component';
import DarkIcon from '../icons/dark_icon.svg?component';
import type { Component } from 'vue';

export const iconMap: Record<string, Component> = {
  light: DarkIcon,
  dark: LightIcon,
};
