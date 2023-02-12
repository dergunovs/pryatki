import { IPlayerItem } from '@/player/interface';

import { base } from '@/player/data/base';
import { fake1 } from '@/player/data/fake1';
import { fake2 } from '@/player/data/fake2';
import { fake3 } from '@/player/data/fake3';

export const PLAYER_ITEMS: { [key: number]: IPlayerItem } = {
  0: base,
  1: fake1,
  2: fake2,
  3: fake3,
};
