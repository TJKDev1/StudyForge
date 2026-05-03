// ============================================
// NAV — Sidebar navigation (dynamic from registry)
// ============================================

import { getCourses } from "../core/registry";
import { getCurrentRoute, navigate } from "../core/router";
import { getSectionCompletion } from "../core/state";
import { iconRefresh, iconShuffle } from "./icons";

export function renderNav(
	navContainer: HTMLElement,
	closeSidebar: () => void,
): void {
	const currentRoute = getCurrentRoute();
	const courses = getCourses();

	navContainer.innerHTML =
		courses
			.map(
				(course) => `
    <div class="nav-group" style="--accent:${course.color};--accent-dim:${course.colorDim}">
      <div class="nav-group__label" style="color:${course.colorDim}">${course.name}</div>
      <button type="button" class="nav-item nav-item--course${currentRoute === `#/course/${course.id}` ? " nav-item--active" : ""}" data-route="#/course/${course.id}" aria-current="${currentRoute === `#/course/${course.id}` ? "page" : "false"}" style="${currentRoute === `#/course/${course.id}` ? `color:${course.color}` : ""}">
        ${course.icon} Overzicht
      </button>
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
					const route = `#/course/${course.id}/${s.id}`;
					const active = currentRoute === route;
					return `<button type="button" class="nav-item${active ? " nav-item--active" : ""}" data-route="${route}" aria-current="${active ? "page" : "false"}" style="${active ? `color:${course.color}` : ""}">
          ${s.title}
          <span class="nav-item__progress" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20"><circle class="nav-item__progress-bg" cx="10" cy="10" r="7"/><circle class="nav-item__progress-fill" cx="10" cy="10" r="7" stroke-dasharray="${2 * Math.PI * 7}" stroke-dashoffset="${2 * Math.PI * 7 * (1 - pct)}" style="stroke:${course.color}"/></svg></span>
        </button>`;
				})
				.join("")}
    </div>
  `,
			)
			.join("") +
		`
    <div class="nav-group nav-group--tools">
      <div class="nav-group__label">Tools</div>
      <button type="button" class="nav-item${currentRoute === "#/review" ? " nav-item--active" : ""}" data-route="#/review" aria-current="${currentRoute === "#/review" ? "page" : "false"}">${iconRefresh} SRS Review</button>
      <button type="button" class="nav-item${currentRoute === "#/mix" ? " nav-item--active" : ""}" data-route="#/mix" aria-current="${currentRoute === "#/mix" ? "page" : "false"}">${iconShuffle} Mix Mode</button>
    </div>
  `;

	navContainer.querySelectorAll(".nav-item").forEach((item) => {
		item.addEventListener("click", () => {
			const route = (item as HTMLElement).dataset.route!;
			navigate(route);
			closeSidebar();
		});
	});
}
