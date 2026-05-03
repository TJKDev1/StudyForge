// ============================================
// FLASHCARD — SRS-integrated flashcard deck
// ============================================

import { createInitialCardState, mapToQuality, reviewCard } from "../core/srs";
import {
	getCardReview,
	getSectionProgress,
	setCardReview,
	updateSectionProgress,
} from "../core/state";
import type { Flashcard } from "../core/types";

export function renderFlashcards(
	cards: Flashcard[],
	courseId: string,
	sectionId: string,
	container: HTMLElement,
): void {
	if (cards.length === 0) return;

	const section = getSectionProgress(courseId, sectionId);
	let currentIndex = 0;
	let shuffled = [...cards];

	const wrapper = document.createElement("div");
	wrapper.className = "flashcard-deck";

	function render() {
		const card = shuffled[currentIndex];
		const isKnown = section.flashcardsKnown.includes(card.id);
		const review = getCardReview(courseId, card.id);
		const leitnerBox = review?.leitnerBox || 1;

		wrapper.innerHTML = `
      <div class="flashcard-deck__controls">
        <span class="flashcard-deck__counter">${currentIndex + 1} / ${shuffled.length}</span>
        <div class="flashcard-deck__actions">
          <span class="leitner-badge leitner-badge--${leitnerBox}" title="Leitner box ${leitnerBox}">Box ${leitnerBox}</span>
          <button class="btn btn--ghost btn--sm" id="fc-shuffle">Shuffle</button>
        </div>
      </div>
      <div class="flashcard-container" id="fc-container" role="button" tabindex="0" aria-label="Draai om naar antwoord" aria-pressed="false">
        <div class="flashcard" id="fc-card">
          <div class="flashcard__face flashcard__front">
            <span class="flashcard__label">Vraag</span>
            <div class="flashcard__text">${card.front}</div>
            <span class="flashcard__hint">Klik om te draaien</span>
          </div>
          <div class="flashcard__face flashcard__back">
            <span class="flashcard__label">Antwoord</span>
            <div class="flashcard__text">${card.back.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
      </div>
      <div class="flashcard-nav">
        <button class="btn btn--secondary btn--sm" id="fc-prev" ${currentIndex === 0 ? "disabled" : ""}>← Vorige</button>
        <div class="flashcard-rating">
          <button class="btn btn--error btn--sm" id="fc-again" title="Opnieuw">✗ Opnieuw</button>
          <button class="btn btn--secondary btn--sm" id="fc-hard" title="Moeilijk">Moeilijk</button>
          <button class="btn ${isKnown ? "btn--success" : "btn--ghost"} btn--sm" id="fc-good" title="Goed">✓ Goed</button>
          <button class="btn btn--ghost btn--sm" id="fc-easy" title="Makkelijk">★ Easy</button>
        </div>
        <button class="btn btn--secondary btn--sm" id="fc-next" ${currentIndex === shuffled.length - 1 ? "disabled" : ""}>Volgende →</button>
      </div>
    `;

		const cardContainer = wrapper.querySelector("#fc-container") as HTMLElement;
		const cardEl = wrapper.querySelector("#fc-card") as HTMLElement;
		const flipCard = () => {
			const flipped = cardEl.classList.toggle("flashcard--flipped");
			cardContainer.setAttribute("aria-pressed", String(flipped));
			cardContainer.setAttribute(
				"aria-label",
				flipped ? "Draai terug naar vraag" : "Draai om naar antwoord",
			);
		};

		cardContainer.addEventListener("click", flipCard);
		cardContainer.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				flipCard();
			}
		});

		wrapper.querySelector("#fc-prev")!.addEventListener("click", () => {
			if (currentIndex > 0) {
				currentIndex--;
				render();
			}
		});

		wrapper.querySelector("#fc-next")!.addEventListener("click", () => {
			if (currentIndex < shuffled.length - 1) {
				currentIndex++;
				render();
			}
		});

		wrapper.querySelector("#fc-shuffle")!.addEventListener("click", () => {
			shuffled = [...cards].sort(() => Math.random() - 0.5);
			currentIndex = 0;
			render();
		});

		// SRS rating buttons
		const ratingButtons: Array<[string, "again" | "hard" | "good" | "easy"]> = [
			["#fc-again", "again"],
			["#fc-hard", "hard"],
			["#fc-good", "good"],
			["#fc-easy", "easy"],
		];

		for (const [selector, rating] of ratingButtons) {
			wrapper.querySelector(selector)!.addEventListener("click", () => {
				const quality = mapToQuality(rating);
				let cardState = getCardReview(courseId, card.id);
				if (!cardState) {
					cardState = createInitialCardState(card.id, courseId, sectionId);
				}
				const newState = reviewCard(cardState, quality);
				setCardReview(newState);

				// Update known list
				const known = new Set(section.flashcardsKnown);
				if (quality >= 3) {
					known.add(card.id);
				} else {
					known.delete(card.id);
				}
				updateSectionProgress(courseId, sectionId, {
					flashcardsKnown: [...known],
				});

				// Advance
				if (currentIndex < shuffled.length - 1) currentIndex++;
				render();
			});
		}
	}

	render();
	container.appendChild(wrapper);
}
