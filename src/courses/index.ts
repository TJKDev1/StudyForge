// ============================================
// COURSES INDEX — Auto-registration
// ============================================
//
// Import this file once in main.ts and all courses are registered.
// To add a new course:
//   1. Create courses/my-course/manifest.ts
//   2. Import and register below

import { registerCourse } from '../core/registry';
import { dataIICourse } from './data-ii/manifest';
import { ethiekRechtCourse } from './ethiek-recht/manifest';
import { programmerenIICourse } from './programmeren-ii/manifest';
import { wiskundeIICourse } from './wiskunde-ii/manifest';

registerCourse(dataIICourse);
registerCourse(ethiekRechtCourse);
registerCourse(programmerenIICourse);
registerCourse(wiskundeIICourse);

