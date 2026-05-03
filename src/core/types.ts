// ============================================
// TYPES — Universal type system for StudyForge
// ============================================

// --- Course & Content ---

export interface CourseManifest {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  colorDim: string;
  colorSurface: string;
  icon: string;
  examDate?: string; // ISO date string
  sections: SectionContent[];
}

export interface SectionContent {
  id: string;
  title: string;
  desc: string;
  theory: TheoryBlock[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  exercises: Exercise[];
  checklist: ChecklistItem[];
}

export interface TheoryBlock {
  title: string;
  content: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  tags?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Exercise {
  id: string;
  type: 'code' | 'open' | 'calculation';
  prompt: string;
  answer: string;
  language?: string;
  hints?: string[];
}

export interface ChecklistItem {
  id: string;
  label: string;
}

// --- SRS (Spaced Repetition) ---

export interface CardReviewState {
  cardId: string;
  courseId: string;
  sectionId: string;
  easeFactor: number;   // SM-2: start 2.5, min 1.3
  interval: number;     // days until next review
  repetitions: number;  // consecutive correct reps
  nextReview: string;   // ISO date string
  lastReview: string;   // ISO date string
  lastQuality: number;  // 0-5
  leitnerBox: number;   // 1-5
}

/** SM-2 quality rating scale */
export type QualityRating = 0 | 1 | 2 | 3 | 4 | 5;

/** Quality labels for UI */
export const QUALITY_LABELS: Record<QualityRating, string> = {
  0: 'Geen idee',
  1: 'Fout — herinnerd na hint',
  2: 'Fout — leek makkelijk',
  3: 'Goed — met moeite',
  4: 'Goed — even nadenken',
  5: 'Perfect',
};

// --- Quiz Confidence ---

export interface QuizAttempt {
  questionId: string;
  selectedOption: number;
  correct: boolean;
  confidence: number; // 1-5
  weightedScore: number;
  timestamp: string;
}

// --- State ---

export interface SectionProgress {
  quizScore: number;
  quizTotal: number;
  quizConfidenceAvg: number;
  flashcardsKnown: string[];
  checklist: Record<string, boolean>;
  exerciseRatings: Record<string, 'got-it' | 'partial' | 'missed'>;
  lastStudied: string; // ISO date
}

export interface CourseProgress {
  courseId: string;
  sections: Record<string, SectionProgress>;
}

export interface StudySession {
  id: string;
  courseId: string;
  type: 'flashcard' | 'quiz' | 'review' | 'mix';
  startTime: string;
  endTime?: string;
  cardsReviewed: number;
  correctCount: number;
}

export interface AppState {
  version: number;
  courses: Record<string, CourseProgress>;
  cardReviews: Record<string, CardReviewState>; // keyed by `courseId:cardId`
  sessions: StudySession[];
  currentRoute: string;
  studyStreak: number;
  lastStudyDate: string;
}
