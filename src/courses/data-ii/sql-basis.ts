// Data II — SQL Basis sectie

import type { SectionContent } from '../../core/types';

export const sqlBasis: SectionContent = {
  id: 'sql-basis',
  title: 'SQL Basis',
  desc: 'Queries op één tabel: SELECT, WHERE, GROUP BY, HAVING',
  theory: [
    { title: 'Basisstructuur', content: `<pre><code><span class="kw">SELECT</span> kolommen\n<span class="kw">FROM</span> tabel\n<span class="kw">WHERE</span> voorwaarde;</code></pre><p>De basisstructuur van elke SQL-query bestaat uit drie delen: welke kolommen je wilt zien (SELECT), uit welke tabel (FROM), en welke rijen je wilt filteren (WHERE).</p>` },
    { title: 'Belangrijke onderdelen', content: `<table><tr><th>Onderdeel</th><th>Betekenis</th></tr><tr><td><code>SELECT</code></td><td>Welke kolommen je wilt zien</td></tr><tr><td><code>FROM</code></td><td>Uit welke tabel</td></tr><tr><td><code>WHERE</code></td><td>Welke rijen je wilt filteren</td></tr><tr><td><code>LIKE 'Smit%'</code></td><td>Begint met "Smit"</td></tr><tr><td><code>&lt;</code>, <code>&gt;</code>, <code>=</code></td><td>Vergelijken</td></tr><tr><td><code>AND</code></td><td>Meerdere voorwaarden combineren</td></tr><tr><td><code>COUNT()</code></td><td>Aantal tellen</td></tr><tr><td><code>GROUP BY</code></td><td>Groeperen</td></tr><tr><td><code>HAVING</code></td><td>Filteren ná groeperen</td></tr></table>` },
    { title: 'WHERE vs HAVING', content: `<p><strong>WHERE</strong> gebruik je <em>vóór</em> groeperen.</p><p><strong>HAVING</strong> gebruik je <em>ná</em> GROUP BY.</p><div class="theory__quote">WHERE filtert individuele rijen, HAVING filtert groepen.</div>` },
  ],
  flashcards: [
    { id: 'sb1', front: 'Wat doet SELECT?', back: 'Bepaalt welke kolommen je wilt zien in het resultaat.' },
    { id: 'sb2', front: 'Wat doet WHERE?', back: 'Filtert individuele rijen vóór groeperen.' },
    { id: 'sb3', front: 'Wat doet HAVING?', back: 'Filtert groepen ná GROUP BY.' },
    { id: 'sb4', front: 'Wat doet COUNT()?', back: 'Telt het aantal rijen (of niet-NULL waarden).' },
    { id: 'sb5', front: 'Wat doet LIKE \'Smit%\'?', back: 'Zoekt waarden die beginnen met "Smit". % is een wildcard voor nul of meer tekens.' },
    { id: 'sb6', front: 'Verschil WHERE en HAVING?', back: 'WHERE filtert vóór groeperen, HAVING filtert ná GROUP BY.' },
    { id: 'sb7', front: 'Wat doet GROUP BY?', back: 'Groepeert rijen met dezelfde waarde in een kolom zodat je aggregaatfuncties kunt toepassen.' },
  ],
  quiz: [
    { id: 'sq1', question: 'Welk SQL-onderdeel gebruik je om rijen te filteren ná GROUP BY?', options: ['WHERE', 'HAVING', 'ORDER BY', 'LIMIT'], correct: 1, explanation: 'HAVING filtert na groeperen, WHERE filtert voor groeperen.' },
    { id: 'sq2', question: 'Wat doet LIKE \'%berg\'?', options: ['Zoekt waarden die beginnen met "berg"', 'Zoekt waarden die eindigen op "berg"', 'Zoekt exact "berg"', 'Zoekt waarden die "berg" bevatten'], correct: 1, explanation: '% aan het begin matcht nul of meer tekens vóór "berg".' },
    { id: 'sq3', question: 'Welke volgorde is correct in een SQL-query?', options: ['SELECT, WHERE, FROM', 'FROM, SELECT, WHERE', 'SELECT, FROM, WHERE', 'WHERE, FROM, SELECT'], correct: 2, explanation: 'De juiste volgorde is SELECT → FROM → WHERE.' },
    { id: 'sq4', question: 'COUNT(*) telt...', options: ['Alleen niet-NULL waarden', 'Alle rijen inclusief NULL', 'Alleen unieke waarden', 'Alleen numerieke waarden'], correct: 1, explanation: 'COUNT(*) telt alle rijen, ook die met NULL-waarden.' },
  ],
  exercises: [
    { id: 'se1', type: 'code', language: 'sql', prompt: 'Toon alle patiënten geboren vóór 1980.', answer: `SELECT *\nFROM patients\nWHERE birth_date < '1980-01-01';` },
    { id: 'se2', type: 'code', language: 'sql', prompt: 'Toon alle patiënten waarvan de achternaam begint met "Smit".', answer: `SELECT *\nFROM patients\nWHERE last_name LIKE 'Smit%';` },
    { id: 'se3', type: 'code', language: 'sql', prompt: 'Toon artsen met meer dan 10 voltooide afspraken.', answer: `SELECT doctor_id, COUNT(id) AS aantal_afspraken\nFROM appointments\nWHERE status = 'Voltooid'\nGROUP BY doctor_id\nHAVING COUNT(id) > 10;` },
  ],
  checklist: [
    { id: 'c1', label: 'Ik kan SELECT, FROM, WHERE gebruiken.' },
    { id: 'c2', label: 'Ik kan filteren met LIKE, <, >, =, AND.' },
    { id: 'c3', label: 'Ik kan tellen met COUNT().' },
    { id: 'c4', label: 'Ik kan groeperen met GROUP BY.' },
    { id: 'c5', label: 'Ik weet wanneer ik HAVING gebruik.' },
  ],
};
