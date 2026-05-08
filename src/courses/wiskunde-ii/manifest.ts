// Wiskunde 2 — Course Manifest

import type { CourseManifest } from '../../core/types';
import { iconCalculator } from '../../components/icons';
import { integralenAfgeleiden } from './integralen-afgeleiden';
import { beschrijvendeStatistiek } from './beschrijvende-statistiek';
import { meetniveaus } from './meetniveaus';
import { correlatieMethoden } from './correlatie-methoden';
import { lineaireRegressie } from './lineaire-regressie';

export const wiskundeIICourse: CourseManifest = {
  id: 'wiskunde-ii',
  name: 'Wiskunde 2',
  shortName: 'Wisk 2',
  description: 'Integralen & afgeleiden, beschrijvende statistiek, meetniveaus, correlatiemethoden en lineaire regressie.',
  color: 'oklch(72% 0.16 270)',
  colorDim: 'oklch(55% 0.11 270)',
  colorSurface: 'oklch(20% 0.04 270)',
  icon: iconCalculator,
  examDate: '2026-05-26',
  sections: [integralenAfgeleiden, beschrijvendeStatistiek, meetniveaus, correlatieMethoden, lineaireRegressie],
};
