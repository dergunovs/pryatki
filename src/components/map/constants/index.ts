import snowIcon from '@/components/map/images/snow-icon.png';
import snowMap from '@/components/map/images/snow-map.png';
import snowItem1 from '@/components/map/images/snow-item-1.png';
import snowItem2 from '@/components/map/images/snow-item-2.png';
import snowItem3 from '@/components/map/images/snow-item-3.png';
import snowItem4 from '@/components/map/images/snow-item-4.png';

import { IMap } from '@/components/map/interface';

export const MAP_LIST: IMap[] = [
  { id: '0', title: 'Снежная', icon: snowIcon, map: snowMap, items: [snowItem1, snowItem2, snowItem3, snowItem4] },
];
