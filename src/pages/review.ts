// ============================================
// REVIEW — SRS Review Session
// ============================================

import { iconRefresh, iconTarget } from "../components/icons";
import { getAllFlashcards, getCourse } from "../core/registry";
import { navigate } from "../core/router";
import {
	createInitialCardState,
	getDueCards,
	mapToQuality,
	reviewCard,
} from "../core/srs";
import {
	endSession,
	getAllCardReviews,
	getCardReview,
	setCardReview,
	startSession,
} from "../core/state";

export function renderReview(content: HTMLElement): void {
	const allReviews = getAllCardReviews();
	const dueCards = getDueCards(allReviews);

	const page = document.createElement("div");
	page.className = "page";

	if (dueCards.length === 0) {
		// Also check for new cards never reviewed
		const allFlashcards = getAllFlashcards();
		const newCards = allFlashcards.filter((fc) => {
			const key = `${fc.courseId}:${fc.card.id}`;
			return !allReviews[key];
		});

		if (newCards.length === 0) {
			page.innerHTML = `
        <div class="page__header">
          <h2 class="page__title">Alles bijgewerkt!</h2>
          <p class="page__desc">Geen kaarten te herhalen. Ga naar een sectie om nieuwe kaarten te leren.</p>
        </div>
        <button class="btn btn--primary" id="go-home">← Terug naar dashboard</button>
      `;
			content.innerHTML = "";
			content.appendChild(page);
			window.scrollTo({ top: 0, behavior: "smooth" });
			page
				.querySelector("#go-home")!
				.addEventListener("click", () => navigate("#/"));
			return;
		}

		// Start with new cards
		renderReviewSession(
			content,
			newCards.slice(0, 20).map((fc) => ({
				courseId: fc.courseId,
				sectionId: fc.sectionId,
				cardId: fc.card.id,
				front: fc.card.front,
				back: fc.card.back,
			})),
		);
		return;
	}

	// Build review list from due cards
	const allFlashcards = getAllFlashcards();
	const reviewItems = dueCards.slice(0, 30).map((cardState) => {
		const fc = allFlashcards.find(
			(f) =>
				f.courseId === cardState.courseId && f.card.id === cardState.cardId,
		);
		return {
			courseId: cardState.courseId,
			sectionId: cardState.sectionId,
			cardId: cardState.cardId,
			front: fc?.card.front || cardState.cardId,
			back: fc?.card.back || "",
		};
	});

	renderReviewSession(content, reviewItems);
}

interface ReviewItem {
	courseId: string;
	sectionId: string;
	cardId: string;
	front: string;
	back: string;
}

function renderReviewSession(content: HTMLElement, items: ReviewItem[]): void {
	let currentIndex = 0;
	let correctCount = 0;
	let sessionId = startSession("all", "review");

	const page = document.createElement("div");
	page.className = "page";

	function render() {
		if (currentIndex >= items.length) {
			// Session complete
			endSession(sessionId, items.length, correctCount);
			const pct = Math.round((correctCount / items.length) * 100);
			page.innerHTML = `
        <div class="review-complete">
          <div class="review-complete__icon">${iconTarget}</div>
          <h2 class="page__title">Sessie voltooid!</h2>
          <div class="review-complete__stats">
            <div class="stat-card"><div class="stat-card__value">${items.length}</div><div class="stat-card__label">Kaarten</div></div>
            <div class="stat-card"><div class="stat-card__value">${correctCount}</div><div class="stat-card__label">Goed</div></div>
            <div class="stat-card"><div class="stat-card__value">${pct}%</div><div class="stat-card__label">Score</div></div>
          </div>
          <div class="review-complete__actions">
            <button class="btn btn--primary" id="go-home">← Dashboard</button>
            <button class="btn btn--secondary" id="review-again">${iconRefresh} Opnieuw</button>
          </div>
        </div>
      `;
			page
				.querySelector("#go-home")!
				.addEventListener("click", () => navigate("#/"));
			page.querySelector("#review-again")!.addEventListener("click", () => {
				currentIndex = 0;
				correctCount = 0;
				sessionId = startSession("all", "review");
				render();
			});
			return;
		}

		const item = items[currentIndex];
		const course = getCourse(item.courseId);
		const courseName = course?.shortName || item.courseId;
		const courseColor = course?.color || "var(--text-secondary)";

		page.innerHTML = `
      <div class="review-header">
        <span class="review-header__progress">${currentIndex + 1} / ${items.length}</span>
        <span class="review-header__course" style="color:${courseColor}">${courseName}</span>
      </div>
      <div class="flashcard-container" id="fc-container" role="button" tabindex="0" aria-label="Draai om naar antwoord" aria-pressed="false">
        <div class="flashcard" id="fc-card">
          <div class="flashcard__face flashcard__front">
            <span class="flashcard__label">Vraag</span>
            <div class="flashcard__text">${item.front}</div>
            <span class="flashcard__hint">Klik om te draaien</span>
          </div>
          <div class="flashcard__face flashcard__back">
            <span class="flashcard__label">Antwoord</span>
            <div class="flashcard__text">${item.back.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
      </div>
      <div class="review-actions">
        <button class="btn btn--error" id="r-again">✗ Opnieuw</button>
        <button class="btn btn--secondary" id="r-hard">Moeilijk</button>
        <button class="btn btn--success" id="r-good">✓ Goed</button>
        <button class="btn btn--primary" id="r-easy">★ Easy</button>
      </div>
    `;

		const cardContainer = page.querySelector("#fc-container") as HTMLElement;
		const cardEl = page.querySelector("#fc-card") as HTMLElement;
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

		const ratingButtons: Array<[string, "again" | "hard" | "good" | "easy"]> = [
			["#r-again", "again"],
			["#r-hard", "hard"],
			["#r-good", "good"],
			["#r-easy", "easy"],
		];

		for (const [selector, rating] of ratingButtons) {
			page.querySelector(selector)!.addEventListener("click", () => {
				const quality = mapToQuality(rating);
				let cardState = getCardReview(item.courseId, item.cardId);
				if (!cardState) {
					cardState = createInitialCardState(
						item.cardId,
						item.courseId,
						item.sectionId,
					);
				}
				const newState = reviewCard(cardState, quality);
				setCardReview(newState);

				if (quality >= 3) correctCount++;
				currentIndex++;
				render();
			});
		}
	}

	render();
	content.innerHTML = "";
	content.appendChild(page);
	window.scrollTo({ top: 0, behavior: "smooth" });
}
