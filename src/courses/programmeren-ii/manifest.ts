// Programmeren 2 — Course Manifest

import type { CourseManifest } from '../../core/types';
import { iconCode } from '../../components/icons';
import { klassenOop } from './klassen-oop';
import { tijdscomplexiteit } from './tijdscomplexiteit';
import { queuesDatastructuren } from './queues-datastructuren';
import { recursie } from './recursie';

export const programmerenIICourse: CourseManifest = {
  id: 'programmeren-ii',
  name: 'Programmeren 2',
  shortName: 'Prog 2',
  description: 'Klassen & OOP, tijdscomplexiteit (Big-O), queues & datastructuren, en recursie in Python.',
  color: 'oklch(72% 0.16 160)',
  colorDim: 'oklch(55% 0.11 160)',
  colorSurface: 'oklch(20% 0.04 160)',
  icon: iconCode,
  examDate: '2026-05-07',
  sections: [klassenOop, tijdscomplexiteit, queuesDatastructuren, recursie],
};
