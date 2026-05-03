// ============================================
// REGISTRY — Course registration system
// ============================================
//
// Courses register themselves via registerCourse().
// All other systems (nav, router, state) read from the registry.

import type { CourseManifest, SectionContent } from './types';

const courses: Map<string, CourseManifest> = new Map();

/**
 * Register a course. Call from each course's manifest.
 */
export function registerCourse(manifest: CourseManifest): void {
  if (courses.has(manifest.id)) {
    console.warn(`Course "${manifest.id}" already registered, overwriting.`);
  }
  courses.set(manifest.id, manifest);
}

/**
 * Get all registered courses.
 */
export function getCourses(): CourseManifest[] {
  return Array.from(courses.values());
}

/**
 * Get a specific course by ID.
 */
export function getCourse(id: string): CourseManifest | undefined {
  return courses.get(id);
}

/**
 * Get a specific section from a course.
 */
export function getSection(courseId: string, sectionId: string): SectionContent | undefined {
  const course = courses.get(courseId);
  if (!course) return undefined;
  return course.sections.find(s => s.id === sectionId);
}

/**
 * Get all flashcards across all courses (for mix mode).
 */
export function getAllFlashcards(): Array<{ courseId: string; sectionId: string; card: import('./types').Flashcard }> {
  const result: Array<{ courseId: string; sectionId: string; card: import('./types').Flashcard }> = [];
  for (const course of courses.values()) {
    for (const section of course.sections) {
      for (const card of section.flashcards) {
        result.push({ courseId: course.id, sectionId: section.id, card });
      }
    }
  }
  return result;
}

/**
 * Get all quiz questions across all courses (for mix mode).
 */
export function getAllQuizQuestions(): Array<{ courseId: string; sectionId: string; question: import('./types').QuizQuestion }> {
  const result: Array<{ courseId: string; sectionId: string; question: import('./types').QuizQuestion }> = [];
  for (const course of courses.values()) {
    for (const section of course.sections) {
      for (const q of section.quiz) {
        result.push({ courseId: course.id, sectionId: section.id, question: q });
      }
    }
  }
  return result;
}

/**
 * Count total items across all courses.
 */
export function getTotalCounts(): { flashcards: number; quizzes: number; exercises: number } {
  let flashcards = 0, quizzes = 0, exercises = 0;
  for (const course of courses.values()) {
    for (const section of course.sections) {
      flashcards += section.flashcards.length;
      quizzes += section.quiz.length;
      exercises += section.exercises.length;
    }
  }
  return { flashcards, quizzes, exercises };
}
