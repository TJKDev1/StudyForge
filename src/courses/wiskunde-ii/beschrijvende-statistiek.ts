// Wiskunde 2 — Beschrijvende Statistiek sectie

import type { SectionContent } from '../../core/types';

export const beschrijvendeStatistiek: SectionContent = {
  id: 'beschrijvende-statistiek',
  title: 'Beschrijvende Statistiek',
  desc: 'Gemiddelde, mediaan, modus, standaarddeviatie en uitrekenmethoden',
  theory: [
    { title: 'Gemiddelde (mean)', content: `<p>Het <strong>gemiddelde</strong> is de som van alle waarden gedeeld door het aantal waarden:</p><pre><code>gemiddelde = Σx / n</code></pre><p>Voorbeeld: {2, 4, 6} → (2+4+6)/3 = <strong>4</strong></p><div class="theory__quote">Het gemiddelde is gevoelig voor uitschieters (extreme waarden).</div>` },
    { title: 'Mediaan (median)', content: `<p>De <strong>mediaan</strong> is de middelste waarde als je alle waarden op volgorde zet.</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li>Bij een <strong>oneven</strong> aantal: de middelste waarde</li><li>Bij een <strong>even</strong> aantal: het gemiddelde van de twee middelste waarden</li></ul><p>Voorbeeld: {1, 3, 5, 7, 9} → mediaan = <strong>5</strong></p><p>Voorbeeld: {1, 3, 5, 7} → mediaan = (3+5)/2 = <strong>4</strong></p>` },
    { title: 'Modus (mode)', content: `<p>De <strong>modus</strong> is de waarde die het <em>vaakst</em> voorkomt.</p><p>Voorbeeld: {1, 1, 2, 3, 4} → modus = <strong>1</strong></p><p>Er kunnen meerdere modi zijn (bimodaal, multimodaal), of geen modus als alle waarden even vaak voorkomen.</p>` },
    { title: 'Oefenvraag: gemiddelde 6, mediaan 7, modus 1', content: `<p>Geef een reeks van 6 getallen waarvoor het gemiddelde 6 is, de mediaan 7 en de modus 1.</p><p><strong>Stappen:</strong></p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li>Gemiddelde = 6 → som van 6 getallen = 36</li><li>Mediaan = 7 → op volgorde gezet is het gemiddelde van de 3e en 4e waarde = 7</li><li>Modus = 1 → 1 moet vaker voorkomen dan andere waarden</li></ul><p>Mogelijke oplossing: <strong>{1, 1, 7, 7, 10, 10}</strong> → som=36, mediaan=(7+7)/2=7, modus=1 (als je 1 vaker laat voorkomen).</p><p>Beter: <strong>{1, 1, 1, 7, 7, 19}</strong> → som=36, mediaan=(1+7)/2=4. Dat klopt niet!</p><p>Correcte aanpak: <strong>{1, 1, 5, 9, 10, 10}</strong> → som=36, mediaan=(5+9)/2=7, modus=1 ✓</p><div class="theory__quote">Tip: begin met de mediaan (de twee middelste waarden moeten samen 14 zijn), zorg dat 1 minstens 2× voorkomt, en vul aan tot som = 36.</div>` },
    { title: 'Standaarddeviatie & Variantie', content: `<p>De <strong>variantie</strong> meet hoe ver waarden van het gemiddelde afliggen:</p><pre><code>σ² = Σ(xᵢ − gemiddelde)² / n</code></pre><p>De <strong>standaarddeviatie</strong> is de wortel van de variantie:</p><pre><code>σ = √(σ²)</code></pre><div class="theory__quote">Standaarddeviatie heeft dezelfde eenheid als de oorspronkelijke data, variantie heeft de eenheid in het kwadraat.</div>` },
    { title: 'Keuze van maat', content: `<p>Welke beschrijvende statistiek gebruik je?</p><table><tr><th>Maat</th><th>Wanneer gebruiken?</th></tr><tr><td>Gemiddelde + SD</td><td>Bij (redelijk) symmetrische verdelingen, interval/ratio niveau</td></tr><tr><td>Mediaan + IQR</td><td>Bij scheve verdelingen of als er uitschieters zijn</td></tr><tr><td>Modus</td><td>Bij nominale data of om de meest voorkomende categorie te vinden</td></tr></table>` },
  ],
  flashcards: [
    { id: 'wbs1', front: 'Formule gemiddelde?', back: 'Som van alle waarden / aantal waarden: Σx / n.' },
    { id: 'wbs2', front: 'Wat is de mediaan?', back: 'De middelste waarde bij oneven n, of het gemiddelde van de twee middelste bij even n.' },
    { id: 'wbs3', front: 'Wat is de modus?', back: 'De waarde die het vaakst voorkomt.' },
    { id: 'wbs4', front: 'Is het gemiddelde gevoelig voor uitschieters?', back: 'Ja! Extreme waarden trekken het gemiddelde omhoog of omlaag.' },
    { id: 'wbs5', front: 'Wat is de standaarddeviatie?', back: 'De wortel van de variantie. Meet hoe ver waarden gemiddeld van het gemiddelde afliggen.' },
    { id: 'wbs6', front: 'Wanneer kies je mediaan boven gemiddelde?', back: 'Bij scheve verdelingen of als er uitschieters zijn.' },
    { id: 'wbs7', front: 'Wat is het verschil tussen variantie en standaarddeviatie?', back: 'Variantie = σ² (eenheid in kwadraat), standaarddeviatie = σ (zelfde eenheid als data).' },
  ],
  quiz: [
    { id: 'wbq1', question: 'De reeks {2, 5, 5, 8, 10}. Wat is de modus?', options: ['2', '5', '6', '10'], correct: 1, explanation: '5 komt twee keer voor, de rest één keer.' },
    { id: 'wbq2', question: 'De reeks {3, 7, 9, 15}. Wat is de mediaan?', options: ['7', '8', '9', '8.5'], correct: 1, explanation: 'Even aantal waarden: (7+9)/2 = 8.' },
    { id: 'wbq3', question: 'Gemiddelde van {1, 1, 5, 9, 10, 10}?', options: ['5', '6', '7', '8'], correct: 1, explanation: 'Som = 36, n = 6: 36/6 = 6.' },
    { id: 'wbq4', question: 'Welke maat is het MINST gevoelig voor uitschieters?', options: ['Gemiddelde', 'Mediaan', 'Standaarddeviatie', 'Variantie'], correct: 1, explanation: 'De mediaan kijkt alleen naar de middelste waarde(n), niet naar extreme waarden.' },
    { id: 'wbq5', question: 'Bij een sterk scheve verdeling kies je voor centrummaat...', options: ['Gemiddelde', 'Modus', 'Mediaan', 'Range'], correct: 2, explanation: 'De mediaan is robuuster bij scheve verdelingen.' },
    { id: 'wbq6', question: 'Reeks met gemiddelde 6, mediaan 7, modus 1 — welke eigenschap MOET gelden?', options: ['Alle waarden zijn positief', 'De som is 36 (bij 6 getallen)', 'De reeks is symmetrisch', 'Er zijn minstens 10 waarden'], correct: 1, explanation: 'Bij 6 getallen met gemiddelde 6: som = 6 × 6 = 36.' },
  ],
  exercises: [
    { id: 'wbe1', type: 'calculation', prompt: 'Geef een reeks van 6 getallen met gemiddelde 6, mediaan 7 en modus 1.', answer: 'Bijvoorbeeld: {1, 1, 5, 9, 10, 10}. Controle: som=36→gem=6, mediaan=(5+9)/2=7, modus=1 (komt 2× voor).' },
    { id: 'wbe2', type: 'calculation', prompt: 'Bereken het gemiddelde en de mediaan van: {2, 3, 3, 5, 7, 100}.', answer: 'Gemiddelde = 120/6 = 20. Mediaan = (3+5)/2 = 4. Het gemiddelde is sterk beïnvloed door de uitschieter 100.' },
    { id: 'wbe3', type: 'calculation', prompt: 'Bereken de variantie van {2, 4, 6}. Gemiddelde = 4.', answer: 'Afwijkingen: (2−4)²=4, (4−4)²=0, (6−4)²=4. Variantie = (4+0+4)/3 = 8/3 ≈ 2.67.' },
  ],
  checklist: [
    { id: 'cwb1', label: 'Ik kan het gemiddelde berekenen.' },
    { id: 'cwb2', label: 'Ik kan de mediaan bepalen (ook bij even aantal waarden).' },
    { id: 'cwb3', label: 'Ik weet wat de modus is.' },
    { id: 'cwb4', label: 'Ik weet wanneer ik mediaan boven gemiddelde kies.' },
    { id: 'cwb5', label: 'Ik kan de standaarddeviatie en variantie berekenen.' },
    { id: 'cwb6', label: 'Ik kan een reeks construeren met gegeven gemiddelde, mediaan en modus.' },
  ],
};
