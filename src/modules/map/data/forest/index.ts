import { IMap } from '@/map/interface';

import icon from './icon.png';
import item1 from './item1.png';
import item2 from './item2.png';
import item3 from './item3.png';
import item4 from './item4.png';
import item5 from './item5.png';
import item6 from './item6.png';

export const forest: IMap = {
  id: 5,
  title: 'Лес',
  icon,
  items: [item1, item2, item3, item4, item5, item6],
  itemsToFind: 4,
  coins: 500,
};
