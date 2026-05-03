// ============================================
// THEORY — Collapsible theory blocks
// ============================================

import type { TheoryBlock } from "../core/types";
import { chevronSvg } from "./common";

export function renderTheory(
	blocks: TheoryBlock[],
	container: HTMLElement,
): void {
	blocks.forEach((block, i) => {
		const el = document.createElement("div");
		el.className = `theory${i === 0 ? " theory--open" : ""}`;
		el.innerHTML = `
      <button type="button" class="theory__header" aria-expanded="${i === 0 ? "true" : "false"}">
        <span class="theory__header-text">${block.title}</span>
        ${chevronSvg}
      </button>
      <div class="theory__body">${block.content}</div>
    `;
		const header = el.querySelector(".theory__header")!;
		header.addEventListener("click", () => {
			const isOpen = el.classList.toggle("theory--open");
			header.setAttribute("aria-expanded", String(isOpen));
		});
		container.appendChild(el);
	});
}
