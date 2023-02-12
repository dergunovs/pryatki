import { IMap } from '@/map/interface';

import { amusement } from '@/map/data/amusement';
import { horror } from '@/map/data/horror';
import { training } from '@/map/data/training';

export const MAP_URL = '/maps';

export const MAP_LIST: { [key: number]: IMap } = {
  1: amusement,
  0: training,
  2: horror,
};
