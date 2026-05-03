// ============================================
// MAIN — StudyForge entry point
// ============================================

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";

// Register all courses (side effect import)
import "./courses/index";

import { renderNav } from "./components/nav";
import { getCourse, getSection as getRegistrySection } from "./core/registry";
import { addRoute, initRouter, navigate, setNotFound } from "./core/router";
import { resetAll, subscribe } from "./core/state";
import { renderCourse } from "./pages/course";
import { renderHome } from "./pages/home";
import { renderMixMode } from "./pages/mix-mode";
import { renderReview } from "./pages/review";
import { renderSection } from "./pages/section";

const content = document.getElementById("content")!;
const navContainer = document.getElementById("nav-container")!;
const menuToggle = document.getElementById("menu-toggle")!;
const sidebar = document.getElementById("sidebar")!;
const resetBtn = document.getElementById("reset-progress")!;

// === SIDEBAR MOBILE ===

let overlay: HTMLElement | null = null;

function ensureOverlay(): HTMLElement {
	if (!overlay) {
		overlay = document.createElement("div");
		overlay.className = "sidebar-overlay";
		overlay.setAttribute("aria-hidden", "true");
		document.body.appendChild(overlay);
		overlay.addEventListener("click", closeSidebar);
	}
	return overlay;
}

function setSidebarOpen(open: boolean): void {
	sidebar.classList.toggle("sidebar--open", open);
	ensureOverlay().classList.toggle("sidebar-overlay--visible", open);
	document.body.classList.toggle("body--nav-open", open);
	menuToggle.setAttribute("aria-expanded", String(open));
	menuToggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
}

function closeSidebar(): void {
	setSidebarOpen(false);
}

menuToggle.addEventListener("click", () => {
	setSidebarOpen(!sidebar.classList.contains("sidebar--open"));
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") closeSidebar();
});

window
	.matchMedia("(min-width: 769px)")
	.addEventListener("change", closeSidebar);

// === RESET ===

resetBtn.addEventListener("click", () => {
	if (
		confirm(
			"Alle voortgang, SRS-kaarten en streaks wissen? Dit kan niet ongedaan worden gemaakt.",
		)
	) {
		resetAll();
		navigate("#/");
		closeSidebar();
		updateNav();
	}
});

// === NAV UPDATE ===

function updateNav(): void {
	renderNav(navContainer, closeSidebar);
}

// === ROUTES ===

// Home
addRoute("/", () => {
	renderHome(content);
	updateNav();
});

// Course overview
addRoute("/course/:courseId", (params) => {
	const course = getCourse(params.courseId);
	if (!course) {
		navigate("#/");
		return;
	}
	renderCourse(course, content);
	updateNav();
});

// Section detail
addRoute("/course/:courseId/:sectionId", (params) => {
	const course = getCourse(params.courseId);
	const section = course
		? getRegistrySection(params.courseId, params.sectionId)
		: undefined;
	if (!course || !section) {
		navigate("#/");
		return;
	}
	renderSection(course, section, content);
	updateNav();
});

// SRS Review
addRoute("/review", () => {
	renderReview(content);
	updateNav();
});

// Mix Mode
addRoute("/mix", () => {
	renderMixMode(content);
	updateNav();
});

// 404
setNotFound(() => {
	navigate("#/");
});

// === SUBSCRIBE TO STATE CHANGES ===

subscribe(() => updateNav());

// === INIT ===

initRouter();
updateNav();
