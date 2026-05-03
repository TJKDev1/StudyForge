// ============================================
// PRACTICE — Code/open exercises
// ============================================

import { getSectionProgress, updateSectionProgress } from "../core/state";
import type { Exercise } from "../core/types";
import { iconLightbulb } from "./icons";

export function renderExercises(
	exercises: Exercise[],
	courseId: string,
	sectionId: string,
	container: HTMLElement,
): void {
	if (exercises.length === 0) return;

	exercises.forEach((ex) => {
		const section = getSectionProgress(courseId, sectionId);
		const el = document.createElement("div");
		el.className = "sql-exercise";

		const langLabel = ex.language ? ` (${ex.language.toUpperCase()})` : "";
		const placeholder =
			ex.type === "code"
				? `Schrijf je ${ex.language || "code"} hier...`
				: "Schrijf je antwoord hier...";
		const savedRating = section.exerciseRatings[ex.id];
		const ratingClass = (rating: "got-it" | "partial" | "missed") => {
			if (savedRating !== rating) return "btn--ghost";
			if (rating === "got-it") return "btn--success";
			if (rating === "missed") return "btn--error";
			return "btn--secondary";
		};

		el.innerHTML = `
      <div class="sql-exercise__prompt">${ex.prompt}${langLabel}</div>
      <textarea class="sql-exercise__textarea" placeholder="${placeholder}" spellcheck="false"></textarea>
      ${
				ex.hints && ex.hints.length > 0
					? `
        <div class="exercise__hints">
          <button class="btn btn--ghost btn--sm" id="hint-${ex.id}">${iconLightbulb} Hint</button>
          <div class="exercise__hint-text" id="hint-text-${ex.id}" style="display:none"></div>
        </div>
      `
					: ""
			}
      <div class="sql-exercise__actions">
        <button class="btn btn--primary btn--sm" id="show-${ex.id}">Toon antwoord</button>
      </div>
      <div class="sql-exercise__answer" id="answer-${ex.id}" style="display:none">
        <div class="sql-exercise__answer-label">Voorbeeldantwoord</div>
        <pre><code>${ex.answer}</code></pre>
        <div class="sql-exercise__rating" aria-label="Beoordeel je antwoord">
          <button class="btn ${ratingClass("got-it")} btn--sm" data-rating="got-it" aria-pressed="${savedRating === "got-it"}">Goed</button>
          <button class="btn ${ratingClass("partial")} btn--sm" data-rating="partial" aria-pressed="${savedRating === "partial"}">Deels</button>
          <button class="btn ${ratingClass("missed")} btn--sm" data-rating="missed" aria-pressed="${savedRating === "missed"}">Gemist</button>
        </div>
      </div>
    `;

		// Hint toggle
		if (ex.hints && ex.hints.length > 0) {
			let hintIndex = 0;
			const hintBtn = el.querySelector(`#hint-${ex.id}`);
			const hintText = el.querySelector(`#hint-text-${ex.id}`) as HTMLElement;
			hintBtn?.addEventListener("click", () => {
				if (hintIndex < ex.hints!.length) {
					hintText.style.display = "block";
					hintText.textContent = ex.hints![hintIndex];
					hintIndex++;
					if (hintIndex >= ex.hints!.length) {
						(hintBtn as HTMLElement).textContent = "Geen hints meer";
						(hintBtn as HTMLElement).setAttribute("disabled", "");
					}
				}
			});
		}

		el.querySelector(`#show-${ex.id}`)!.addEventListener("click", () => {
			(el.querySelector(`#answer-${ex.id}`) as HTMLElement).style.display =
				"block";
			const showBtn = el.querySelector(`#show-${ex.id}`) as HTMLButtonElement;
			showBtn.textContent = "Antwoord zichtbaar";
			showBtn.disabled = true;
		});

		el.querySelectorAll("[data-rating]").forEach((btn) => {
			btn.addEventListener("click", () => {
				const rating = (btn as HTMLElement).dataset.rating as
					| "got-it"
					| "partial"
					| "missed";
				const ratings = { ...section.exerciseRatings, [ex.id]: rating };
				updateSectionProgress(courseId, sectionId, {
					exerciseRatings: ratings,
				});
				el.querySelectorAll("[data-rating]").forEach((b) => {
					b.classList.remove("btn--success", "btn--error", "btn--secondary");
					b.classList.add("btn--ghost");
					b.setAttribute("aria-pressed", "false");
				});
				btn.classList.remove("btn--ghost");
				btn.setAttribute("aria-pressed", "true");
				if (rating === "got-it") btn.classList.add("btn--success");
				else if (rating === "missed") btn.classList.add("btn--error");
				else btn.classList.add("btn--secondary");
			});
		});

		container.appendChild(el);
	});
}
