import LightIcon from '../icons/light_icon.svg?component';
import DarkIcon from '../icons/dark_icon.svg?component';
import SearchDark from '../icons/search_dark.svg?component';
import SearchLight from '../icons/search_light.svg?component';

import type { Component } from 'vue';

export enum IconNames {
  Light = 'light',
  Dark = 'dark',
  SearchLight = 'searchLight',
  SearchDark = 'searchDark',
}

export const iconMap: Record<IconNames, Component> = {
  [IconNames.Light]: LightIcon,
  [IconNames.Dark]: DarkIcon,
  [IconNames.SearchLight]: SearchLight,
  [IconNames.SearchDark]: SearchDark,
};
