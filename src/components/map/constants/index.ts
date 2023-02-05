import iconFirst from '@/components/map/images/first-icon.png';
import mapFirst from '@/components/map/images/first-map.png';
import itemFirst1 from '@/components/map/images/first-item-1.png';
import itemFirst2 from '@/components/map/images/first-item-2.png';
import itemFirst3 from '@/components/map/images/first-item-3.png';
import itemFirst4 from '@/components/map/images/first-item-4.png';

import iconSecond from '@/components/map/images/second-icon.png';
import iconThird from '@/components/map/images/third-icon.png';
import iconFourth from '@/components/map/images/fourth-icon.png';
import iconFifth from '@/components/map/images/fifth-icon.png';
import iconSixth from '@/components/map/images/sixth-icon.png';

import { IMap } from '@/components/map/interface';

export const MAP_LIST: IMap[] = [
  {
    id: '0',
    title: 'Первая',
    icon: iconFirst,
    map: mapFirst,
    items: [itemFirst1, itemFirst2, itemFirst3, itemFirst4],
  },

  {
    id: '1',
    title: 'Вторая',
    icon: iconSecond,
    map: mapFirst,
    items: [itemFirst1, itemFirst2, itemFirst3, itemFirst4],
  },

  {
    id: '2',
    title: 'Третья',
    icon: iconThird,
    map: mapFirst,
    items: [itemFirst1, itemFirst2, itemFirst3, itemFirst4],
  },

  {
    id: '3',
    title: 'Четвертая',
    icon: iconFourth,
    map: mapFirst,
    items: [itemFirst1, itemFirst2, itemFirst3, itemFirst4],
  },

  {
    id: '4',
    title: 'Пятая',
    icon: iconFifth,
    map: mapFirst,
    items: [itemFirst1, itemFirst2, itemFirst3, itemFirst4],
  },

  {
    id: '5',
    title: 'Шестая',
    icon: iconSixth,
    map: mapFirst,
    items: [itemFirst1, itemFirst2, itemFirst3, itemFirst4],
  },
];
