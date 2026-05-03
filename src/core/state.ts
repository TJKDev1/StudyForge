// ============================================
// STATE — localStorage-backed progress tracking
// ============================================
//
// Manages all persistent state: progress, SRS card reviews,
// study sessions, streaks. Migrates from v1 (old format).

import type {
	AppState,
	CardReviewState,
	CourseProgress,
	SectionProgress,
	StudySession,
} from "./types";

const STORAGE_KEY = "studyforge-state";
const OLD_STORAGE_KEY = "toetsen-leren-progress";
const CURRENT_VERSION = 2;

// --- Defaults ---

function defaultSectionProgress(): SectionProgress {
	return {
		quizScore: 0,
		quizTotal: 0,
		quizConfidenceAvg: 0,
		flashcardsKnown: [],
		checklist: {},
		exerciseRatings: {},
		lastStudied: "",
	};
}

function defaultState(): AppState {
	return {
		version: CURRENT_VERSION,
		courses: {},
		cardReviews: {},
		sessions: [],
		currentRoute: "#/",
		studyStreak: 0,
		lastStudyDate: "",
	};
}

// --- Migration from v1 ---

interface OldState {
	sections: Record<
		string,
		{
			quizScore: number;
			quizTotal: number;
			flashcardsKnown: string[];
			checklist: Record<string, boolean>;
			sqlRatings: Record<string, "got-it" | "partial" | "missed">;
		}
	>;
	currentRoute: string;
}

function migrateV1(old: OldState): AppState {
	const state = defaultState();

	// Map old section IDs to courses
	const dataIISections = [
		"sql-basis",
		"sql-joins",
		"knn",
		"normalisatie-regressie",
	];
	const ethiekSections = [
		"belang",
		"avg-beginselen",
		"avg-grondslagen",
		"ai-act",
	];

	for (const [sectionId, progress] of Object.entries(old.sections)) {
		let courseId: string;
		if (dataIISections.includes(sectionId)) {
			courseId = "data-ii";
		} else if (ethiekSections.includes(sectionId)) {
			courseId = "ethiek-recht";
		} else {
			continue;
		}

		if (!state.courses[courseId]) {
			state.courses[courseId] = { courseId, sections: {} };
		}

		state.courses[courseId].sections[sectionId] = {
			quizScore: progress.quizScore,
			quizTotal: progress.quizTotal,
			quizConfidenceAvg: 0,
			flashcardsKnown: progress.flashcardsKnown || [],
			checklist: progress.checklist || {},
			exerciseRatings: progress.sqlRatings || {},
			lastStudied: "",
		};
	}

	return state;
}

// --- Load & Save ---

let state: AppState = load();

function load(): AppState {
	try {
		// Try new format first
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			if (parsed.version === CURRENT_VERSION) return parsed;
		}

		// Try migrating old format
		const oldRaw = localStorage.getItem(OLD_STORAGE_KEY);
		if (oldRaw) {
			const oldParsed = JSON.parse(oldRaw);
			const migrated = migrateV1(oldParsed);
			// Save migrated state
			localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
			return migrated;
		}
	} catch {
		/* ignore corrupt data */
	}

	return defaultState();
}

