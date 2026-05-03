// ============================================
// HOME — Dashboard with all courses
// ============================================

import heroImageUrl from "../assets/studyforge-hero.png";
import { daysUntil, formatDaysUntil } from "../components/common";
import { iconClock, iconFlame, iconRefresh } from "../components/icons";
import { getCourses } from "../core/registry";
import { navigate } from "../core/router";
import { getDueCards, getSrsStats } from "../core/srs";
import {
	getAllCardReviews,
	getCourseCompletion,
	getState,
} from "../core/state";

export function renderHome(content: HTMLElement): void {
	const courses = getCourses();
	const state = getState();
	const allReviews = getAllCardReviews();
	const totalDue = getDueCards(allReviews).length;

	const page = document.createElement("div");
	page.className = "page";

	page.innerHTML = `
    <section class="home-hero" aria-labelledby="home-title">
      <img
        class="home-hero__image"
        src="${heroImageUrl}"
        alt=""
        width="1792"
        height="1024"
        decoding="async"
        fetchpriority="high"
      />
      <div class="home-hero__content">
        <p class="home-hero__eyebrow">Slim studeren · SRS · Interleaving</p>
        <h2 id="home-title" class="home-hero__title">StudyForge</h2>
        <p class="home-hero__desc">Smeed je kennis met gerichte flashcards, reviewsessies en voortgang per vak.</p>
      </div>
    </section>

    ${
			state.studyStreak > 0
				? `
      <div class="streak-banner">
        <span class="streak-banner__fire">${iconFlame}</span>
        <span class="streak-banner__count">${state.studyStreak} dag${state.studyStreak !== 1 ? "en" : ""} streak</span>
      </div>
    `
				: ""
		}

    ${
			totalDue > 0
				? `
      <button type="button" class="due-banner" id="start-review">
        <span class="due-banner__icon" aria-hidden="true">${iconRefresh}</span>
        <span class="due-banner__text">
          <strong>${totalDue} kaart${totalDue !== 1 ? "en" : ""}</strong> te herhalen vandaag
        </span>
        <span class="btn btn--primary btn--sm">Start Review</span>
      </button>
    `
				: ""
		}

    <div class="home-grid">
      ${courses
				.map((course) => {
					const completion = getCourseCompletion(course.id, course.sections);
					const srsStats = getSrsStats(allReviews, course.id);
					const examDays = course.examDate ? daysUntil(course.examDate) : null;

					return `
          <a class="exam-card" href="#/course/${course.id}" aria-label="Open vak ${course.name}" style="--accent:${course.color};--accent-dim:${course.colorDim};--accent-surface:${course.colorSurface}">
            ${
							course.examDate
								? `<div class="exam-card__countdown ${examDays !== null && examDays <= 7 ? "exam-card__countdown--urgent" : ""}">
              ${iconClock} ${formatDaysUntil(course.examDate)}
            </div>`
								: ""
						}
            <div class="exam-card__subject" style="color:${course.color}">${course.icon} ${course.shortName}</div>
            <div class="exam-card__title">${course.name}</div>
            <div class="exam-card__desc">${course.description}</div>
            <div class="exam-card__stats">
              <span class="exam-card__stat">${course.sections.length} secties</span>
              <span class="exam-card__stat">${course.sections.reduce((a, s) => a + s.flashcards.length, 0)} kaarten</span>
              ${srsStats.due > 0 ? `<span class="exam-card__stat exam-card__stat--due">${srsStats.due} due</span>` : ""}
            </div>
            <div class="exam-card__progress">
              <div class="progress-bar exam-card__progress-bar"><div class="progress-bar__fill" style="width:${Math.round(completion * 100)}%;background:${course.color}"></div></div>
              <span class="exam-card__progress-pct">${Math.round(completion * 100)}%</span>
            </div>
            ${
							srsStats.total > 0
								? `
              <div class="leitner-mini">
                ${[1, 2, 3, 4, 5]
									.map((box) => {
										const count = Object.values(allReviews).filter(
											(r) => r.courseId === course.id && r.leitnerBox === box,
										).length;
										return `<div class="leitner-mini__box" title="Box ${box}: ${count} kaarten"><span>${count}</span></div>`;
									})
									.join("")}
              </div>
            `
								: ""
						}
          </a>
        `;
				})
				.join("")}
    </div>
  `;

	// Review banner click
	page.querySelector("#start-review")?.addEventListener("click", () => {
		navigate("#/review");
	});

	content.innerHTML = "";
	content.appendChild(page);
	window.scrollTo({ top: 0, behavior: "smooth" });
}
