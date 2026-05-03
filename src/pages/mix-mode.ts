// ============================================
// MIX MODE — Cross-course interleaved practice
// ============================================

import { getAllQuizQuestions } from '../core/registry';
import { navigate } from '../core/router';
import { getCourse } from '../core/registry';
import { iconTarget, iconShuffle } from '../components/icons';

export function renderMixMode(content: HTMLElement): void {
  const allQuestions = getAllQuizQuestions();

  if (allQuestions.length === 0) {
    const page = document.createElement('div');
    page.className = 'page';
    page.innerHTML = `
      <div class="page__header">
        <h2 class="page__title">${iconShuffle} Mix Mode</h2>
        <p class="page__desc">Geen quizvragen beschikbaar.</p>
      </div>
    `;
    content.innerHTML = '';
    content.appendChild(page);
    return;
  }

  // Shuffle all questions
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 20);

  let currentQ = 0;
  let score = 0;
  let answered = false;

  const page = document.createElement('div');
  page.className = 'page';

  function render() {
    if (currentQ >= shuffled.length) {
      const pct = Math.round((score / shuffled.length) * 100);
      page.innerHTML = `
        <div class="review-complete">
          <div class="review-complete__icon">${iconTarget}</div>
          <h2 class="page__title">Mix Mode voltooid!</h2>
          <div class="review-complete__stats">
            <div class="stat-card"><div class="stat-card__value">${shuffled.length}</div><div class="stat-card__label">Vragen</div></div>
            <div class="stat-card"><div class="stat-card__value">${score}</div><div class="stat-card__label">Goed</div></div>
            <div class="stat-card"><div class="stat-card__value">${pct}%</div><div class="stat-card__label">Score</div></div>
          </div>
          <div class="review-complete__actions">
            <button class="btn btn--primary" id="go-home">← Dashboard</button>
            <button class="btn btn--secondary" id="mix-again">${iconShuffle} Opnieuw</button>
          </div>
        </div>
      `;
      page.querySelector('#go-home')!.addEventListener('click', () => navigate('#/'));
      page.querySelector('#mix-again')!.addEventListener('click', () => {
        currentQ = 0;
        score = 0;
        shuffled.sort(() => Math.random() - 0.5);
        render();
      });
      return;
    }

    const item = shuffled[currentQ];
    const q = item.question;
    const course = getCourse(item.courseId);
    const courseColor = course?.color || 'var(--text-secondary)';
    const courseName = course?.shortName || item.courseId;
    answered = false;

    page.innerHTML = `
      <div class="review-header">
        <span class="review-header__progress">${currentQ + 1} / ${shuffled.length}</span>
        <span class="review-header__course" style="color:${courseColor}">${courseName}</span>
        <span class="quiz__score">Score: ${score}/${currentQ}</span>
      </div>
      <div class="quiz__question">${q.question}</div>
      <div class="quiz__options">
        ${q.options.map((opt, i) => `
          <button class="quiz__option" data-index="${i}">
            <span class="quiz__option-marker">${String.fromCharCode(65 + i)}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="quiz-explanation" style="display:none"></div>
      <div class="quiz__nav">
        <button class="btn btn--secondary btn--sm" id="mix-next" style="display:none">Volgende →</button>
      </div>
    `;

    page.querySelectorAll('.quiz__option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const idx = parseInt((btn as HTMLElement).dataset.index!);
        const isCorrect = idx === q.correct;
        if (isCorrect) score++;

        page.querySelectorAll('.quiz__option').forEach((b, i) => {
          b.classList.add('quiz__option--answered');
          if (i === q.correct) b.classList.add('quiz__option--correct');
          if (i === idx && !isCorrect) b.classList.add('quiz__option--wrong');
        });

        const expl = page.querySelector('#quiz-explanation') as HTMLElement;
        expl.style.display = 'block';
        expl.innerHTML = `<div class="quiz__explanation">${q.explanation}</div>`;

        (page.querySelector('#mix-next') as HTMLElement).style.display = 'inline-flex';
      });
    });

    page.querySelector('#mix-next')!.addEventListener('click', () => {
      currentQ++;
      render();
    });
  }

  render();
  content.innerHTML = '';
  content.appendChild(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
