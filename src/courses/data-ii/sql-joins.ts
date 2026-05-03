// Data II — SQL Joins & Subqueries sectie

import type { SectionContent } from '../../core/types';

export const sqlJoins: SectionContent = {
  id: 'sql-joins',
  title: 'SQL Joins & Subqueries',
  desc: 'Meerdere tabellen koppelen en informatie uit relaties halen',
  theory: [
    { title: 'Wat is een JOIN?', content: `<p>Een <code>JOIN</code> koppelt gegevens uit meerdere tabellen.</p><pre><code><span class="kw">SELECT</span> p.first_name, p.last_name, a.status\n<span class="kw">FROM</span> patients <span class="kw">AS</span> p\n<span class="kw">JOIN</span> appointments <span class="kw">AS</span> a\n<span class="kw">ON</span> p.id = a.patient_id;</code></pre><p><code>AS</code> geeft een tabel een korte naam (alias).</p>` },
    { title: 'JOIN-soorten', content: `<table><tr><th>Type</th><th>Gebruik</th></tr><tr><td><code>JOIN</code> / <code>INNER JOIN</code></td><td>Alleen rijen met een match</td></tr><tr><td><code>LEFT JOIN</code></td><td>Alles uit de linkertabel, ook zonder match</td></tr><tr><td><code>LEFT JOIN ... WHERE IS NULL</code></td><td>Zoeken wie géén match heeft</td></tr></table>` },
    { title: 'Subquery', content: `<p>Een subquery is een query in een query.</p><pre><code><span class="kw">SELECT</span> medication_name, duration_days\n<span class="kw">FROM</span> prescriptions\n<span class="kw">WHERE</span> duration_days > (\n    <span class="kw">SELECT</span> <span class="fn">AVG</span>(duration_days)\n    <span class="kw">FROM</span> prescriptions\n);</code></pre><div class="theory__quote">Toon voorschriften die langer duren dan het gemiddelde.</div>` },
    { title: 'Correlated subquery', content: `<p>Hier gebruikt de subquery informatie uit de buitenste query.</p><pre><code><span class="kw">SELECT</span> mr1.patient_id, mr1.created_at,\n    (<span class="kw">SELECT</span> <span class="fn">COUNT</span>(*)\n     <span class="kw">FROM</span> medical_records <span class="kw">AS</span> mr2\n     <span class="kw">WHERE</span> mr2.patient_id = mr1.patient_id\n    ) <span class="kw">AS</span> totaal_dossiers_patient\n<span class="kw">FROM</span> medical_records <span class="kw">AS</span> mr1;</code></pre>` },
  ],
  flashcards: [
    { id: 'sj1', front: 'Wat doet een INNER JOIN?', back: 'Geeft alleen rijen terug die een match hebben in beide tabellen.' },
    { id: 'sj2', front: 'Wat doet een LEFT JOIN?', back: 'Geeft alle rijen uit de linkertabel, ook als er geen match is in de rechtertabel.' },
    { id: 'sj3', front: 'Hoe vind je rijen zonder match?', back: 'LEFT JOIN + WHERE rechtertabel.id IS NULL' },
    { id: 'sj4', front: 'Wat is een subquery?', back: 'Een query binnen een andere query, vaak in WHERE of SELECT.' },
    { id: 'sj5', front: 'Wat is een correlated subquery?', back: 'Een subquery die verwijst naar kolommen uit de buitenste query.' },
    { id: 'sj6', front: 'Wat doet AVG()?', back: 'Berekent het gemiddelde van een kolom.' },
    { id: 'sj7', front: 'Wat betekent AS in SQL?', back: 'Geeft een alias (korte naam) aan een tabel of kolom.' },
  ],
  quiz: [
    { id: 'jq1', question: 'Welk type JOIN gebruik je om patiënten ZONDER afspraak te vinden?', options: ['INNER JOIN', 'RIGHT JOIN', 'LEFT JOIN met WHERE IS NULL', 'CROSS JOIN'], correct: 2, explanation: 'LEFT JOIN behoudt alle rijen links, WHERE a.id IS NULL filtert op geen match.' },
    { id: 'jq2', question: 'Een correlated subquery verschilt van een gewone subquery doordat...', options: ['Het sneller is', 'Het verwijst naar de buitenste query', 'Het alleen in SELECT mag', 'Het altijd AVG gebruikt'], correct: 1, explanation: 'Een correlated subquery gebruikt kolommen uit de buitenste query.' },
    { id: 'jq3', question: 'Wat geeft een INNER JOIN terug als er geen match is?', options: ['NULL-waarden', 'Lege rij', 'Niets — de rij wordt overgeslagen', 'Een foutmelding'], correct: 2, explanation: 'INNER JOIN geeft alleen rijen terug met een match in beide tabellen.' },
  ],
  exercises: [
    { id: 'je1', type: 'code', language: 'sql', prompt: 'Vind alle patiënten zonder afspraak.', answer: `SELECT p.first_name, p.last_name\nFROM patients AS p\nLEFT JOIN appointments AS a\nON p.id = a.patient_id\nWHERE a.id IS NULL;` },
    { id: 'je2', type: 'code', language: 'sql', prompt: 'Toon medicatie met kuurlengte langer dan gemiddeld.', answer: `SELECT medication_name, duration_days\nFROM prescriptions\nWHERE duration_days > (\n    SELECT AVG(duration_days)\n    FROM prescriptions\n);` },
    { id: 'je3', type: 'code', language: 'sql', prompt: 'Toon per dossier hoeveel dossiers die patiënt totaal heeft.', answer: `SELECT mr1.patient_id, mr1.created_at,\n    (SELECT COUNT(*)\n     FROM medical_records AS mr2\n     WHERE mr2.patient_id = mr1.patient_id\n    ) AS totaal_dossiers_patient\nFROM medical_records AS mr1;` },
  ],
  checklist: [
    { id: 'cj1', label: 'Ik kan een JOIN schrijven.' },
    { id: 'cj2', label: 'Ik kan een LEFT JOIN schrijven.' },
    { id: 'cj3', label: 'Ik kan rijen zonder match vinden met IS NULL.' },
    { id: 'cj4', label: 'Ik kan een subquery gebruiken.' },
    { id: 'cj5', label: 'Ik kan AVG() gebruiken in een subquery.' },
    { id: 'cj6', label: 'Ik begrijp tabelaliassen zoals p, a, mr.' },
  ],
};
