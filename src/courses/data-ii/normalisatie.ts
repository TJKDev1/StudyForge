// Data II — Normaliseren, Standaardiseren & Regressie sectie

import type { SectionContent } from '../../core/types';

export const normalisatie: SectionContent = {
  id: 'normalisatie-regressie',
  title: 'Normaliseren, Standaardiseren & Regressie',
  desc: 'Formules, correlatie, regressiecoëfficiënten en multicollineariteit',
  theory: [
    { title: 'Normaliseren (min-max scaling)', content: `<p>Formule:</p><pre><code>(x - x_min) / (x_max - x_min)</code></pre><p>Resultaat ligt tussen <strong>0 en 1</strong>.</p><p>Voorbeeld: x=50, min=0, max=100 → (50-0)/(100-0) = <strong>0.5</strong></p>` },
    { title: 'Standaardiseren', content: `<p>Formule:</p><pre><code>(x - gemiddelde) / standaarddeviatie</code></pre><p>Berekent hoeveel standaarddeviaties een waarde van het gemiddelde afligt.</p><p>Voorbeeld: x=80, gem=70, sd=5 → (80-70)/5 = <strong>2</strong> (2 standaarddeviaties boven gemiddelde)</p><div class="theory__quote">Standaardiseren heeft meestal de voorkeur omdat het minder gevoelig is voor outliers.</div>` },
    { title: 'Correlatiecoëfficiënt', content: `<p>Geeft aan hoe sterk twee variabelen samenhangen.</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li>Positief: x stijgt → y stijgt</li><li>Negatief: x stijgt → y daalt</li><li>Geen verband: geen duidelijk patroon</li></ul>` },
    { title: 'Regressiecoëfficiënt', content: `<p>Geeft aan hoeveel y verandert als x met 1 toeneemt.</p><pre><code>y = 4 + 2x</code></pre><p>Regressiecoëfficiënt = <strong>2</strong>. Als x met 1 stijgt, stijgt y met 2.</p>` },
    { title: 'Wanneer zijn ze gelijk?', content: `<div class="theory__quote">Correlatie- en regressiecoëfficiënt zijn gelijk wanneer zowel x als y zijn gestandaardiseerd bij enkelvoudige lineaire regressie.</div>` },
    { title: 'Multicollineariteit', content: `<p>Bij meervoudige regressie (y = 4 + 2x₁ - 1.5x₂ + 0.5x₃) kunnen coëfficiënten minder stabiel zijn.</p><div class="theory__quote">Multicollineariteit = features lijken sterk op elkaar. Het model weet minder goed welke feature welk effect veroorzaakt. Coëfficiënten kunnen sterk veranderen bij nieuwe data.</div>` },
    { title: 'Regressiesom oefenen', content: `<p>Voorbeeld:</p><pre><code>Y = 4 + 2 * 3 - 1.5 * 2 + 0.5 * 5\nY = 4 + 6 - 3 + 2.5\nY = <span class="num">9.5</span></code></pre>` },
  ],
  flashcards: [
    { id: 'nf1', front: 'Formule normaliseren?', back: '(x - x_min) / (x_max - x_min). Resultaat tussen 0 en 1.' },
    { id: 'nf2', front: 'Formule standaardiseren?', back: '(x - gemiddelde) / standaarddeviatie. Eenheid: standaarddeviaties.' },
    { id: 'nf3', front: 'Welke methode heeft voorkeur?', back: 'Standaardiseren, omdat het minder gevoelig is voor outliers.' },
    { id: 'nf4', front: 'Eenheid na standaardiseren?', back: 'Standaarddeviaties.' },
    { id: 'nf5', front: 'Wat is een regressiecoëfficiënt?', back: 'Hoeveel y verandert als x met 1 toeneemt.' },
    { id: 'nf6', front: 'Wanneer zijn correlatie- en regressiecoëfficiënt gelijk?', back: 'Bij enkelvoudige lineaire regressie wanneer zowel x als y gestandaardiseerd zijn.' },
    { id: 'nf7', front: 'Wat is multicollineariteit?', back: 'Features lijken sterk op elkaar → model weet niet welke feature welk effect veroorzaakt → instabiele coëfficiënten.' },
  ],
  quiz: [
    { id: 'nq1', question: 'Normaliseren schaalt waarden naar...', options: ['0 tot 100', '-1 tot 1', '0 tot 1', 'Standaarddeviaties'], correct: 2, explanation: 'Min-max scaling schaalt naar het bereik 0 tot 1.' },
    { id: 'nq2', question: 'x=60, gem=50, sd=10. De gestandaardiseerde waarde is...', options: ['0.6', '1', '6', '10'], correct: 1, explanation: '(60-50)/10 = 1. De waarde ligt 1 standaarddeviatie boven het gemiddelde.' },
    { id: 'nq3', question: 'Y = 3 + 1.5 * 4 - 0.5 * 2. Wat is Y?', options: ['7', '8', '9', '10'], correct: 1, explanation: 'Y = 3 + 6 - 1 = 8.' },
    { id: 'nq4', question: 'Multicollineariteit veroorzaakt...', options: ['Snellere berekeningen', 'Instabiele regressiecoëfficiënten', 'Betere voorspellingen', 'Lagere correlatie'], correct: 1, explanation: 'Features die op elkaar lijken maken coëfficiënten instabiel.' },
  ],
  exercises: [],
  checklist: [
    { id: 'cn1', label: 'Ik ken de formule van normaliseren.' },
    { id: 'cn2', label: 'Ik ken de formule van standaardiseren.' },
    { id: 'cn3', label: 'Ik weet dat standaardiseren meestal voorkeur heeft.' },
    { id: 'cn4', label: 'Ik weet dat de eenheid na standaardiseren standaarddeviaties is.' },
    { id: 'cn5', label: 'Ik weet wat correlatie betekent.' },
    { id: 'cn6', label: 'Ik weet wat een regressiecoëfficiënt betekent.' },
    { id: 'cn7', label: 'Ik weet wanneer correlatie- en regressiecoëfficiënt gelijk zijn.' },
    { id: 'cn8', label: 'Ik weet wat multicollineariteit is.' },
    { id: 'cn9', label: 'Ik kan een regressievergelijking invullen.' },
  ],
};
