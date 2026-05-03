// Reusable UI components

import type {
	ChecklistItem,
	Flashcard,
	QuizQuestion,
	SqlExercise,
	TheoryBlock,
} from "../data/data2-content";
import { getSection, updateSection } from "../state";

// === CHEVRON SVG ===
const chevronSvg = `<svg class="theory__chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="5,7 10,13 15,7"/></svg>`;
const checkSvg = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg>`;

// === THEORY BLOCK ===
export function renderTheory(
	blocks: TheoryBlock[],
	container: HTMLElement,
): void {
	blocks.forEach((block, i) => {
		const el = document.createElement("div");
		el.className = `theory${i === 0 ? " theory--open" : ""}`;
		el.innerHTML = `
      <div class="theory__header">
        <span class="theory__header-text">${block.title}</span>
        ${chevronSvg}
      </div>
      <div class="theory__body">${block.content}</div>
    `;
		el.querySelector(".theory__header")!.addEventListener("click", () => {
			el.classList.toggle("theory--open");
		});
		container.appendChild(el);
	});
}

// === FLASHCARD DECK ===
export function renderFlashcards(
	cards: Flashcard[],
	sectionId: string,
	_accent: "data" | "ethiek",
	container: HTMLElement,
): void {
	if (cards.length === 0) return;

	const section = getSection(sectionId);
	let currentIndex = 0;
	let shuffled = [...cards];

	const wrapper = document.createElement("div");
	wrapper.className = "flashcard-deck";

	function render() {
		const card = shuffled[currentIndex];
		const isKnown = section.flashcardsKnown.includes(card.id);

		wrapper.innerHTML = `
      <div class="flashcard-deck__controls">
        <span class="flashcard-deck__counter">${currentIndex + 1} / ${shuffled.length}</span>
        <div class="flashcard-deck__actions">
          <button class="btn btn--ghost btn--sm" id="fc-shuffle">Shuffle</button>
        </div>
      </div>
      <div class="flashcard-container" id="fc-container">
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
          <button class="btn ${isKnown ? "btn--success" : "btn--ghost"} btn--sm" id="fc-known">✓ Ken ik</button>
          <button class="btn ${!isKnown ? "btn--error" : "btn--ghost"} btn--sm" id="fc-practice">✗ Oefenen</button>
        </div>
        <button class="btn btn--secondary btn--sm" id="fc-next" ${currentIndex === shuffled.length - 1 ? "disabled" : ""}>Volgende →</button>
      </div>
    `;

		wrapper.querySelector("#fc-container")!.addEventListener("click", () => {
			wrapper.querySelector("#fc-card")!.classList.toggle("flashcard--flipped");
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

		wrapper.querySelector("#fc-known")!.addEventListener("click", () => {
			const known = new Set(section.flashcardsKnown);
			known.add(card.id);
			updateSection(sectionId, { flashcardsKnown: [...known] });
			if (currentIndex < shuffled.length - 1) currentIndex++;
			render();
		});

		wrapper.querySelector("#fc-practice")!.addEventListener("click", () => {
			const known = new Set(section.flashcardsKnown);
			known.delete(card.id);
			updateSection(sectionId, { flashcardsKnown: [...known] });
			render();
		});
	}

	render();
	container.appendChild(wrapper);
}

// === QUIZ ===
export function renderQuiz(
	questions: QuizQuestion[],
	sectionId: string,
	container: HTMLElement,
): void {
	if (questions.length === 0) return;

	let currentQ = 0;
	let score = 0;
	let answered = false;

	const wrapper = document.createElement("div");
	wrapper.className = "quiz";

	function render() {
		const q = questions[currentQ];
		answered = false;

		wrapper.innerHTML = `
      <div class="quiz__question">${currentQ + 1}. ${q.question}</div>
      <div class="quiz__options">
        ${q.options
					.map(
						(opt, i) => `
          <button class="quiz__option" data-index="${i}">
            <span class="quiz__option-marker">${String.fromCharCode(65 + i)}</span>
            <span>${opt}</span>
          </button>
        `,
					)
					.join("")}
      </div>
      <div id="quiz-explanation" style="display:none"></div>
      <div class="quiz__nav">
        <span class="quiz__score">Score: ${score}/${currentQ}</span>
        <button class="btn btn--secondary btn--sm" id="quiz-next" style="display:none">Volgende →</button>
      </div>
    `;

		wrapper.querySelectorAll(".quiz__option").forEach((btn) => {
			btn.addEventListener("click", () => {
				if (answered) return;
				answered = true;

				const idx = parseInt((btn as HTMLElement).dataset.index!);
				const isCorrect = idx === q.correct;
				if (isCorrect) score++;

				wrapper.querySelectorAll(".quiz__option").forEach((b, i) => {
					b.classList.add("quiz__option--answered");
					if (i === q.correct) b.classList.add("quiz__option--correct");
					if (i === idx && !isCorrect) b.classList.add("quiz__option--wrong");
				});

				const expl = wrapper.querySelector("#quiz-explanation") as HTMLElement;
				expl.style.display = "block";
				expl.innerHTML = `<div class="quiz__explanation">${q.explanation}</div>`;

				wrapper.querySelector(".quiz__score")!.textContent =
					`Score: ${score}/${currentQ + 1}`;

				const nextBtn = wrapper.querySelector("#quiz-next") as HTMLElement;
				if (currentQ < questions.length - 1) {
					nextBtn.style.display = "inline-flex";
				} else {
					updateSection(sectionId, {
						quizScore: score,
						quizTotal: questions.length,
					});
					nextBtn.style.display = "inline-flex";
					nextBtn.textContent = "Opnieuw";
				}
			});
		});

		wrapper.querySelector("#quiz-next")!.addEventListener("click", () => {
			if (currentQ < questions.length - 1) {
				currentQ++;
				render();
			} else {
				currentQ = 0;
				score = 0;
				render();
			}
		});
	}

	render();
	container.appendChild(wrapper);
}

// === SQL EXERCISE ===
export function renderSqlExercises(
	exercises: SqlExercise[],
	sectionId: string,
	container: HTMLElement,
): void {
	if (exercises.length === 0) return;

	exercises.forEach((ex) => {
		const section = getSection(sectionId);
		const el = document.createElement("div");
		el.className = "sql-exercise";

		el.innerHTML = `
      <div class="sql-exercise__prompt">${ex.prompt}</div>
      <textarea class="sql-exercise__textarea" placeholder="Schrijf je SQL-query hier..." spellcheck="false"></textarea>
      <div class="sql-exercise__actions">
        <button class="btn btn--primary btn--sm" id="sql-show-${ex.id}">Toon antwoord</button>
      </div>
      <div class="sql-exercise__answer" id="sql-answer-${ex.id}" style="display:none">
        <div class="sql-exercise__answer-label">Voorbeeldantwoord</div>
        <pre><code>${ex.answer}</code></pre>
        <div class="sql-exercise__rating">
          <button class="btn btn--success btn--sm" data-rating="got-it">Goed</button>
          <button class="btn btn--secondary btn--sm" data-rating="partial">Deels</button>
          <button class="btn btn--error btn--sm" data-rating="missed">Gemist</button>
        </div>
      </div>
    `;

		el.querySelector(`#sql-show-${ex.id}`)!.addEventListener("click", () => {
			(el.querySelector(`#sql-answer-${ex.id}`) as HTMLElement).style.display =
				"block";
		});

		el.querySelectorAll("[data-rating]").forEach((btn) => {
			btn.addEventListener("click", () => {
				const rating = (btn as HTMLElement).dataset.rating as
					| "got-it"
					| "partial"
					| "missed";
				const ratings = { ...section.sqlRatings, [ex.id]: rating };
				updateSection(sectionId, { sqlRatings: ratings });
				el.querySelectorAll("[data-rating]").forEach((b) => {
					b.classList.remove("btn--success", "btn--error", "btn--secondary");
					b.classList.add("btn--ghost");
				});
				btn.classList.remove("btn--ghost");
				if (rating === "got-it") btn.classList.add("btn--success");
				else if (rating === "missed") btn.classList.add("btn--error");
				else btn.classList.add("btn--secondary");
			});
		});

		container.appendChild(el);
	});
}

