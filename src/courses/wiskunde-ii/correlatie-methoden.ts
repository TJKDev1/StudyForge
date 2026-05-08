// Wiskunde 2 — Correlatie & Voorspelmethoden sectie

import type { SectionContent } from '../../core/types';

export const correlatieMethoden: SectionContent = {
  id: 'correlatie-methoden',
  title: 'Correlatie & Voorspelmethoden',
  desc: 'Pearson r, Spearman ρ, lineaire regressie, logistische regressie',
  theory: [
    { title: 'Pearson\'s r', content: `<p><strong>Pearson's r</strong> meet de <em>lineaire</em> samenhang tussen twee <strong>continue</strong> variabelen (interval/ratio).</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li>r = +1 → perfect positief lineair verband</li><li>r = 0 → geen lineair verband</li><li>r = −1 → perfect negatief lineair verband</li></ul><div class="theory__quote">Pearson's r <strong>vereist</strong> dat beide variabelen minstens interval-niveau zijn en dat het verband lineair is.</div>` },
    { title: 'Spearman\'s ρ (rho)', content: `<p><strong>Spearman's ρ</strong> meet de <em>monotone</em> samenhang op basis van <strong>rangorde</strong>. Geschikt voor ordinale data of wanneer het verband niet lineair maar wel monotoon is.</p><p>Verschil met Pearson:</p><table><tr><th></th><th>Pearson r</th><th>Spearman ρ</th></tr><tr><td>Meetniveau</td><td>Interval/Ratio</td><td>Ordinaal of hoger</td></tr><tr><td>Type verband</td><td>Lineair</td><td>Monotoon (stijgend/dalend)</td></tr><tr><td>Gevoelig voor uitschieters</td><td>Ja</td><td>Minder</td></tr></table>` },
    { title: 'Enkelvoudige lineaire regressie', content: `<p>Voorspelt een <strong>continue</strong> afhankelijke variabele (y) op basis van <strong>één</strong> onafhankelijke variabele (x):</p><pre><code>y = a + bx</code></pre><p>Waarbij a = snijpunt (intercept) en b = regressiecoëfficiënt (helling).</p><div class="theory__quote">Enkelvoudige lineaire regressie vereist een continue afhankelijke variabele en interval/ratio meetniveau.</div>` },
    { title: 'Multipele lineaire regressie', content: `<p>Voorspelt een <strong>continue</strong> afhankelijke variabele op basis van <strong>meerdere</strong> onafhankelijke variabelen:</p><pre><code>y = a + b₁x₁ + b₂x₂ + ... + bₙxₙ</code></pre><p>Elke coëfficiënt bₖ geeft aan hoeveel y verandert als xₖ met 1 toeneemt, <em>bij gelijkblijvende andere variabelen</em>.</p>` },
    { title: 'Logistische regressie', content: `<p><strong>Logistische regressie</strong> voorspelt een <strong>categorische</strong> afhankelijke variabele (binair: ja/nee, 0/1).</p><p>Het resultaat is een <strong>kans</strong> (0–1) dat een observatie tot een bepaalde klasse behoort.</p><div class="theory__quote">Gebruik logistische regressie wanneer de afhankelijke variabele categorisch is, niet continu!</div>` },
    { title: 'One-vs-Rest (OvR) logistic regression', content: `<p>Bij meer dan 2 klassen (bijv. Nutri-Score A t/m E) gebruik je <strong>One-vs-Rest</strong>:</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li>Train een apart model per klasse: "A vs niet-A", "B vs niet-B", etc.</li><li>Kies de klasse met de hoogste voorspelde kans</li></ul><p>Dit is nodig omdat standaard logistische regressie alleen binaire uitkomsten kan voorspellen.</p>` },
    { title: 'Toepassing: Nutri-Score voorspellen', content: `<p>Stel: je wilt de Nutri-Score (A-E) voorspellen op basis van producteigenschappen. Welke methode?</p><table><tr><th>Methode</th><th>Geschikt?</th><th>Waarom?</th></tr><tr><td>Pearson's r</td><td>❌ Nee</td><td>Nutri-Score is ordinaal, niet continu</td></tr><tr><td>Spearman ρ</td><td>✅ Ja (voor correlatie)</td><td>Werkt met ordinale data</td></tr><tr><td>Enkelvoudige lin. regressie</td><td>❌ Nee</td><td>Afhankelijke variabele is niet continu</td></tr><tr><td>Multipele lin. regressie</td><td>❌ Nee</td><td>Afhankelijke variabele is niet continu</td></tr><tr><td>Logistic regression</td><td>⚠️ Deels</td><td>Alleen voor binair (2 klassen), Nutri-Score heeft 5</td></tr><tr><td>One-vs-Rest logistic</td><td>✅ Ja</td><td>Kan meerdere klassen voorspellen via meerdere binaire modellen</td></tr></table>` },
  ],
  flashcards: [
    { id: 'wcm1', front: 'Wat meet Pearson\'s r?', back: 'De lineaire samenhang tussen twee continue variabelen (interval/ratio niveau).' },
    { id: 'wcm2', front: 'Wat meet Spearman\'s ρ?', back: 'De monotone samenhang op basis van rangorde. Geschikt voor ordinale data.' },
    { id: 'wcm3', front: 'Wanneer gebruik je Spearman in plaats van Pearson?', back: 'Bij ordinale data, niet-lineaire (maar wel monotone) verbanden, of als er uitschieters zijn.' },
    { id: 'wcm4', front: 'Wat is het verschil tussen enkelvoudige en multipele lineaire regressie?', back: 'Enkelvoudig: 1 onafhankelijke variabele (y = a + bx). Multipel: meerdere (y = a + b₁x₁ + b₂x₂ + ...).' },
    { id: 'wcm5', front: 'Wanneer gebruik je logistische regressie?', back: 'Wanneer de afhankelijke variabele categorisch/binair is (ja/nee, 0/1).' },
    { id: 'wcm6', front: 'Wat is One-vs-Rest?', back: 'Methode voor multi-class classificatie: train per klasse een binair logistisch model (A vs niet-A, B vs niet-B, etc.).' },
    { id: 'wcm7', front: 'Kan je Pearson\'s r gebruiken voor Nutri-Score (A-E)?', back: 'Nee, Nutri-Score is ordinaal. Pearson vereist interval/ratio niveau.' },
    { id: 'wcm8', front: 'Waarom is standaard logistic regression niet genoeg voor Nutri-Score?', back: 'Logistic regression is binair (2 klassen). Nutri-Score heeft 5 klassen → je hebt One-vs-Rest nodig.' },
  ],
  quiz: [
    { id: 'wcq1', question: 'Pearson\'s r is geschikt wanneer...', options: ['De data ordinaal is', 'Beide variabelen continu (interval/ratio) zijn', 'De afhankelijke variabele categorisch is', 'Er geen lineair verband is'], correct: 1, explanation: 'Pearson vereist continue variabelen met een lineair verband.' },
    { id: 'wcq2', question: 'Je wilt de Nutri-Score (A-E) voorspellen. Welke methode is het MEEST geschikt?', options: ['Pearson\'s r', 'Enkelvoudige lineaire regressie', 'Multipele lineaire regressie', 'One-vs-Rest logistic regression'], correct: 3, explanation: 'Nutri-Score heeft 5 categorieën → One-vs-Rest logistic regression kan meerdere klassen voorspellen.' },
    { id: 'wcq3', question: 'Spearman\'s ρ werkt met welk meetniveau?', options: ['Alleen nominaal', 'Ordinaal of hoger', 'Alleen interval', 'Alleen ratio'], correct: 1, explanation: 'Spearman werkt op rangorde en is geschikt voor ordinaal en hoger.' },
    { id: 'wcq4', question: 'Bij multipele lineaire regressie geldt y = 5 + 2x₁ - 3x₂. Als x₁ met 1 stijgt (x₂ constant), dan...', options: ['y stijgt met 5', 'y stijgt met 2', 'y daalt met 3', 'y stijgt met 4'], correct: 1, explanation: 'De coëfficiënt van x₁ is 2: y stijgt met 2 bij x₁ +1 en x₂ constant.' },
    { id: 'wcq5', question: 'Logistische regressie voorspelt...', options: ['Een continue waarde', 'Een kans (0 tot 1)', 'Een rangorde', 'Een correlatie'], correct: 1, explanation: 'Logistische regressie geeft de kans dat een observatie tot een bepaalde klasse behoort.' },
    { id: 'wcq6', question: 'Waarom is enkelvoudige lineaire regressie NIET geschikt om Nutri-Score te voorspellen?', options: ['Omdat er te weinig data is', 'Omdat de afhankelijke variabele niet continu is', 'Omdat er maar 1 feature is', 'Omdat het model te complex is'], correct: 1, explanation: 'Lineaire regressie vereist een continue afhankelijke variabele. Nutri-Score is ordinaal/categorisch.' },
  ],
  exercises: [
    { id: 'wce1', type: 'open', prompt: 'Geef voor de volgende methoden aan of je ze kunt gebruiken om de Nutri-Score (A-E) te voorspellen en waarom: 1) Pearson\'s r, 2) Spearman ρ, 3) Enkelvoudige lineaire regressie, 4) Multipele lineaire regressie, 5) Logistic regression, 6) One-vs-Rest logistic regression.', answer: '1) Nee — Nutri-Score is ordinaal, Pearson vereist interval/ratio. 2) Ja (voor correlatie) — werkt met ordinale data. 3) Nee — afhankelijke variabele niet continu. 4) Nee — afhankelijke variabele niet continu. 5) Deels — alleen binair, Nutri-Score heeft 5 klassen. 6) Ja — maakt per klasse een binair model.' },
    { id: 'wce2', type: 'open', prompt: 'Leg uit wanneer je Spearman ρ verkiest boven Pearson\'s r.', answer: 'Bij ordinale data (rangorde), bij niet-lineaire maar monotone verbanden, en bij uitschieters (Spearman is robuuster).' },
  ],
  checklist: [
    { id: 'cwc1', label: 'Ik weet wat Pearson\'s r meet en wanneer je het gebruikt.' },
    { id: 'cwc2', label: 'Ik weet wat Spearman\'s ρ meet en wanneer je het gebruikt.' },
    { id: 'cwc3', label: 'Ik ken het verschil tussen enkelvoudige en multipele lineaire regressie.' },
    { id: 'cwc4', label: 'Ik weet wanneer logistische regressie nodig is.' },
    { id: 'cwc5', label: 'Ik weet wat One-vs-Rest is en wanneer je het gebruikt.' },
    { id: 'cwc6', label: 'Ik kan per situatie de juiste methode kiezen en onderbouwen.' },
  ],
};
