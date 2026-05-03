// ============================================
// ICONS — Inline SVG icon library
// ============================================
// Replaces all emoji usage with clean monoline SVGs.
// All icons are 20x20 viewBox, stroke-based, currentColor.

const s = (d: string, size = 20) =>
  `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

const sf = (d: string, size = 20) =>
  `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="currentColor" stroke="none">${d}</svg>`;

// --- Course icons ---
export const iconDatabase = s('<path d="M3 5c0-1.7 3.1-3 7-3s7 1.3 7 3"/><ellipse cx="10" cy="5" rx="7" ry="3"/><path d="M3 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M3 10c0 1.7 3.1 3 7 3s7-1.3 7-3"/>');
export const iconScale = s('<path d="M10 2v16"/><path d="M3 6l7-4 7 4"/><path d="M1 12a5 5 0 004 0"/><path d="M15 12a5 5 0 004 0"/><path d="M3 6l-2 6c0 1.1 1.8 2 3 2s3-.9 3-2L5 6"/><path d="M15 6l-2 6c0 1.1 1.8 2 3 2s3-.9 3-2l-2-6"/>');

// --- Section icons ---
export const iconBook = s('<path d="M2 4c2-1 4-1 8 1 4-2 6-2 8-1v13c-2-1-4-1-8 1-4-2-6-2-8-1V4z"/><path d="M10 5v13"/>');
export const iconCards = s('<rect x="3" y="4" width="10" height="14" rx="1.5"/><rect x="7" y="2" width="10" height="14" rx="1.5"/><line x1="9.5" y1="6" x2="14.5" y2="6"/><line x1="9.5" y1="9" x2="14.5" y2="9"/>');
export const iconQuestion = s('<circle cx="10" cy="10" r="8"/><path d="M7.5 7.5a2.5 2.5 0 014.5 1.5c0 1.5-2.5 2-2.5 3.5"/><circle cx="10" cy="15" r=".5" fill="currentColor" stroke="none"/>');
export const iconCode = s('<polyline points="6,5 2,10 6,15"/><polyline points="14,5 18,10 14,15"/><line x1="11" y1="3" x2="9" y2="17"/>');

// --- Navigation/tools ---
export const iconRefresh = s('<path d="M3 10a7 7 0 0113.4-2.8"/><polyline points="17 3 17 7 13 7"/><path d="M17 10a7 7 0 01-13.4 2.8"/><polyline points="3 17 3 13 7 13"/>');
export const iconShuffle = s('<polyline points="16,3 19,6 16,9"/><path d="M2 17h3a5 5 0 004-2l2-3a5 5 0 014-2h4"/><polyline points="16,17 19,14 16,11"/><path d="M2 6h3a5 5 0 014 2l2 3a5 5 0 004 2h4"/>');

// --- Status/feedback ---
export const iconFlame = s('<path d="M10 18c-3.3 0-6-2.2-6-6 0-3 2-5 3.5-7C9 3.5 10 2 10 2s1 1.5 2.5 3c1.5 2 3.5 4 3.5 7 0 3.8-2.7 6-6 6z"/><path d="M10 18c-1.5 0-3-1-3-3 0-1.5 1-2.5 2-3.5.5-.5 1-1.2 1-1.2s.5.7 1 1.2c1 1 2 2 2 3.5 0 2-1.5 3-3 3z"/>');
export const iconTarget = s('<circle cx="10" cy="10" r="8"/><circle cx="10" cy="10" r="5"/><circle cx="10" cy="10" r="2"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="10" y1="16" x2="10" y2="18"/><line x1="2" y1="10" x2="4" y2="10"/><line x1="16" y1="10" x2="18" y2="10"/>');
export const iconClock = s('<circle cx="10" cy="10" r="8"/><polyline points="10,5 10,10 13.5,12.5"/>');
export const iconBox = s('<path d="M2 6l8-4 8 4v8l-8 4-8-4V6z"/><path d="M2 6l8 4"/><path d="M10 10v8"/><path d="M18 6l-8 4"/>');
export const iconLayers = s('<polygon points="10,2 18,7 10,12 2,7"/><polyline points="2,12 10,17 18,12"/><polyline points="2,9.5 10,14.5 18,9.5"/>');
export const iconHint = s('<circle cx="10" cy="7" r="5"/><line x1="10" y1="12" x2="10" y2="14"/><line x1="7" y1="17" x2="13" y2="17"/><line x1="8" y1="19" x2="12" y2="19"/><path d="M7.5 12a4 4 0 010-1"/>');
export const iconLightbulb = s('<path d="M7 15h6"/><path d="M8 17h4"/><circle cx="10" cy="8" r="5"/><path d="M7 12.5C5.5 11.5 5 10 5 8a5 5 0 0110 0c0 2-.5 3.5-2 4.5"/>');

// --- Utility ---
export const iconChevron = `<svg class="theory__chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="5,7 10,13 15,7"/></svg>`;
export const iconCheck = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="2,6 5,9 10,3"/></svg>`;

/**
 * Wrap an icon in a section-icon container with dynamic colors.
 */
export function sectionIcon(icon: string, color: string, bg: string): string {
  return `<span class="section__icon" style="background:${bg};color:${color}">${icon}</span>`;
}
