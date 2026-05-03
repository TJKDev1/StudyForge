// ============================================
// COMMON — Shared UI helpers
// ============================================

export const chevronSvg = `<svg class="theory__chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="5,7 10,13 15,7"/></svg>`;
export const checkSvg = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg>`;

export function progressRingSvg(pct: number): string {
  const r = 7;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);
  return `<div class="nav-item__progress"><svg width="20" height="20" viewBox="0 0 20 20"><circle class="nav-item__progress-bg" cx="10" cy="10" r="${r}"/><circle class="nav-item__progress-fill" cx="10" cy="10" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${offset}"/></svg></div>`;
}

export function createDivider(): HTMLElement {
  const hr = document.createElement('hr');
  hr.className = 'divider';
  return hr;
}

export function daysUntil(dateStr: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function formatDaysUntil(dateStr: string): string {
  const days = daysUntil(dateStr);
  if (days < 0) return 'Voorbij';
  if (days === 0) return 'Vandaag!';
  if (days === 1) return 'Morgen';
  return `${days} dagen`;
}

/** Set CSS custom properties on an element for dynamic accent colors */
export function setAccentColors(el: HTMLElement, color: string, colorDim: string, colorSurface: string): void {
  el.style.setProperty('--accent', color);
  el.style.setProperty('--accent-dim', colorDim);
  el.style.setProperty('--accent-surface', colorSurface);
}
