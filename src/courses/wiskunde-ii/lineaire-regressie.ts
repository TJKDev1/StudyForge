// Wiskunde 2 — Lineaire Regressie & Interpretatie sectie

import type { SectionContent } from '../../core/types';

export const lineaireRegressie: SectionContent = {
  id: 'lineaire-regressie',
  title: 'Lineaire Regressie & Interpretatie',
  desc: 'Heatmaps, regressiecoëfficiënten, R², multicollineariteit en voorspellingen',
  theory: [
    { title: 'Heatmap interpreteren', content: `<p>Een <strong>heatmap</strong> toont correlaties tussen variabelen met kleuren. Bij EDA (Exploratory Data Analysis):</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li>Waarden dicht bij <strong>+1</strong> of <strong>−1</strong>: sterke correlatie</li><li>Waarden dicht bij <strong>0</strong>: zwakke/geen correlatie</li><li>Hoge correlatie tussen <em>features onderling</em>: wijst op <strong>multicollineariteit</strong></li></ul><div class="theory__quote">Multicollineariteit = onafhankelijke variabelen correleren sterk met elkaar. Dit maakt regressiecoëfficiënten instabiel. Overweeg één van de gecorreleerde features te verwijderen.</div>` },
    { title: 'Regressiecoëfficiënten interpreteren', content: `<p>Bij een lineair regressiemodel:</p><pre><code>y = snijpunt + b₁·x₁ + b₂·x₂ + b₃·x₃</code></pre><p>Elke coëfficiënt geeft aan hoeveel y verandert als die variabele met 1 toeneemt, <em>bij constante andere variabelen</em>.</p><p><strong>Voorbeeld gebouwonderhoud:</strong></p><table><tr><th>Variabele</th><th>Coëfficiënt</th><th>Interpretatie</th></tr><tr><td>Bouwjaar (jaren vanaf 1900)</td><td>−0.08</td><td>Elk jaar ouder → 0.08 jaar eerder onderhoud nodig</td></tr><tr><td>Materiaalconditie (1-10)</td><td>+1.2</td><td>Elk punt betere conditie → 1.2 jaar later onderhoud</td></tr><tr><td>Aantal gebruikers per dag</td><td>−0.003</td><td>Elke extra gebruiker → 0.003 jaar eerder onderhoud</td></tr><tr><td>Snijpunt (intercept)</td><td>15</td><td>Baseline: 15 jaar tot onderhoud bij alle variabelen = 0</td></tr></table>` },
    { title: 'Pearson r in heatmaps', content: `<p>Standaard worden in heatmaps <strong>Pearson's r</strong> correlaties getoond. Is dit altijd correct?</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li><strong>Ja</strong>, als alle variabelen continu zijn (interval/ratio) en de verbanden lineair zijn</li><li><strong>Nee</strong>, als er ordinale variabelen zijn (dan Spearman ρ) of niet-lineaire verbanden</li></ul><p>Bij het gebouwonderhoud-voorbeeld: als alle features continu/ratio zijn en de verbanden lineair lijken, dan is Pearson's r geschikt.</p><div class="theory__quote">Controleer altijd: zijn de variabelen minstens interval-niveau? Zijn de verbanden lineair? Zo niet, overweeg Spearman.</div>` },
    { title: 'Voorspelling berekenen', content: `<p><strong>Voorbeeld:</strong> InnovatieCentrum Den Haag</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li>Gebouwd in 1995 → bouwjaar = 1995 − 1900 = <strong>95</strong></li><li>Materiaalconditie = <strong>7</strong></li><li>Gebruikers per dag = <strong>3500</strong></li></ul><pre><code>y = 15 + (−0.08 × 95) + (1.2 × 7) + (−0.003 × 3500)
y = 15 − 7.6 + 8.4 − 10.5
y = <span class="num">5.3 jaar tot onderhoud</span></code></pre><p>We leven in 2025, dus onderhoud zou moeten plaatsvinden rond: <strong>2025 + 5.3 ≈ 2030</strong>.</p>` },
    { title: 'R² (R-squared) interpreteren', content: `<p><strong>R²</strong> geeft aan welk deel van de <em>variatie</em> in de afhankelijke variabele verklaard wordt door het model.</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li>R² = 0.74 → het model verklaart <strong>74% van de variatie</strong> in "jaren tot onderhoud"</li><li>De overige 26% wordt door andere factoren bepaald (niet in het model)</li></ul><div class="theory__quote"><strong>Let op!</strong> R² = 0.74 betekent NIET dat 74% van de voorspellingen correct zijn! Het gaat over verklaarde <em>variatie</em>, niet over nauwkeurigheid van individuele voorspellingen.</div><p>De veelgemaakte fout: "R² = 0.74 dus 74% van de voorspellingen is correct." Dit is <strong>onjuist</strong>. R² zegt niets over het percentage correcte voorspellingen, maar over hoeveel variatie het model kan verklaren.</p>` },
  ],
  flashcards: [
    { id: 'wlr1', front: 'Wat toont een heatmap?', back: 'Correlaties tussen variabelen via kleurintensiteit. Waarden van −1 tot +1.' },
    { id: 'wlr2', front: 'Wat wijst hoge correlatie tussen features onderling op?', back: 'Multicollineariteit. Dit maakt regressiecoëfficiënten instabiel.' },
    { id: 'wlr3', front: 'Coëfficiënt bouwjaar = −0.08. Wat betekent dit?', back: 'Elk jaar ouder → 0.08 jaar eerder onderhoud nodig (negatief verband).' },
    { id: 'wlr4', front: 'Coëfficiënt materiaalconditie = +1.2. Wat betekent dit?', back: 'Elk punt betere conditie → 1.2 jaar later onderhoud nodig (positief verband).' },
    { id: 'wlr5', front: 'Wat is R² (R-squared)?', back: 'Het deel van de variatie in y dat door het model verklaard wordt. R²=0.74 → 74% verklaarde variatie.' },
    { id: 'wlr6', front: 'Betekent R²=0.74 dat 74% van de voorspellingen correct zijn?', back: 'Nee! R² gaat over verklaarde variatie, niet over nauwkeurigheid van individuele voorspellingen.' },
    { id: 'wlr7', front: 'Wat is het snijpunt (intercept) in een regressiemodel?', back: 'De voorspelde waarde van y als alle onafhankelijke variabelen 0 zijn.' },
    { id: 'wlr8', front: 'Gebouw uit 1995: bouwjaar in jaren vanaf 1900?', back: '1995 − 1900 = 95.' },
  ],
  quiz: [
    { id: 'wlq1', question: 'R² = 0.74 betekent...', options: ['74% van de voorspellingen is correct', '74% van de variatie wordt verklaard door het model', 'Het model heeft 74% nauwkeurigheid', 'Er zijn 74 datapunten'], correct: 1, explanation: 'R² geeft het percentage verklaarde variatie aan, niet het percentage correcte voorspellingen.' },
    { id: 'wlq2', question: 'Multicollineariteit in een heatmap herken je aan...', options: ['Lage correlatie tussen features en target', 'Hoge correlatie tussen features onderling', 'Lage R²', 'Hoge standaardfout'], correct: 1, explanation: 'Features die sterk met elkaar correleren veroorzaken multicollineariteit.' },
    { id: 'wlq3', question: 'y = 15 − 0.08·bouwjaar + 1.2·conditie − 0.003·gebruikers. Bouwjaar=95, conditie=7, gebruikers=3500. Wat is y?', options: ['3.3', '5.3', '7.3', '10.3'], correct: 1, explanation: 'y = 15 − 7.6 + 8.4 − 10.5 = 5.3 jaar tot onderhoud.' },
    { id: 'wlq4', question: 'De coëfficiënt voor "gebruikers per dag" is −0.003. Dit betekent...', options: ['Meer gebruikers → later onderhoud', 'Meer gebruikers → eerder onderhoud', 'Gebruikers hebben geen effect', 'Het model is fout'], correct: 1, explanation: 'Negatieve coëfficiënt: elke extra gebruiker zorgt voor 0.003 jaar eerder onderhoud.' },
    { id: 'wlq5', question: 'Je collega zegt: "R²=0.74 dus 74% van onze voorspellingen klopt." Is dit correct?', options: ['Ja, dat is de definitie van R²', 'Nee, R² gaat over verklaarde variatie', 'Ja, maar alleen bij lineaire modellen', 'Nee, R² gaat over het aantal features'], correct: 1, explanation: 'R² beschrijft hoeveel variatie het model verklaart, niet het percentage correcte voorspellingen.' },
    { id: 'wlq6', question: 'Wanneer is Pearson\'s r NIET geschikt voor een heatmap?', options: ['Bij continue variabelen', 'Bij lineaire verbanden', 'Bij ordinale variabelen', 'Bij grote datasets'], correct: 2, explanation: 'Pearson vereist interval/ratio data. Bij ordinale variabelen gebruik je Spearman.' },
  ],
  exercises: [
    { id: 'wle1', type: 'calculation', prompt: 'Bereken het voorspelde aantal jaren tot onderhoud voor een gebouw uit 1980, materiaalconditie 5, 2000 gebruikers per dag. Model: y = 15 − 0.08·bouwjaar + 1.2·conditie − 0.003·gebruikers. Bouwjaar in jaren vanaf 1900.', answer: 'Bouwjaar = 1980−1900 = 80. y = 15 − 0.08×80 + 1.2×5 − 0.003×2000 = 15 − 6.4 + 6.0 − 6.0 = 8.6 jaar.' },
    { id: 'wle2', type: 'open', prompt: 'Interpreteer de heatmap: bouwjaar en aantal gebruikers hebben een correlatie van 0.85 met elkaar. Wat is het probleem?', answer: 'Multicollineariteit: bouwjaar en aantal gebruikers correleren sterk (0.85). Dit maakt de individuele regressiecoëfficiënten instabiel. Overweeg één van de twee te verwijderen.' },
    { id: 'wle3', type: 'open', prompt: 'Leg uit waarom R² = 0.74 NIET betekent dat 74% van de voorspellingen correct zijn.', answer: 'R² geeft aan hoeveel van de variatie in de afhankelijke variabele verklaard wordt door het model. Het zegt niets over het percentage individuele voorspellingen dat "correct" is. Een model kan 74% variatie verklaren maar toch flinke fouten maken bij individuele voorspellingen.' },
    { id: 'wle4', type: 'calculation', prompt: 'InnovatieCentrum Den Haag: gebouwd in 1995, materiaalconditie 7, 3500 gebruikers/dag. Wanneer is de volgende onderhoudsbeurt? (huidig jaar: 2025)', answer: 'Bouwjaar = 95. y = 15 − 0.08×95 + 1.2×7 − 0.003×3500 = 15 − 7.6 + 8.4 − 10.5 = 5.3 jaar. Onderhoudsbeurt: 2025 + 5.3 ≈ 2030.' },
  ],
  checklist: [
    { id: 'cwl1', label: 'Ik kan een heatmap interpreteren.' },
    { id: 'cwl2', label: 'Ik weet wat multicollineariteit is en hoe ik het herken.' },
    { id: 'cwl3', label: 'Ik kan regressiecoëfficiënten interpreteren.' },
    { id: 'cwl4', label: 'Ik kan een regressievergelijking invullen en y berekenen.' },
    { id: 'cwl5', label: 'Ik weet wat R² daadwerkelijk betekent (verklaarde variatie, NIET % correct).' },
    { id: 'cwl6', label: 'Ik weet wanneer Pearson r geschikt is voor een heatmap.' },
  ],
};
