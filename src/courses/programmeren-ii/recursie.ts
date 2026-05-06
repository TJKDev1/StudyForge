// Programmeren 2 — Recursie sectie

import type { SectionContent } from '../../core/types';

export const recursie: SectionContent = {
  id: 'recursie',
  title: 'Recursie',
  desc: 'Recursieve functies, base case, recursive case, en iteratief vs recursief',
  theory: [
    { title: 'Wat is recursie?', content: `<p><strong>Recursie</strong> is wanneer een functie <em>zichzelf aanroept</em> om een probleem op te lossen. Elke recursieve functie heeft twee essentiële onderdelen:</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li><strong>Base case</strong> — het stopcriterium (wanneer stoppen we?)</li><li><strong>Recursive case</strong> — de stap waarbij de functie zichzelf aanroept met een kleiner probleem</li></ul><div class="theory__quote">Zonder base case roept de functie zichzelf eindeloos aan → RecursionError!</div>` },
    { title: 'Iteratief vs Recursief', content: `<p>Vergelijk dezelfde functie — een string omdraaien:</p><p><strong>Iteratief</strong> (met een loop):</p><pre><code><span class="kw">def</span> reverse_string(s):
    result = ""
    index = len(s) - 1
    <span class="kw">while</span> index >= 0:
        result += s[index]
        index -= 1
    <span class="kw">return</span> result

reverse_string('letters') <span class="cmt"># 'srettel'</span></code></pre><p><strong>Recursief</strong>:</p><pre><code><span class="kw">def</span> rev_recursief(s):
    <span class="kw">if</span> len(s) <= 1:        <span class="cmt"># base case</span>
        <span class="kw">return</span> s[-1]
    <span class="kw">return</span> s[-1] + rev_recursief(s[:-1]) <span class="cmt"># recursive case</span>

rev_recursief('letters') <span class="cmt"># 'srettel'</span></code></pre>` },
    { title: 'Base case', content: `<p>De <strong>base case</strong> is de voorwaarde waaronder de functie stopt met zichzelf aanroepen. Zonder base case krijg je oneindige recursie.</p><pre><code><span class="kw">if</span> len(s) <= 1:    <span class="cmt"># als de string 0 of 1 karakter heeft</span>
    <span class="kw">return</span> s[-1]   <span class="cmt"># retourneer dat karakter (of lege string)</span></code></pre><div class="theory__quote">De base case behandelt het kleinst mogelijke probleem dat direct oplosbaar is.</div>` },
    { title: 'Recursive case', content: `<p>De <strong>recursive case</strong> splitst het probleem in een kleiner deelprobleem:</p><pre><code><span class="kw">return</span> s[-1] + rev_recursief(s[:-1])</code></pre><p>Stap voor stap met <code>'letters'</code>:</p><table><tr><th>Aanroep</th><th>s[-1]</th><th>s[:-1]</th><th>Resultaat</th></tr><tr><td>rev_recursief('letters')</td><td>'s'</td><td>'letter'</td><td>'s' + rev('letter')</td></tr><tr><td>rev_recursief('letter')</td><td>'r'</td><td>'lette'</td><td>'r' + rev('lette')</td></tr><tr><td>rev_recursief('lette')</td><td>'e'</td><td>'lett'</td><td>'e' + rev('lett')</td></tr><tr><td>rev_recursief('lett')</td><td>'t'</td><td>'let'</td><td>'t' + rev('let')</td></tr><tr><td>rev_recursief('let')</td><td>'t'</td><td>'le'</td><td>'t' + rev('le')</td></tr><tr><td>rev_recursief('le')</td><td>'e'</td><td>'l'</td><td>'e' + rev('l')</td></tr><tr><td>rev_recursief('l')</td><td colspan="2">base case</td><td>'l'</td></tr></table><p>Resultaat van onder naar boven: <code>'l' → 'el' → 'tel' → 'ttel' → 'ettel' → 'rettel' → 'srettel'</code></p>` },
    { title: 'String slicing', content: `<p>Bij recursie met strings gebruik je vaak <strong>slicing</strong>:</p><table><tr><th>Expressie</th><th>Betekenis</th><th>Voorbeeld ('hello')</th></tr><tr><td><code>s[-1]</code></td><td>Laatste karakter</td><td>'o'</td></tr><tr><td><code>s[:-1]</code></td><td>Alles behalve laatste</td><td>'hell'</td></tr><tr><td><code>s[0]</code></td><td>Eerste karakter</td><td>'h'</td></tr><tr><td><code>s[1:]</code></td><td>Alles behalve eerste</td><td>'ello'</td></tr></table>` },
    { title: 'Andere recursieve voorbeelden', content: `<p><strong>Faculteit:</strong></p><pre><code><span class="kw">def</span> faculteit(n):
    <span class="kw">if</span> n <= 1:            <span class="cmt"># base case</span>
        <span class="kw">return</span> 1
    <span class="kw">return</span> n * faculteit(n - 1)  <span class="cmt"># recursive case</span>

faculteit(5) <span class="cmt"># 5 × 4 × 3 × 2 × 1 = 120</span></code></pre><p><strong>Fibonacci:</strong></p><pre><code><span class="kw">def</span> fibonacci(n):
    <span class="kw">if</span> n <= 1:            <span class="cmt"># base case</span>
        <span class="kw">return</span> n
    <span class="kw">return</span> fibonacci(n-1) + fibonacci(n-2) <span class="cmt"># recursive case</span></code></pre>` },
  ],
  flashcards: [
    { id: 'rc1', front: 'Wat is een base case?', back: 'Het stopcriterium van een recursieve functie — het kleinste probleem dat direct oplosbaar is zonder verdere recursie.' },
    { id: 'rc2', front: 'Wat is een recursive case?', back: 'De stap waarbij de functie zichzelf aanroept met een kleiner deelprobleem.' },
    { id: 'rc3', front: 'Wat gebeurt er zonder base case?', back: 'De functie roept zichzelf eindeloos aan → Python geeft een RecursionError.' },
    { id: 'rc4', front: 'Wat doet s[-1] bij een string?', back: 'Geeft het laatste karakter van de string. Bv. "hello"[-1] → "o".' },
    { id: 'rc5', front: 'Wat doet s[:-1] bij een string?', back: 'Geeft alles behalve het laatste karakter. Bv. "hello"[:-1] → "hell".' },
    { id: 'rc6', front: 'Hoe draai je "abc" om met recursie?', back: 'return s[-1] + rev(s[:-1]) → "c" + rev("ab") → "c" + "b" + rev("a") → "cba".' },
    { id: 'rc7', front: 'Wat is het verschil tussen iteratief en recursief?', back: 'Iteratief gebruikt een loop (for/while). Recursief laat de functie zichzelf aanroepen.' },
    { id: 'rc8', front: 'Wat is de base case bij het recursief omdraaien van een string?', back: 'Als len(s) <= 1: return s[-1] — een string van 0 of 1 karakter is al "omgedraaid".' },
  ],
  quiz: [
    { id: 'rq1', question: 'Wat zijn de twee essentiële onderdelen van een recursieve functie?', options: ['Input en output', 'Base case en recursive case', 'For-loop en while-loop', 'Return en print'], correct: 1, explanation: 'Elke recursieve functie heeft een base case (stopcriterium) en een recursive case (zelfaanroep).' },
    { id: 'rq2', question: 'Wat is de output van rev_recursief("abc")?', options: ['"abc"', '"bca"', '"cba"', '"cab"'], correct: 2, explanation: 's[-1]="c" + rev("ab") → "c" + "b" + rev("a") → "c" + "b" + "a" = "cba".' },
    { id: 'rq3', question: 'Wat gebeurt er bij rev_recursief("a")?', options: ['Error', '"a"', '""', 'Oneindige recursie'], correct: 1, explanation: 'len("a") <= 1 is True → base case → return "a"[-1] = "a".' },
    { id: 'rq4', question: 'Hoeveel keer roept rev_recursief("hoi") zichzelf aan?', options: ['1 keer', '2 keer', '3 keer', '4 keer'], correct: 1, explanation: 'rev("hoi") → rev("ho") → rev("h") = base case. Dus 2 recursieve aanroepen.' },
    { id: 'rq5', question: 'Wat is het resultaat van faculteit(4)?', options: ['4', '10', '24', '16'], correct: 2, explanation: '4 × 3 × 2 × 1 = 24.' },
    { id: 'rq6', question: 'Welke fout krijg je bij oneindige recursie in Python?', options: ['TypeError', 'ValueError', 'RecursionError', 'OverflowError'], correct: 2, explanation: 'Python heeft een maximale recursie-diepte. Bij overschrijding volgt een RecursionError.' },
  ],
  exercises: [
    { id: 're1', type: 'code', language: 'python', prompt: 'Schrijf een recursieve functie die een string omdraait. De iteratieve versie is gegeven:\n\ndef reverse_string(s):\n    result = ""\n    index = len(s) - 1\n    while index >= 0:\n        result += s[index]\n        index -= 1\n    return result', answer: `def rev_recursief(s):\n    if len(s) <= 1:\n        return s[-1]\n    return s[-1] + rev_recursief(s[:-1])` },
    { id: 're2', type: 'code', language: 'python', prompt: 'Schrijf een recursieve functie som(n) die de som van 1 t/m n berekent.', answer: `def som(n):\n    if n <= 1:\n        return 1\n    return n + som(n - 1)` },
    { id: 're3', type: 'open', prompt: 'Doorloop stap voor stap de aanroepen van rev_recursief("hoi") en geef per stap aan wat er geretourneerd wordt.', answer: 'rev("hoi"): s[-1]="i", roept rev("ho") aan\nrev("ho"): s[-1]="o", roept rev("h") aan\nrev("h"): len <= 1, base case, return "h"\nTerug: rev("ho") = "o" + "h" = "oh"\nTerug: rev("hoi") = "i" + "oh" = "ioh"' },
  ],
  checklist: [
    { id: 'cr1', label: 'Ik weet wat recursie is en hoe het verschilt van iteratie.' },
    { id: 'cr2', label: 'Ik kan de base case en recursive case identificeren.' },
    { id: 'cr3', label: 'Ik kan een iteratieve functie omschrijven naar recursief.' },
    { id: 'cr4', label: 'Ik kan stap voor stap door een recursieve aanroep lopen.' },
    { id: 'cr5', label: 'Ik weet wat er gebeurt zonder base case (RecursionError).' },
    { id: 'cr6', label: 'Ik kan string slicing (s[-1], s[:-1]) gebruiken bij recursie.' },
  ],
};
