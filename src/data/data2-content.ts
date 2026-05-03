// Data II content — all theory, flashcards, quizzes, SQL exercises

export interface Flashcard { id: string; front: string; back: string; }
export interface QuizQuestion { id: string; question: string; options: string[]; correct: number; explanation: string; }
export interface SqlExercise { id: string; prompt: string; answer: string; }
export interface TheoryBlock { title: string; content: string; }
export interface ChecklistItem { id: string; label: string; }

export interface SectionContent {
  id: string;
  title: string;
  desc: string;
  theory: TheoryBlock[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  sqlExercises: SqlExercise[];
  checklist: ChecklistItem[];
}

export const data2Sections: SectionContent[] = [
  {
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
    sqlExercises: [
      { id: 'se1', prompt: 'Toon alle patiënten geboren vóór 1980.', answer: `SELECT *\nFROM patients\nWHERE birth_date < '1980-01-01';` },
      { id: 'se2', prompt: 'Toon alle patiënten waarvan de achternaam begint met "Smit".', answer: `SELECT *\nFROM patients\nWHERE last_name LIKE 'Smit%';` },
      { id: 'se3', prompt: 'Toon artsen met meer dan 10 voltooide afspraken.', answer: `SELECT doctor_id, COUNT(id) AS aantal_afspraken\nFROM appointments\nWHERE status = 'Voltooid'\nGROUP BY doctor_id\nHAVING COUNT(id) > 10;` },
    ],
    checklist: [
      { id: 'c1', label: 'Ik kan SELECT, FROM, WHERE gebruiken.' },
      { id: 'c2', label: 'Ik kan filteren met LIKE, <, >, =, AND.' },
      { id: 'c3', label: 'Ik kan tellen met COUNT().' },
      { id: 'c4', label: 'Ik kan groeperen met GROUP BY.' },
      { id: 'c5', label: 'Ik weet wanneer ik HAVING gebruik.' },
    ],
  },
  {
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
    sqlExercises: [
      { id: 'je1', prompt: 'Vind alle patiënten zonder afspraak.', answer: `SELECT p.first_name, p.last_name\nFROM patients AS p\nLEFT JOIN appointments AS a\nON p.id = a.patient_id\nWHERE a.id IS NULL;` },
      { id: 'je2', prompt: 'Toon medicatie met kuurlengte langer dan gemiddeld.', answer: `SELECT medication_name, duration_days\nFROM prescriptions\nWHERE duration_days > (\n    SELECT AVG(duration_days)\n    FROM prescriptions\n);` },
      { id: 'je3', prompt: 'Toon per dossier hoeveel dossiers die patiënt totaal heeft.', answer: `SELECT mr1.patient_id, mr1.created_at,\n    (SELECT COUNT(*)\n     FROM medical_records AS mr2\n     WHERE mr2.patient_id = mr1.patient_id\n    ) AS totaal_dossiers_patient\nFROM medical_records AS mr1;` },
    ],
    checklist: [
      { id: 'cj1', label: 'Ik kan een JOIN schrijven.' },
      { id: 'cj2', label: 'Ik kan een LEFT JOIN schrijven.' },
      { id: 'cj3', label: 'Ik kan rijen zonder match vinden met IS NULL.' },
      { id: 'cj4', label: 'Ik kan een subquery gebruiken.' },
      { id: 'cj5', label: 'Ik kan AVG() gebruiken in een subquery.' },
      { id: 'cj6', label: 'Ik begrijp tabelaliassen zoals p, a, mr.' },
    ],
  },
  {
    id: 'knn',
    title: 'KNN & Classificatie',
    desc: 'k-Nearest Neighbors, overfitting en underfitting',
    theory: [
      { title: 'Wat is KNN?', content: `<p>KNN betekent <strong>k-Nearest Neighbors</strong>. Het model kijkt naar de <code>k</code> dichtstbijzijnde punten en kiest de meest voorkomende klasse.</p>` },
      { title: 'Voorbeeld bij k=3', content: `<table><tr><th>Buur</th><th>Klasse</th></tr><tr><td>1</td><td>ziek</td></tr><tr><td>2</td><td>ziek</td></tr><tr><td>3</td><td>gezond</td></tr></table><p>Meeste stemmen: <strong>ziek</strong>. De voorspelling is dus: ziek.</p>` },
      { title: 'Even vs oneven k', content: `<p>Bij een <strong>oneven k</strong> is er meestal een duidelijke winnaar.</p><p>Bij een <strong>even k</strong> kan er gelijkspel ontstaan.</p><div class="theory__quote">Bij een even k kan er gelijkspel ontstaan bij majority voting. Extra code kan dit oplossen door dichterbij gelegen punten zwaarder te laten meetellen.</div>` },
      { title: 'Overfitting en underfitting', content: `<table><tr><th>Situatie</th><th>Gevolg</th></tr><tr><td>Lage k</td><td>Vaak overfitting — model leert te veel van specifieke details/ruis</td></tr><tr><td>Hoge k</td><td>Vaak underfitting — model wordt te algemeen</td></tr></table>` },
    ],
    flashcards: [
      { id: 'kf1', front: 'Wat doet KNN?', back: 'Kijkt naar de k dichtstbijzijnde punten en kiest de meest voorkomende klasse (majority voting).' },
      { id: 'kf2', front: 'Wat betekent k in KNN?', back: 'Het aantal buren dat wordt bekeken voor de classificatie.' },
      { id: 'kf3', front: 'Waarom is oneven k handig?', back: 'Bij oneven k is er meestal een duidelijke winnaar, geen gelijkspel.' },
      { id: 'kf4', front: 'Wat kan er misgaan bij even k?', back: 'Er kan gelijkspel ontstaan bij majority voting.' },
      { id: 'kf5', front: 'Hoe los je gelijkspel op bij even k?', back: 'Dichtstbijzijnde buur laten winnen, stemmen wegen op afstand, willekeurige keuze, of vaste voorkeursklasse.' },
      { id: 'kf6', front: 'Lage k → ?', back: 'Vaak overfitting: het model leert te veel van specifieke details in de trainingsdata.' },
      { id: 'kf7', front: 'Hoge k → ?', back: 'Vaak underfitting: het model wordt te algemeen en mist patronen.' },
    ],
    quiz: [
      { id: 'kq1', question: 'Bij k=1 is het risico op overfitting...', options: ['Laag', 'Gemiddeld', 'Hoog', 'Niet van toepassing'], correct: 2, explanation: 'Bij k=1 kijkt het model naar slechts één punt, waardoor het ruis en toeval overneemt.' },
      { id: 'kq2', question: 'Hoe voorkom je gelijkspel bij KNN?', options: ['Altijd k=1 gebruiken', 'Een oneven k kiezen', 'Meer features toevoegen', 'De dataset verkleinen'], correct: 1, explanation: 'Bij oneven k is er altijd een meerderheid, dus geen gelijkspel.' },
      { id: 'kq3', question: 'Bij k=3 en buren [ziek, gezond, ziek], wat is de voorspelling?', options: ['Gezond', 'Ziek', 'Onbekend', 'Foutmelding'], correct: 1, explanation: '2x ziek vs 1x gezond. Majority voting → ziek.' },
      { id: 'kq4', question: 'Underfitting bij KNN ontstaat meestal door...', options: ['Te weinig data', 'Te lage k', 'Te hoge k', 'Te veel features'], correct: 2, explanation: 'Hoge k maakt het model te algemeen → underfitting.' },
    ],
    sqlExercises: [],
    checklist: [
      { id: 'ck1', label: 'Ik weet wat KNN doet.' },
      { id: 'ck2', label: 'Ik weet wat k betekent.' },
      { id: 'ck3', label: 'Ik weet waarom oneven k handig is.' },
      { id: 'ck4', label: 'Ik weet wat er mis kan gaan bij even k.' },
      { id: 'ck5', label: 'Ik kan uitleggen hoe je gelijkspel oplost.' },
      { id: 'ck6', label: 'Ik weet dat lage k vaak overfitting geeft.' },
      { id: 'ck7', label: 'Ik weet dat hoge k vaak underfitting geeft.' },
    ],
  },
  {
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
    sqlExercises: [],
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
  },
];
