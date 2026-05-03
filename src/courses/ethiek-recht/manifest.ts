// Ethiek & Recht — Course Manifest

import type { CourseManifest } from '../../core/types';
import { iconScale } from '../../components/icons';
import { belang } from './belang';
import { avgBeginselen } from './avg-beginselen';
import { avgGrondslagen } from './avg-grondslagen';
import { aiAct } from './ai-act';

export const ethiekRechtCourse: CourseManifest = {
  id: 'ethiek-recht',
  name: 'Ethiek & Recht',
  shortName: 'Ethiek',
  description: 'AVG-beginselen, grondslagen, AI Act risicocategorieën en casusaanpak.',
  color: 'oklch(72% 0.14 18)',
  colorDim: 'oklch(55% 0.10 18)',
  colorSurface: 'oklch(20% 0.035 18)',
  icon: iconScale,
  examDate: '2026-05-04',
  sections: [belang, avgBeginselen, avgGrondslagen, aiAct],
};