function save(): void {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// --- Public API ---

export function getState(): AppState {
	return state;
}

// --- Course Progress ---

export function getCourseProgress(courseId: string): CourseProgress {
	if (!state.courses[courseId]) {
		state.courses[courseId] = { courseId, sections: {} };
	}
	return state.courses[courseId];
}

export function getSectionProgress(
	courseId: string,
	sectionId: string,
): SectionProgress {
	const course = getCourseProgress(courseId);
	if (!course.sections[sectionId]) {
		course.sections[sectionId] = defaultSectionProgress();
	}
	return course.sections[sectionId];
}

export function updateSectionProgress(
	courseId: string,
	sectionId: string,
	update: Partial<SectionProgress>,
): void {
	const section = getSectionProgress(courseId, sectionId);
	Object.assign(section, update);
	section.lastStudied = new Date().toISOString().split("T")[0];
	save();
	notifyListeners();
}

// --- SRS Card Reviews ---

export function getCardReview(
	courseId: string,
	cardId: string,
): CardReviewState | undefined {
	return state.cardReviews[`${courseId}:${cardId}`];
}

export function setCardReview(review: CardReviewState): void {
	state.cardReviews[`${review.courseId}:${review.cardId}`] = review;
	save();
	notifyListeners();
}

export function getAllCardReviews(): Record<string, CardReviewState> {
	return state.cardReviews;
}

// --- Study Sessions ---

export function startSession(
	courseId: string,
	type: StudySession["type"],
): string {
	const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
	state.sessions.push({
		id,
		courseId,
		type,
		startTime: new Date().toISOString(),
		cardsReviewed: 0,
		correctCount: 0,
	});
	save();
	return id;
}

export function endSession(
	sessionId: string,
	cardsReviewed: number,
	correctCount: number,
): void {
	const session = state.sessions.find((s) => s.id === sessionId);
	if (session) {
		session.endTime = new Date().toISOString();
		session.cardsReviewed = cardsReviewed;
		session.correctCount = correctCount;
	}
	updateStreak();
	save();
	notifyListeners();
}

// --- Streak ---

function updateStreak(): void {
	const today = new Date().toISOString().split("T")[0];
	if (state.lastStudyDate === today) return; // already counted today

	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const yesterdayStr = yesterday.toISOString().split("T")[0];

	if (state.lastStudyDate === yesterdayStr) {
		state.studyStreak++;
	} else if (state.lastStudyDate !== today) {
		state.studyStreak = 1; // reset
	}

	state.lastStudyDate = today;
}

// --- Completion ---

export function getSectionCompletion(
	courseId: string,
	sectionId: string,
	totalFlashcards: number,
	totalQuiz: number,
	totalChecklist: number,
	totalExercises: number,
): number {
	const s = getSectionProgress(courseId, sectionId);
	let parts = 0;
	let total = 0;

	if (totalFlashcards > 0) {
		parts +=
			Math.min(s.flashcardsKnown.length, totalFlashcards) / totalFlashcards;
		total += 1;
	}
	if (totalQuiz > 0) {
		parts += s.quizTotal > 0 ? s.quizScore / s.quizTotal : 0;
		total += 1;
	}
	if (totalChecklist > 0) {
		const checked = Object.values(s.checklist).filter((v) => v).length;
		parts += Math.min(checked, totalChecklist) / totalChecklist;
		total += 1;
	}
	if (totalExercises > 0) {
		const exerciseScore = Object.values(s.exerciseRatings).reduce(
			(acc, rating) => {
				if (rating === "got-it") return acc + 1;
				if (rating === "partial") return acc + 0.5;
				return acc;
			},
			0,
		);
		parts += Math.min(exerciseScore, totalExercises) / totalExercises;
		total += 1;
	}

	return total > 0 ? parts / total : 0;
}

export function getCourseCompletion(
	courseId: string,
	sections: {
		id: string;
		flashcards: { length: number };
		quiz: { length: number };
		checklist: { length: number };
		exercises: { length: number };
	}[],
): number {
	if (sections.length === 0) return 0;
	const sum = sections.reduce(
		(acc, s) =>
			acc +
			getSectionCompletion(
				courseId,
				s.id,
				s.flashcards.length,
				s.quiz.length,
				s.checklist.length,
				s.exercises.length,
			),
		0,
	);
	return sum / sections.length;
}

// --- Reset ---

export function resetAll(): void {
	state = defaultState();
	save();
	notifyListeners();
}

export function resetCourse(courseId: string): void {
	delete state.courses[courseId];
	// Remove card reviews for this course
	for (const key of Object.keys(state.cardReviews)) {
		if (key.startsWith(`${courseId}:`)) {
			delete state.cardReviews[key];
		}
	}
	save();
	notifyListeners();
}

// --- Route ---

export function setRoute(route: string): void {
	state.currentRoute = route;
	save();
}

// --- Listeners ---

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
	listeners.forEach((fn) => fn());
}
