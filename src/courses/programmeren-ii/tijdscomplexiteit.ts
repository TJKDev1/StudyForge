// Programmeren 2 — Tijdscomplexiteit (Big-O) sectie

import type { SectionContent } from '../../core/types';

export const tijdscomplexiteit: SectionContent = {
  id: 'tijdscomplexiteit',
  title: 'Tijdscomplexiteit (Big-O)',
  desc: 'Big-O notatie, complexiteit per regel analyseren, totale functiecomplexiteit',
  theory: [
    { title: 'Wat is tijdscomplexiteit?', content: `<p><strong>Tijdscomplexiteit</strong> beschrijft hoe de uitvoeringstijd van een algoritme groeit naarmate de invoer groter wordt. We gebruiken de <strong>Big-O notatie</strong>.</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li><code>O(1)</code> — constant: onafhankelijk van invoergrootte</li><li><code>O(n)</code> — lineair: groeit evenredig met de invoer</li><li><code>O(n²)</code> — kwadratisch: groeit met het kwadraat</li><li><code>O(log n)</code> — logaritmisch: halveert elke stap</li></ul>` },
    { title: 'O(1) — Constante tijd', content: `<p>Operaties die <strong>altijd even lang duren</strong>, ongeacht de grootte van de invoer.</p><pre><code><span class="cmt"># Voorbeelden van O(1):</span>
x = 5                           <span class="cmt"># toekenning</span>
<span class="kw">if</span> len(a) != len(b):            <span class="cmt"># vergelijking</span>
    <span class="kw">raise</span> ValueError("...")
<span class="kw">return</span> result ** 0.5             <span class="cmt"># machtsverheffen</span></code></pre><div class="theory__quote">len() op een lijst is O(1) in Python — de lengte wordt intern bijgehouden.</div>` },
    { title: 'O(n) — Lineaire tijd', content: `<p>Operaties die <strong>elk element één keer</strong> doorlopen.</p><pre><code><span class="cmt"># Voorbeelden van O(n):</span>
squared = [(p - a) ** 2 <span class="kw">for</span> p, a <span class="kw">in</span> zip(predictions, actuals)]
mean = sum(squared_errors) / len(squared_errors)</code></pre><p><code>zip()</code> combineert twee lijsten en de list comprehension itereert over alle elementen. <code>sum()</code> telt alle elementen op — beide zijn <strong>O(n)</strong>.</p>` },
    { title: 'Voorbeeld: RMSE functie analyseren', content: `<p>Oefentoets vraag 3 — analyseer per regel:</p><pre><code><span class="kw">def</span> calculate_rmse(predictions, actuals):
    <span class="kw">if</span> len(predictions) != len(actuals): <span class="cmt"># a → O(1)</span>
        <span class="kw">raise</span> ValueError("...")

    squared_errors = [(p - a) ** 2
        <span class="kw">for</span> p, a <span class="kw">in</span> zip(predictions, actuals)] <span class="cmt"># b → O(n)</span>

    mean_squared_error = sum(squared_errors)
        / len(squared_errors)               <span class="cmt"># c → O(n)</span>

    <span class="kw">return</span> mean_squared_error ** 0.5      <span class="cmt"># d → O(1)</span></code></pre><div class="theory__quote">De hele functie is <strong>O(n)</strong> omdat O(n) de langzaamste (dominante) stap is.</div>` },
    { title: 'Dominante term', content: `<p>Bij het bepalen van de totale complexiteit telt alleen de <strong>dominante (langzaamste) term</strong>.</p><table><tr><th>Stappen</th><th>Totaal</th></tr><tr><td>O(1) + O(n) + O(n) + O(1)</td><td><strong>O(n)</strong></td></tr><tr><td>O(n) + O(n²)</td><td><strong>O(n²)</strong></td></tr><tr><td>O(1) + O(1) + O(1)</td><td><strong>O(1)</strong></td></tr><tr><td>O(n) + O(n log n)</td><td><strong>O(n log n)</strong></td></tr></table>` },
    { title: 'Veelvoorkomende operaties', content: `<table><tr><th>Operatie</th><th>Complexiteit</th></tr><tr><td>Variabele toewijzing / return</td><td>O(1)</td></tr><tr><td>len() op lijst/dict</td><td>O(1)</td></tr><tr><td>Indexeren: lijst[i]</td><td>O(1)</td></tr><tr><td>sum(), min(), max()</td><td>O(n)</td></tr><tr><td>for-loop / list comprehension</td><td>O(n)</td></tr><tr><td>zip() iteratie</td><td>O(n)</td></tr><tr><td>Geneste for-loops</td><td>O(n²)</td></tr><tr><td>sorted()</td><td>O(n log n)</td></tr><tr><td>in (op lijst)</td><td>O(n)</td></tr><tr><td>in (op set/dict)</td><td>O(1)</td></tr></table>` },
  ],
  flashcards: [
    { id: 'tc1', front: 'Wat is O(1)?', back: 'Constante tijd: de operatie duurt altijd even lang, ongeacht de invoergrootte.' },
    { id: 'tc2', front: 'Wat is O(n)?', back: 'Lineaire tijd: de tijd groeit evenredig met de invoergrootte n.' },
    { id: 'tc3', front: 'Wat is de complexiteit van sum() op een lijst?', back: 'O(n) — alle elementen moeten opgeteld worden.' },
    { id: 'tc4', front: 'Wat is de complexiteit van len() in Python?', back: 'O(1) — Python houdt de lengte intern bij.' },
    { id: 'tc5', front: 'Hoe bepaal je de totale complexiteit van een functie?', back: 'De dominante (langzaamste) term bepaalt de totale complexiteit. Bv. O(1) + O(n) + O(1) = O(n).' },
    { id: 'tc6', front: 'Wat is de complexiteit van een list comprehension over n elementen?', back: 'O(n) — elk element wordt één keer verwerkt.' },
    { id: 'tc7', front: 'Wat is de complexiteit van x ** 0.5 (vierkantswortel)?', back: 'O(1) — een enkele rekenkundige operatie, constant.' },
    { id: 'tc8', front: 'Wat is de complexiteit van zip() + iteratie?', back: 'O(n) — zip combineert elementen en de iteratie doorloopt ze lineair.' },
    { id: 'tc9', front: 'Wat is de complexiteit van geneste for-loops?', back: 'O(n²) — voor elk element in de buitenste loop wordt de binnenste loop volledig doorlopen.' },
  ],
  quiz: [
    { id: 'tq1', question: 'Wat is de complexiteit van: if len(a) != len(b): raise ValueError(...)', options: ['O(n)', 'O(n²)', 'O(1)', 'O(log n)'], correct: 2, explanation: 'len() is O(1) en de vergelijking is O(1), dus de hele regel is O(1).' },
    { id: 'tq2', question: 'Wat is de complexiteit van: [(p-a)**2 for p,a in zip(preds, acts)]', options: ['O(1)', 'O(n)', 'O(n²)', 'O(n log n)'], correct: 1, explanation: 'zip() combineert twee lijsten en de list comprehension itereert over alle n elementen → O(n).' },
    { id: 'tq3', question: 'Een functie heeft stappen O(1), O(n), O(n), O(1). Wat is de totale complexiteit?', options: ['O(4)', 'O(1)', 'O(n)', 'O(n²)'], correct: 2, explanation: 'De dominante term is O(n). Constante stappen vallen weg.' },
    { id: 'tq4', question: 'Wat is de complexiteit van: return x ** 0.5', options: ['O(n)', 'O(1)', 'O(log n)', 'O(√n)'], correct: 1, explanation: 'Machtsverheffen is een enkele rekenkundige operatie → O(1).' },
    { id: 'tq5', question: 'Waarom is sum(lijst) O(n)?', options: ['Omdat het de lijst sorteert', 'Omdat het elk element moet optellen', 'Omdat het de lijst kopieert', 'Omdat het de lengte berekent'], correct: 1, explanation: 'sum() moet elk element één keer bezoeken om de som te berekenen.' },
    { id: 'tq6', question: 'Wat is de complexiteit van sorted(lijst)?', options: ['O(n)', 'O(1)', 'O(n log n)', 'O(n²)'], correct: 2, explanation: 'Python gebruikt Timsort, wat O(n log n) is in het gemiddelde en slechtste geval.' },
  ],
  exercises: [
    { id: 'te1', type: 'open', prompt: 'Gegeven de RMSE-functie: geef per regel (#a t/m #d) de Big-O complexiteit en leg uit waarom.', answer: '#a: O(1) — len() is O(1), vergelijking is O(1)\n#b: O(n) — zip() en list comprehension itereren over alle n elementen\n#c: O(n) — sum() telt alle n elementen op\n#d: O(1) — machtsverheffen is één berekening\nTotaal: O(n) — de langzaamste stap bepaalt de totale complexiteit.' },
    { id: 'te2', type: 'open', prompt: 'Wat is de tijdscomplexiteit van deze code?\n\nfor i in range(n):\n    for j in range(n):\n        print(i, j)', answer: 'O(n²) — voor elke waarde van i (n keer) wordt de binnenste loop n keer doorlopen. Totaal: n × n = n².' },
    { id: 'te3', type: 'open', prompt: 'Leg uit waarom "in" op een set O(1) is maar op een lijst O(n).', answer: 'Een set gebruikt een hash-tabel: de hash van het element wijst direct naar de opslaglocatie → O(1). Een lijst moet lineair doorlopen worden tot het element gevonden is → O(n) in het slechtste geval.' },
  ],
  checklist: [
    { id: 'ct1', label: 'Ik ken de betekenis van O(1), O(n), O(n²) en O(n log n).' },
    { id: 'ct2', label: 'Ik kan per regel de complexiteit bepalen.' },
    { id: 'ct3', label: 'Ik weet dat de dominante term de totale complexiteit bepaalt.' },
    { id: 'ct4', label: 'Ik ken de complexiteit van veelvoorkomende Python-operaties.' },
    { id: 'ct5', label: 'Ik kan uitleggen waarom zip + list comprehension O(n) is.' },
    { id: 'ct6', label: 'Ik weet dat len() O(1) is in Python.' },
  ],
};
