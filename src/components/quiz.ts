// ============================================
// QUIZ — MC quiz with confidence scoring
// ============================================

import type { QuizQuestion } from '../core/types';
import { updateSectionProgress } from '../core/state';
import { calculateConfidenceScore } from '../core/srs';

export function renderQuiz(
  questions: QuizQuestion[],
  courseId: string,
  sectionId: string,
  container: HTMLElement,
): void {
  if (questions.length === 0) return;

  let currentQ = 0;
  let score = 0;
  let totalWeightedScore = 0;
  let answered = false;

  const wrapper = document.createElement('div');
  wrapper.className = 'quiz';

  function render() {
    const q = questions[currentQ];
    answered = false;

    wrapper.innerHTML = `
      <div class="quiz__question">${currentQ + 1}. ${q.question}</div>
      <div class="quiz__confidence" id="quiz-confidence">
        <span class="quiz__confidence-label">Hoe zeker ben je?</span>
        <div class="quiz__confidence-pills">
          <button class="confidence-pill" data-conf="1">1 — Gok</button>
          <button class="confidence-pill" data-conf="2">2</button>
          <button class="confidence-pill confidence-pill--active" data-conf="3">3</button>
          <button class="confidence-pill" data-conf="4">4</button>
          <button class="confidence-pill" data-conf="5">5 — Zeker</button>
        </div>
      </div>
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
        <span class="quiz__score">Score: ${score}/${currentQ}</span>
        <button class="btn btn--secondary btn--sm" id="quiz-next" style="display:none">Volgende →</button>
      </div>
    `;

    // Confidence selection
    let selectedConfidence = 3;
    wrapper.querySelectorAll('.confidence-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        selectedConfidence = parseInt((pill as HTMLElement).dataset.conf!);
        wrapper.querySelectorAll('.confidence-pill').forEach(p => p.classList.remove('confidence-pill--active'));
        pill.classList.add('confidence-pill--active');
      });
    });

    // Answer selection
    wrapper.querySelectorAll('.quiz__option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const idx = parseInt((btn as HTMLElement).dataset.index!);
        const isCorrect = idx === q.correct;
        if (isCorrect) score++;

        const weightedScore = calculateConfidenceScore(isCorrect, selectedConfidence);
        totalWeightedScore += weightedScore;

        wrapper.querySelectorAll('.quiz__option').forEach((b, i) => {
          b.classList.add('quiz__option--answered');
          if (i === q.correct) b.classList.add('quiz__option--correct');
          if (i === idx && !isCorrect) b.classList.add('quiz__option--wrong');
        });

        // Show confidence feedback
        const confFeedback = isCorrect
          ? (selectedConfidence >= 4 ? 'Zeker en correct!' : 'Goed, maar wees zekerder.')
          : (selectedConfidence >= 4 ? 'Zeker maar fout — let op!' : 'Fout — tijd om te herhalen.');

        const expl = wrapper.querySelector('#quiz-explanation') as HTMLElement;
        expl.style.display = 'block';
        expl.innerHTML = `
          <div class="quiz__explanation">
            <div class="quiz__conf-feedback">${confFeedback}</div>
            ${q.explanation}
          </div>
        `;

        wrapper.querySelector('.quiz__score')!.textContent = `Score: ${score}/${currentQ + 1}`;

        const nextBtn = wrapper.querySelector('#quiz-next') as HTMLElement;
        if (currentQ < questions.length - 1) {
          nextBtn.style.display = 'inline-flex';
        } else {
          updateSectionProgress(courseId, sectionId, {
            quizScore: score,
            quizTotal: questions.length,
            quizConfidenceAvg: totalWeightedScore / questions.length,
          });
          nextBtn.style.display = 'inline-flex';
          nextBtn.textContent = 'Opnieuw';
        }
      });
    });

    wrapper.querySelector('#quiz-next')!.addEventListener('click', () => {
      if (currentQ < questions.length - 1) {
        currentQ++;
        render();
      } else {
        currentQ = 0;
        score = 0;
        totalWeightedScore = 0;
        render();
      }
    });
  }

  render();
  container.appendChild(wrapper);
}
