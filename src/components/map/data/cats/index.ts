import { IMap } from '@/components/map/interface';

import icon from './icon.png';
import background from './background.jpg';

import item1 from './item1.png';
import item2 from './item2.png';
import item3 from './item3.png';
import item4 from './item4.png';
import item5 from './item5.png';
import item6 from './item6.png';

export const cats: IMap = {
  id: 4,
  title: 'Мир котов',
  icon,
  background,
  items: [item1, item2, item3, item4, item5, item6],
  itemsToFind: 3,
  coins: 350,
};