// === CHECKLIST ===
export function renderChecklist(
	items: ChecklistItem[],
	sectionId: string,
	title: string,
	container: HTMLElement,
): void {
	if (items.length === 0) return;

	const section = getSection(sectionId);
	const el = document.createElement("div");
	el.className = "checklist";

	function render() {
		el.innerHTML = `
      <div class="checklist__title">${title}</div>
      ${items
				.map((item) => {
					const checked = section.checklist[item.id] || false;
					return `
          <div class="checklist__item${checked ? " checklist__item--checked" : ""}" data-id="${item.id}">
            <span class="checklist__box">${checkSvg}</span>
            <span class="checklist__label">${item.label}</span>
          </div>
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
				updateSection(sectionId, { checklist: newChecklist });
				render();
			});
		});
	}

	render();
	container.appendChild(el);
}

// === NAV PROGRESS RING ===
export function progressRingSvg(pct: number): string {
	const r = 7;
	const c = 2 * Math.PI * r;
	const offset = c * (1 - pct);
	return `<div class="nav-item__progress"><svg width="20" height="20" viewBox="0 0 20 20"><circle class="nav-item__progress-bg" cx="10" cy="10" r="${r}"/><circle class="nav-item__progress-fill" cx="10" cy="10" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${offset}"/></svg></div>`;
}

