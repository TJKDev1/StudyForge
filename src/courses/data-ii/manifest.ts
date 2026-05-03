// Data II — Course Manifest

import type { CourseManifest } from '../../core/types';
import { iconDatabase } from '../../components/icons';
import { sqlBasis } from './sql-basis';
import { sqlJoins } from './sql-joins';
import { knn } from './knn';
import { normalisatie } from './normalisatie';

export const dataIICourse: CourseManifest = {
  id: 'data-ii',
  name: 'Data II',
  shortName: 'Data',
  description: 'SQL queries, JOINs, subqueries, KNN classificatie, normaliseren, standaardiseren en regressie.',
  color: 'oklch(72% 0.16 25)',
  colorDim: 'oklch(55% 0.11 25)',
  colorSurface: 'oklch(20% 0.04 25)',
  icon: iconDatabase,
  examDate: '2026-05-04',
  sections: [sqlBasis, sqlJoins, knn, normalisatie],
};
