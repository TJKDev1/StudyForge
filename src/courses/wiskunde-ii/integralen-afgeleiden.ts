// Wiskunde 2 — Integralen & Afgeleiden sectie

import type { SectionContent } from '../../core/types';

export const integralenAfgeleiden: SectionContent = {
  id: 'integralen-afgeleiden',
  title: 'Integralen & Afgeleiden',
  desc: 'Bepaalde integralen, afgeleiden, oppervlakte onder een grafiek',
  theory: [
    { title: 'Afgeleide (derivative)', content: `<p>De <strong>afgeleide</strong> van een functie geeft de helling (steilheid) aan op elk punt. Notatie: <code>f'(x)</code> of <code>dy/dx</code>.</p><table><tr><th>Functie f(x)</th><th>Afgeleide f'(x)</th></tr><tr><td>x<sup>n</sup></td><td>n · x<sup>n−1</sup></td></tr><tr><td>a · x</td><td>a</td></tr><tr><td>constante c</td><td>0</td></tr><tr><td>sin(x)</td><td>cos(x)</td></tr><tr><td>cos(x)</td><td>−sin(x)</td></tr><tr><td>e<sup>x</sup></td><td>e<sup>x</sup></td></tr></table><div class="theory__quote">De afgeleide van x<sup>n</sup> is n · x<sup>n−1</sup>. Dit is de <strong>machtsregel</strong>.</div>` },
    { title: 'Onbepaalde integraal', content: `<p>De <strong>onbepaalde integraal</strong> (primitieve) is het omgekeerde van de afgeleide:</p><table><tr><th>Functie f(x)</th><th>Primitieve F(x)</th></tr><tr><td>x<sup>n</sup></td><td>x<sup>n+1</sup> / (n+1) + C</td></tr><tr><td>a (constante)</td><td>a · x + C</td></tr><tr><td>1/x</td><td>ln|x| + C</td></tr></table><div class="theory__quote">Vergeet de constante C niet bij onbepaalde integralen! Bij bepaalde integralen valt C weg.</div>` },
    { title: 'Bepaalde integraal = oppervlakte', content: `<p>De <strong>bepaalde integraal</strong> berekent de oppervlakte onder de grafiek van een functie tussen twee grenzen:</p><pre><code>∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)</code></pre><p>Hierbij is F(x) de primitieve van f(x).</p><p><strong>Voorbeeld:</strong> Snelheid V(t) = 2t. Afstand na 12 seconden:</p><pre><code>∫<sub>0</sub><sup>12</sup> 2t dt = [t²]<sub>0</sub><sup>12</sup> = 12² − 0² = <span class="num">144 meter</span></code></pre><div class="theory__quote">De bepaalde integraal van snelheid over tijd geeft de afgelegde afstand. Dit is de oppervlakte onder de snelheidsgrafiek.</div>` },
    { title: 'Grafisch interpreteren', content: `<p>Bij een <strong>snelheid-tijd grafiek</strong> (V-t diagram):</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li>De <strong>oppervlakte</strong> onder de grafiek = afgelegde afstand</li><li>De <strong>helling</strong> van de grafiek = versnelling</li><li>Bij een lineaire grafiek V(t) = at is de oppervlakte een driehoek: ½ × basis × hoogte</li></ul><p>Voorbeeld: V(t) = 2t, na 12 seconden: V(12) = 24 m/s. Oppervlakte driehoek = ½ × 12 × 24 = <strong>144 m</strong>.</p>` },
  ],
  flashcards: [
    { id: 'wia1', front: 'Wat is de afgeleide van x³?', back: '3x². Machtsregel: n · x^(n−1).' },
    { id: 'wia2', front: 'Wat is de primitieve van x²?', back: 'x³/3 + C. Regel: x^(n+1)/(n+1) + C.' },
    { id: 'wia3', front: 'Wat berekent de bepaalde integraal?', back: 'De oppervlakte onder de grafiek tussen twee grenzen: ∫ₐᵇ f(x)dx = F(b) − F(a).' },
    { id: 'wia4', front: 'Wat stelt de oppervlakte onder een V-t grafiek voor?', back: 'De afgelegde afstand.' },
    { id: 'wia5', front: 'Wat stelt de helling van een V-t grafiek voor?', back: 'De versnelling.' },
    { id: 'wia6', front: 'Hoe bereken je ∫₀¹² 2t dt?', back: 'Primitieve van 2t is t². Invullen: 12² − 0² = 144.' },
    { id: 'wia7', front: 'Wat is de afgeleide van een constante?', back: '0. Constanten veranderen niet, dus de helling is 0.' },
    { id: 'wia8', front: 'Waarom valt de constante C weg bij bepaalde integralen?', back: 'Omdat je F(b) − F(a) berekent: de C in F(b) en F(a) valt tegen elkaar weg.' },
  ],
  quiz: [
    { id: 'wiq1', question: 'Wat is de afgeleide van f(x) = 5x³?', options: ['5x²', '15x²', '15x³', '3x²'], correct: 1, explanation: 'Machtsregel: 5 · 3 · x^(3−1) = 15x².' },
    { id: 'wiq2', question: 'Wat is ∫₀⁴ 3x² dx?', options: ['48', '64', '36', '12'], correct: 1, explanation: 'Primitieve van 3x² is x³. Invullen: 4³ − 0³ = 64.' },
    { id: 'wiq3', question: 'De oppervlakte onder een snelheid-tijd grafiek geeft...', options: ['De versnelling', 'De afgelegde afstand', 'De gemiddelde snelheid', 'De tijd'], correct: 1, explanation: 'De integraal van snelheid over tijd = afstand.' },
    { id: 'wiq4', question: 'V(t) = 2t. Wat is de afstand na 12 seconden?', options: ['24 m', '72 m', '144 m', '288 m'], correct: 2, explanation: '∫₀¹² 2t dt = [t²]₀¹² = 144 − 0 = 144 meter.' },
    { id: 'wiq5', question: 'Wat is de primitieve van 6x?', options: ['6', '6x²', '3x²', '3x² + C'], correct: 3, explanation: '6 · x^(1+1)/(1+1) + C = 6x²/2 + C = 3x² + C.' },
    { id: 'wiq6', question: 'De helling van een V-t grafiek geeft...', options: ['De afgelegde afstand', 'De gemiddelde snelheid', 'De versnelling', 'De positie'], correct: 2, explanation: 'De afgeleide van snelheid naar tijd is de versnelling.' },
  ],
  exercises: [
    { id: 'wie1', type: 'calculation', prompt: 'Bereken ∫₀⁶ 4t dt.', answer: 'Primitieve van 4t is 2t². Invullen: 2·6² − 2·0² = 2·36 = 72.' },
    { id: 'wie2', type: 'calculation', prompt: 'Een fietser rijdt met snelheid V(t) = 3t m/s. Bereken de afstand na 10 seconden.', answer: '∫₀¹⁰ 3t dt = [3t²/2]₀¹⁰ = 3·100/2 = 150 meter.' },
    { id: 'wie3', type: 'calculation', prompt: 'Bereken de afgeleide van f(x) = 4x³ − 2x² + 7x − 3.', answer: 'f\'(x) = 12x² − 4x + 7. Machtsregel per term, constante valt weg.' },
    { id: 'wie4', type: 'open', prompt: 'V(t) = 2t. Teken een V-t grafiek en arceer het gebied dat de afstand na 12 seconden voorstelt.', answer: 'Rechte lijn van (0,0) naar (12,24). Het gearceerde driehoekige gebied onder de lijn = ½ × 12 × 24 = 144 meter.' },
  ],
  checklist: [
    { id: 'cwa1', label: 'Ik ken de machtsregel voor afgeleiden.' },
    { id: 'cwa2', label: 'Ik kan de primitieve van een machtsfunctie berekenen.' },
    { id: 'cwa3', label: 'Ik weet hoe je een bepaalde integraal uitrekent (F(b) − F(a)).' },
    { id: 'cwa4', label: 'Ik weet dat de oppervlakte onder een V-t grafiek de afstand geeft.' },
    { id: 'cwa5', label: 'Ik kan grafisch de oppervlakte onder een curve interpreteren.' },
    { id: 'cwa6', label: 'Ik weet dat de helling van een V-t grafiek de versnelling geeft.' },
  ],
};
