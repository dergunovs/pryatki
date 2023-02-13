import { IMap } from '@/map/interface';

import { amusement } from '@/map/data/amusement';
import { horror } from '@/map/data/horror';
import { training } from '@/map/data/training';
import { mario } from '@/map/data/mario';
import { cats } from '@/map/data/cats';
import { forest } from '@/map/data/forest';

export const MAP_URL = '/maps';

export const MAP_LIST: { [key: number]: IMap } = {
  1: amusement,
  0: training,
  2: horror,
  3: mario,
  4: cats,
  5: forest,
};
