// Ethiek & Recht — Belang sectie

import type { SectionContent } from '../../core/types';

export const belang: SectionContent = {
  id: 'belang',
  title: 'Belang van Recht & Ethiek',
  desc: 'Waarom data scientists rekening moeten houden met recht en ethiek',
  theory: [
    { title: 'Drie redenen', content: `<p>Bij deze vraag altijd drie redenen noemen:</p><ol style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li><strong>Technologie loopt voor op wetten</strong> — niet alles wat technisch kan is al juridisch geregeld</li><li><strong>Data scientists werken met persoonsgegevens</strong> — privacy moet beschermd (AVG)</li><li><strong>AI en data kunnen echte gevolgen hebben</strong> — sollicitaties, fraude, verzekeringen, zorg</li></ol>` },
    { title: 'Voorbeeldantwoord', content: `<div class="theory__quote">Recht en ethiek zijn belangrijk voor data scientists om drie redenen. Ten eerste loopt technologie vaak voor op wetten. Ethiek helpt dan om toch verantwoord te handelen. Ten tweede werken data scientists vaak met persoonsgegevens, waardoor privacy beschermd moet worden volgens de AVG. Ten derde kunnen data en AI-systemen echte gevolgen hebben voor mensen.</div>` },
  ],
  flashcards: [
    { id: 'bf1', front: 'Noem de drie redenen waarom recht en ethiek belangrijk zijn.', back: '1. Technologie loopt voor op wetten\n2. Data scientists werken met persoonsgegevens\n3. AI/data kan echte gevolgen hebben voor mensen' },
    { id: 'bf2', front: 'Verschil recht en ethiek?', back: 'Recht zegt wat mag, ethiek zegt wat verantwoord is.' },
    { id: 'bf3', front: 'Waarom is ethiek nodig als er al wetten zijn?', back: 'Technologie ontwikkelt sneller dan wetgeving. Niet alles is al juridisch geregeld.' },
  ],
  quiz: [
    { id: 'bq1', question: 'Welke reden hoort NIET bij het belang van ethiek voor data scientists?', options: ['Technologie loopt voor op wetten', 'AI kan echte gevolgen hebben', 'Data scientists verdienen meer met ethiek', 'Data scientists werken met persoonsgegevens'], correct: 2, explanation: 'De drie redenen zijn: technologie voorop, persoonsgegevens, en echte gevolgen voor mensen.' },
  ],
  exercises: [],
  checklist: [
    { id: 'eb1', label: 'Ik kan drie redenen noemen waarom recht en ethiek belangrijk zijn.' },
    { id: 'eb2', label: 'Ik ken het verschil tussen recht en ethiek.' },
  ],
};
