// ============================================
// SECTION — Section detail page
// ============================================

import type { CourseManifest, SectionContent } from '../core/types';
import { renderTheory } from '../components/theory';
import { renderFlashcards } from '../components/flashcard';
import { renderQuiz } from '../components/quiz';
import { renderExercises } from '../components/practice';
import { renderChecklist } from '../components/checklist';
import { createDivider } from '../components/common';
import { iconBook, iconCards, iconQuestion, iconCode, sectionIcon } from '../components/icons';

export function renderSection(
  course: CourseManifest,
  section: SectionContent,
  content: HTMLElement,
): void {
  const page = document.createElement('div');
  page.className = 'page';

  page.innerHTML = `
    <div class="page__header">
      <div class="page__subject" style="color:${course.color}">${course.icon} ${course.name}</div>
      <h2 class="page__title">${section.title}</h2>
      <p class="page__desc">${section.desc}</p>
    </div>
  `;

  // Theory
  if (section.theory.length > 0) {
    const sec = document.createElement('div');
    sec.className = 'section';
    sec.innerHTML = `<h3 class="section__title">${sectionIcon(iconBook, course.color, course.colorSurface)}Theorie</h3>`;
    renderTheory(section.theory, sec);
    page.appendChild(sec);
    page.appendChild(createDivider());
  }

  // Flashcards
  if (section.flashcards.length > 0) {
    const sec = document.createElement('div');
    sec.className = 'section';
    sec.innerHTML = `<h3 class="section__title">${sectionIcon(iconCards, course.color, course.colorSurface)}Flashcards</h3>`;
    renderFlashcards(section.flashcards, course.id, section.id, sec);
    page.appendChild(sec);
    page.appendChild(createDivider());
  }

  // Quiz
  if (section.quiz.length > 0) {
    const sec = document.createElement('div');
    sec.className = 'section';
    sec.innerHTML = `<h3 class="section__title">${sectionIcon(iconQuestion, course.color, course.colorSurface)}Quiz</h3>`;
    renderQuiz(section.quiz, course.id, section.id, sec);
    page.appendChild(sec);
    page.appendChild(createDivider());
  }

  // Exercises
  if (section.exercises.length > 0) {
    const sec = document.createElement('div');
    sec.className = 'section';
    sec.innerHTML = `<h3 class="section__title">${sectionIcon(iconCode, course.color, course.colorSurface)}Oefeningen</h3>`;
    renderExercises(section.exercises, course.id, section.id, sec);
    page.appendChild(sec);
    page.appendChild(createDivider());
  }

  // Checklist
  if (section.checklist.length > 0) {
    const sec = document.createElement('div');
    sec.className = 'section';
    renderChecklist(section.checklist, course.id, section.id, 'Herhaalchecklist', sec);
    page.appendChild(sec);
  }

  content.innerHTML = '';
  content.appendChild(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
