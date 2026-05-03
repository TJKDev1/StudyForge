// ============================================
// SRS — SM-2 Spaced Repetition Engine
// ============================================
//
// Implementation of the SuperMemo SM-2 algorithm with
// Leitner box visualization layer on top.
//
// References:
//   - Wozniak, P.A. (1990). SuperMemo algorithm SM-2
//   - https://super-memory.com/english/ol/sm2.htm

import type { CardReviewState, QualityRating, Flashcard } from './types';

// --- Constants ---

const DEFAULT_EASE_FACTOR = 2.5;
const MIN_EASE_FACTOR = 1.3;
const INITIAL_INTERVAL_1 = 1;  // 1 day
const INITIAL_INTERVAL_2 = 6;  // 6 days

// --- SM-2 Core ---

/**
 * Calculate next review state after a quality rating.
 * Pure function — does not mutate input.
 */
export function reviewCard(
  state: CardReviewState,
  quality: QualityRating,
): CardReviewState {
  const today = new Date().toISOString().split('T')[0];

  // Update ease factor
  let ef = state.easeFactor +
    (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (ef < MIN_EASE_FACTOR) ef = MIN_EASE_FACTOR;

  let interval: number;
  let repetitions: number;
  let leitnerBox: number;

  if (quality < 3) {
    // Failed — reset
    repetitions = 0;
    interval = INITIAL_INTERVAL_1;
    leitnerBox = Math.max(1, state.leitnerBox - 1);
  } else {
    // Passed
    repetitions = state.repetitions + 1;

    if (repetitions === 1) {
      interval = INITIAL_INTERVAL_1;
    } else if (repetitions === 2) {
      interval = INITIAL_INTERVAL_2;
    } else {
      interval = Math.ceil(state.interval * ef);
    }

    // Leitner box progression
    if (quality >= 4) {
      leitnerBox = Math.min(5, state.leitnerBox + 1);
    } else {
      leitnerBox = state.leitnerBox; // stay
    }
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);

  return {
    ...state,
    easeFactor: Math.round(ef * 100) / 100,
    interval,
    repetitions,
    nextReview: nextDate.toISOString().split('T')[0],
    lastReview: today,
    lastQuality: quality,
    leitnerBox,
  };
}

/**
 * Create initial review state for a new card.
 */
export function createInitialCardState(
  cardId: string,
  courseId: string,
  sectionId: string,
): CardReviewState {
  const today = new Date().toISOString().split('T')[0];
  return {
    cardId,
    courseId,
    sectionId,
    easeFactor: DEFAULT_EASE_FACTOR,
    interval: 0,
    repetitions: 0,
    nextReview: today, // due immediately
    lastReview: '',
    lastQuality: 0,
    leitnerBox: 1,
  };
}

/**
 * Check if a card is due for review today.
 */
export function isCardDue(state: CardReviewState): boolean {
  const today = new Date().toISOString().split('T')[0];
  return state.nextReview <= today;
}

/**
 * Get all due cards from a collection, sorted by priority.
 * Priority: overdue first (oldest), then new cards.
 */
export function getDueCards(
  allStates: Record<string, CardReviewState>,
  courseId?: string,
): CardReviewState[] {
  const today = new Date().toISOString().split('T')[0];

  return Object.values(allStates)
    .filter(s => {
      if (courseId && s.courseId !== courseId) return false;
      return s.nextReview <= today;
    })
    .sort((a, b) => {
      // Overdue cards first (oldest nextReview)
      if (a.nextReview !== b.nextReview) {
        return a.nextReview.localeCompare(b.nextReview);
      }
      // Then by lowest leitner box (weakest cards first)
      return a.leitnerBox - b.leitnerBox;
    });
}

/**
 * Get new cards (never reviewed) for a course/section.
 */
export function getNewCards(
  flashcards: Flashcard[],
  allStates: Record<string, CardReviewState>,
  courseId: string,
): Flashcard[] {
  return flashcards.filter(fc => {
    const key = `${courseId}:${fc.id}`;
    return !allStates[key] || allStates[key].repetitions === 0;
  });
}

/**
 * Calculate SRS statistics for a course.
 */
export function getSrsStats(
  allStates: Record<string, CardReviewState>,
  courseId: string,
): { total: number; due: number; learning: number; mature: number; newCount: number } {
  const cards = Object.values(allStates).filter(s => s.courseId === courseId);
  const today = new Date().toISOString().split('T')[0];

  return {
    total: cards.length,
    due: cards.filter(c => c.nextReview <= today).length,
    learning: cards.filter(c => c.leitnerBox <= 2 && c.repetitions > 0).length,
    mature: cards.filter(c => c.leitnerBox >= 4).length,
    newCount: cards.filter(c => c.repetitions === 0).length,
  };
}

/**
 * Get Leitner box distribution for visualization.
 */
export function getLeitnerDistribution(
  allStates: Record<string, CardReviewState>,
  courseId?: string,
): number[] {
  const boxes = [0, 0, 0, 0, 0]; // box 1-5
  const cards = Object.values(allStates)
    .filter(s => !courseId || s.courseId === courseId);

  for (const card of cards) {
    if (card.leitnerBox >= 1 && card.leitnerBox <= 5) {
      boxes[card.leitnerBox - 1]++;
    }
  }
  return boxes;
}

/**
 * Map simple UI ratings to SM-2 quality scale.
 */
export function mapToQuality(uiRating: 'again' | 'hard' | 'good' | 'easy'): QualityRating {
  switch (uiRating) {
    case 'again': return 1;
    case 'hard': return 3;
    case 'good': return 4;
    case 'easy': return 5;
  }
}

/**
 * Calculate confidence-weighted quiz score.
 * High confidence + wrong = bigger penalty.
 * Low confidence + right = smaller bonus.
 */
export function calculateConfidenceScore(
  correct: boolean,
  confidence: number, // 1-5
): number {
  if (correct) {
    // Reward scales with confidence: sure + correct = full marks
    return 0.4 + (confidence / 5) * 0.6;
  } else {
    // Penalty scales with confidence: sure + wrong = 0
    return Math.max(0, 0.3 - (confidence / 5) * 0.3);
  }
}
