import { IMap } from '@/map/interface';

import { amusement } from '@/map/data/amusement';
import { horror } from '@/map/data/horror';
import { regular } from '@/map/data/regular';

export const MAP_URL = '/maps';

export const MAP_LIST: { [key: number]: IMap } = {
  0: horror,
  1: amusement,
  2: regular,
};
