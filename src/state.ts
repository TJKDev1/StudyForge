// ============================================
// STATE — localStorage-backed progress tracking
// ============================================

const STORAGE_KEY = 'toetsen-leren-progress';

export interface SectionProgress {
  quizScore: number;
  quizTotal: number;
  flashcardsKnown: string[];
  checklist: Record<string, boolean>;
  sqlRatings: Record<string, 'got-it' | 'partial' | 'missed'>;
}

export interface AppState {
  sections: Record<string, SectionProgress>;
  currentRoute: string;
}

function defaultSectionProgress(): SectionProgress {
  return {
    quizScore: 0,
    quizTotal: 0,
    flashcardsKnown: [],
    checklist: {},
    sqlRatings: {},
  };
}

function defaultState(): AppState {
  return {
    sections: {},
    currentRoute: '#/',
  };
}

let state: AppState = load();

function load(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return defaultState();
}

function save(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getState(): AppState {
  return state;
}

export function getSection(id: string): SectionProgress {
  if (!state.sections[id]) {
    state.sections[id] = defaultSectionProgress();
  }
  return state.sections[id];
}

export function updateSection(id: string, update: Partial<SectionProgress>): void {
  const s = getSection(id);
  Object.assign(s, update);
  save();
  notifyListeners();
}

export function setRoute(route: string): void {
  state.currentRoute = route;
  save();
}

export function resetAll(): void {
  state = defaultState();
  save();
  notifyListeners();
}

// Calculate section completion 0-1
export function getSectionCompletion(id: string, totalFlashcards: number, totalQuiz: number, totalChecklist: number): number {
  const s = getSection(id);
  let parts = 0;
  let total = 0;

  if (totalFlashcards > 0) {
    parts += s.flashcardsKnown.length / totalFlashcards;
    total += 1;
  }
  if (totalQuiz > 0) {
    parts += (s.quizTotal > 0 ? s.quizScore / s.quizTotal : 0);
    total += 1;
  }
  if (totalChecklist > 0) {
    const checked = Object.values(s.checklist).filter(v => v).length;
    parts += checked / totalChecklist;
    total += 1;
  }
  const sqlKeys = Object.keys(s.sqlRatings);
  if (sqlKeys.length > 0) {
    const gotIt = sqlKeys.filter(k => s.sqlRatings[k] === 'got-it').length;
    parts += gotIt / sqlKeys.length;
    total += 1;
  }

  return total > 0 ? parts / total : 0;
}

// Listener pattern for reactive updates
type Listener = () => void;
const listeners: Listener[] = [];

export function subscribe(fn: Listener): () => void {
  listeners.push(fn);
  return () => {
    const i = listeners.indexOf(fn);
    if (i >= 0) listeners.splice(i, 1);
  };
}

function notifyListeners(): void {
  listeners.forEach(fn => fn());
}
