// ============================================
// CHECKLIST — Self-check items
// ============================================

import { getSectionProgress, updateSectionProgress } from "../core/state";
import type { ChecklistItem } from "../core/types";
import { checkSvg } from "./common";

export function renderChecklist(
	items: ChecklistItem[],
	courseId: string,
	sectionId: string,
	title: string,
	container: HTMLElement,
): void {
	if (items.length === 0) return;

	const section = getSectionProgress(courseId, sectionId);
	const el = document.createElement("div");
	el.className = "checklist";

	function render() {
		el.innerHTML = `
      <div class="checklist__title">${title}</div>
      ${items
				.map((item) => {
					const checked = section.checklist[item.id] || false;
					return `
          <button type="button" class="checklist__item${checked ? " checklist__item--checked" : ""}" data-id="${item.id}" aria-pressed="${checked}">
            <span class="checklist__box" aria-hidden="true">${checkSvg}</span>
            <span class="checklist__label">${item.label}</span>
          </button>
        `;
				})
				.join("")}
    `;

		el.querySelectorAll(".checklist__item").forEach((itemEl) => {
			itemEl.addEventListener("click", () => {
				const id = (itemEl as HTMLElement).dataset.id!;
				const newChecklist = {
					...section.checklist,
					[id]: !section.checklist[id],
				};
				updateSectionProgress(courseId, sectionId, { checklist: newChecklist });
				render();
			});
		});
	}

	render();
	container.appendChild(el);
}
