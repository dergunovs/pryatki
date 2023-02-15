import { IPlayerItem } from '@/player/interface';

import { base } from '@/player/data/base';
import { girl } from '@/player/data/girl';
import { cabbage } from '@/player/data/cabbage';
import { ninja } from '@/player/data/ninja';

export const PLAYER_ITEMS: { [key: number]: IPlayerItem } = {
  0: base,
  1: girl,
  2: cabbage,
  3: ninja,
};
