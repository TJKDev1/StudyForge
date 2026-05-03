// ============================================
// COURSE — Course overview page
// ============================================

import { formatDaysUntil } from "../components/common";
import {
	iconBox,
	iconCards,
	iconClock,
	iconCode,
	iconLayers,
	iconQuestion,
} from "../components/icons";
import { getLeitnerDistribution, getSrsStats } from "../core/srs";
import { getAllCardReviews, getSectionCompletion } from "../core/state";
import type { CourseManifest } from "../core/types";

export function renderCourse(
	course: CourseManifest,
	content: HTMLElement,
): void {
	const allReviews = getAllCardReviews();
	const srsStats = getSrsStats(allReviews, course.id);
	const leitner = getLeitnerDistribution(allReviews, course.id);
	const maxLeitner = Math.max(...leitner, 1);

	const page = document.createElement("div");
	page.className = "page";

	const totalCards = course.sections.reduce(
		(a, s) => a + s.flashcards.length,
		0,
	);
	const totalQuiz = course.sections.reduce((a, s) => a + s.quiz.length, 0);
	const totalExercises = course.sections.reduce(
		(a, s) => a + s.exercises.length,
		0,
	);

	page.innerHTML = `
    <div class="page__header">
      <div class="page__subject" style="color:${course.color}">${course.icon} ${course.shortName}</div>
      <h2 class="page__title">${course.name}</h2>
      <p class="page__desc">${course.description}</p>
      ${course.examDate ? `<div class="exam-countdown" style="--accent:${course.color}">${iconClock} Toets over ${formatDaysUntil(course.examDate)}</div>` : ""}
    </div>

    <div class="course-stats">
      <div class="stat-card"><div class="stat-card__value">${totalCards}</div><div class="stat-card__label">Flashcards</div></div>
      <div class="stat-card"><div class="stat-card__value">${totalQuiz}</div><div class="stat-card__label">Quizvragen</div></div>
      <div class="stat-card"><div class="stat-card__value">${totalExercises}</div><div class="stat-card__label">Oefeningen</div></div>
      <div class="stat-card"><div class="stat-card__value">${srsStats.due}</div><div class="stat-card__label">Te herhalen</div></div>
    </div>

    ${
			srsStats.total > 0
				? `
      <div class="section" style="--accent:${course.color}">
        <h3 class="section__title">${iconBox} Leitner Bakken</h3>
        <div class="leitner-chart">
          ${leitner
						.map(
							(count, i) => `
            <div class="leitner-chart__bar">
              <div class="leitner-chart__fill" style="height:${(count / maxLeitner) * 100}%;background:${course.color};opacity:${0.4 + i * 0.15}"></div>
              <div class="leitner-chart__label">Bak ${i + 1}</div>
              <div class="leitner-chart__count">${count}</div>
            </div>
          `,
						)
						.join("")}
        </div>
        <p class="leitner-chart__help">Bak 1 = nieuw/moeilijk → Bak 5 = geleerd. Kaarten schuiven op bij goed antwoord.</p>
      </div>
    `
				: ""
		}

    <div class="section">
      <h3 class="section__title" style="color:${course.color}">${iconLayers} Secties</h3>
      <div class="section-grid">
        ${course.sections
					.map((s) => {
						const pct = getSectionCompletion(
							course.id,
							s.id,
							s.flashcards.length,
							s.quiz.length,
							s.checklist.length,
							s.exercises.length,
						);
						return `
            <a class="section-card" href="#/course/${course.id}/${s.id}" aria-label="Open sectie ${s.title}">
              <div class="section-card__title">${s.title}</div>
              <div class="section-card__desc">${s.desc}</div>
              <div class="section-card__meta">
                ${s.flashcards.length > 0 ? `<span>${iconCards} ${s.flashcards.length}</span>` : ""}
                ${s.quiz.length > 0 ? `<span>${iconQuestion} ${s.quiz.length}</span>` : ""}
                ${s.exercises.length > 0 ? `<span>${iconCode} ${s.exercises.length}</span>` : ""}
              </div>
              <div class="section-card__progress">
                <div class="progress-bar"><div class="progress-bar__fill" style="width:${Math.round(pct * 100)}%;background:${course.color}"></div></div>
                <span>${Math.round(pct * 100)}%</span>
              </div>
            </a>
          `;
					})
					.join("")}
      </div>
    </div>
  `;

	content.innerHTML = "";
	content.appendChild(page);
	window.scrollTo({ top: 0, behavior: "smooth" });
}