// === PAGE BUILDER ===
export function buildSectionPage(
	subject: string,
	subjectClass: "data" | "ethiek",
	title: string,
	desc: string,
	sectionId: string,
	theory: TheoryBlock[],
	flashcards: Flashcard[],
	quiz: QuizQuestion[],
	sqlExercises: SqlExercise[],
	checklist: ChecklistItem[],
): HTMLElement {
	const page = document.createElement("div");
	page.className = "page";

	page.innerHTML = `
    <div class="page__header">
      <div class="page__subject page__subject--${subjectClass}">${subject}</div>
      <h2 class="page__title">${title}</h2>
      <p class="page__desc">${desc}</p>
    </div>
  `;

	// Theory
	if (theory.length > 0) {
		const sec = document.createElement("div");
		sec.className = "section";
		sec.innerHTML = `<h3 class="section__title"><span class="section__icon section__icon--${subjectClass}">📖</span>Theorie</h3>`;
		renderTheory(theory, sec);
		page.appendChild(sec);
		page.appendChild(createDivider());
	}

	// Flashcards
	if (flashcards.length > 0) {
		const sec = document.createElement("div");
		sec.className = "section";
		sec.innerHTML = `<h3 class="section__title"><span class="section__icon section__icon--${subjectClass}">🃏</span>Flashcards</h3>`;
		renderFlashcards(flashcards, sectionId, subjectClass, sec);
		page.appendChild(sec);
		page.appendChild(createDivider());
	}

	// Quiz
	if (quiz.length > 0) {
		const sec = document.createElement("div");
		sec.className = "section";
		sec.innerHTML = `<h3 class="section__title"><span class="section__icon section__icon--${subjectClass}">❓</span>Quiz</h3>`;
		renderQuiz(quiz, sectionId, sec);
		page.appendChild(sec);
		page.appendChild(createDivider());
	}

	// SQL
	if (sqlExercises.length > 0) {
		const sec = document.createElement("div");
		sec.className = "section";
		sec.innerHTML = `<h3 class="section__title"><span class="section__icon section__icon--${subjectClass}">💻</span>SQL Oefeningen</h3>`;
		renderSqlExercises(sqlExercises, sectionId, sec);
		page.appendChild(sec);
		page.appendChild(createDivider());
	}

	// Checklist
	if (checklist.length > 0) {
		const sec = document.createElement("div");
		sec.className = "section";
		renderChecklist(checklist, sectionId, "Herhaalchecklist", sec);
		page.appendChild(sec);
	}

	return page;
}

function createDivider(): HTMLElement {
	const hr = document.createElement("hr");
	hr.className = "divider";
	return hr;
}
