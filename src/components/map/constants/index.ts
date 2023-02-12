import { IMap } from '@/components/map/interface';

import { amusement } from '@/components/map/data/amusement';
import { horror } from '@/components/map/data/horror';
import { regular } from '@/components/map/data/regular';

export const MAP_URL = '/maps';

export const MAP_LIST: { [key: number]: IMap } = {
  0: horror,
  1: amusement,
  2: regular,
};
