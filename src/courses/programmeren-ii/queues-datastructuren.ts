// Programmeren 2 — Queues & Datastructuren sectie

import type { SectionContent } from '../../core/types';

export const queuesDatastructuren: SectionContent = {
  id: 'queues-datastructuren',
  title: 'Queues & Datastructuren',
  desc: 'Queues (FIFO), tuples, dequeue, en het verwerken van wachtrijen',
  theory: [
    { title: 'Wat is een Queue?', content: `<p>Een <strong>queue</strong> (wachtrij) is een datastructuur die werkt volgens het <strong>FIFO-principe</strong>: First In, First Out. Het eerste element dat erin gaat, komt er ook als eerste uit.</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li><code>enqueue(item)</code> — voegt een element toe aan het einde</li><li><code>dequeue()</code> — verwijdert en retourneert het eerste element</li><li><code>is_empty()</code> — controleert of de queue leeg is</li><li><code>items</code> — de interne lijst met elementen</li></ul><div class="theory__quote">Denk aan een rij bij de kassa: wie het eerst in de rij staat, wordt het eerst geholpen.</div>` },
    { title: 'Queue volledig verwerken', content: `<p>Een veelvoorkomend patroon is het verwerken van <strong>alle elementen</strong> in een queue met een while-loop:</p><pre><code><span class="kw">while not</span> queue.is_empty():
    item = queue.dequeue()
    <span class="cmt"># verwerk item</span></code></pre><p>Dit gaat door totdat de queue leeg is. Elk element wordt precies één keer verwerkt.</p>` },
    { title: 'Tuples', content: `<p>Een <strong>tuple</strong> is een onveranderbare (immutable) geordende reeks waarden.</p><pre><code>huis = ("Huis 50", 465523, 107)
<span class="cmt"># tuple unpacking:</span>
naam, prijs, oppervlakte = huis</code></pre><p>Tuples in een queue:</p><pre><code>price_queue.items[:5]
<span class="cmt"># [('Huis 50', 465523, 107), ('Huis 49', 966150, 141), ...]</span></code></pre><div class="theory__quote">Tuples lijken op lijsten maar zijn immutable. Gebruik ze voor vaste groepen gerelateerde waarden.</div>` },
    { title: 'Tuple unpacking in een loop', content: `<p>Je kunt tuples direct <strong>uitpakken</strong> in variabelen:</p><pre><code>house_price_area = price_queue.dequeue()
house, price, area = house_price_area
<span class="cmt"># of in één stap:</span>
house, price, area = price_queue.dequeue()</code></pre>` },
    { title: 'Voorbeeld: koopsignalen genereren', content: `<p>Oefentoets vraag 4 — Een functie die de queue verwerkt en koopsignalen genereert als de prijs per m² lager is dan 3000:</p><pre><code><span class="kw">def</span> generate_buy_signals(price_queue):
    buy_signals = []
    <span class="kw">while not</span> price_queue.is_empty():
        house_price_area = price_queue.dequeue()
        house, price, area = house_price_area
        <span class="kw">if</span> price / area < 3000:
            buy_signals.append((house, price / area))
    <span class="kw">return</span> buy_signals</code></pre><p>Het resultaat is een lijst van tuples: <code>(huis-ID, prijs per m²)</code> voor huizen waar de prijs per m² onder 3000 ligt.</p>` },
    { title: 'Queue vs Stack vs Lijst', content: `<table><tr><th>Structuur</th><th>Principe</th><th>Toevoegen</th><th>Verwijderen</th></tr><tr><td><strong>Queue</strong></td><td>FIFO</td><td>Achteraan (enqueue)</td><td>Vooraan (dequeue)</td></tr><tr><td><strong>Stack</strong></td><td>LIFO</td><td>Bovenop (push)</td><td>Bovenop (pop)</td></tr><tr><td><strong>Lijst</strong></td><td>Indexeren</td><td>Overal</td><td>Overal</td></tr></table>` },
  ],
  flashcards: [
    { id: 'qd1', front: 'Wat is FIFO?', back: 'First In, First Out. Het eerste element dat erin gaat, komt er als eerste uit. Dit is het principe van een queue.' },
    { id: 'qd2', front: 'Wat doet dequeue()?', back: 'Verwijdert en retourneert het eerste element uit de queue.' },
    { id: 'qd3', front: 'Wat doet enqueue(item)?', back: 'Voegt een element toe aan het einde van de queue.' },
    { id: 'qd4', front: 'Hoe verwerk je alle elementen in een queue?', back: 'Met een while-loop: while not queue.is_empty(): item = queue.dequeue()' },
    { id: 'qd5', front: 'Wat is een tuple?', back: 'Een onveranderbare (immutable) geordende reeks waarden, bv. (\"Huis 1\", 300000, 120).' },
    { id: 'qd6', front: 'Wat is tuple unpacking?', back: 'Het toewijzen van individuele waarden uit een tuple aan aparte variabelen: a, b, c = (1, 2, 3).' },
    { id: 'qd7', front: 'Wat is het verschil tussen een queue en een stack?', back: 'Queue = FIFO (First In, First Out). Stack = LIFO (Last In, First Out).' },
    { id: 'qd8', front: 'Hoe controleer je of een queue leeg is?', back: 'Met queue.is_empty() — retourneert True als er geen elementen meer zijn.' },
  ],
  quiz: [
    { id: 'qq1', question: 'Wat is het principe van een queue?', options: ['LIFO', 'FIFO', 'Random access', 'Priority'], correct: 1, explanation: 'Een queue werkt volgens First In, First Out (FIFO).' },
    { id: 'qq2', question: 'Wat retourneert dequeue() als de queue ["A", "B", "C"] bevat?', options: ['"C"', '"B"', '"A"', 'None'], correct: 2, explanation: 'dequeue() verwijdert en retourneert het eerste element: "A".' },
    { id: 'qq3', question: 'Huis 50 kost €465.523 en is 107 m². Is de prijs per m² lager dan €3000?', options: ['Ja, de prijs is €2.345/m²', 'Nee, de prijs is €4.351/m²', 'Ja, de prijs is €1.500/m²', 'Nee, de prijs is €6.000/m²'], correct: 1, explanation: '465523 / 107 ≈ 4351 → hoger dan 3000, dus GEEN koopsignaal.' },
    { id: 'qq4', question: 'Wat is het verschil tussen een tuple en een lijst?', options: ['Tuples zijn sneller', 'Tuples zijn immutable (onveranderbaar)', 'Lijsten zijn onveranderbaar', 'Er is geen verschil'], correct: 1, explanation: 'Tuples zijn immutable: je kunt de waarden niet wijzigen na aanmaken.' },
    { id: 'qq5', question: 'Welke loop gebruik je om een queue volledig te verwerken?', options: ['for i in range(queue)', 'while queue.is_empty():', 'while not queue.is_empty():', 'for item in queue:'], correct: 2, explanation: 'while not queue.is_empty() draait zolang er nog elementen in de queue zitten.' },
    { id: 'qq6', question: 'Wat doet queue.items[:5]?', options: ['Verwijdert 5 elementen', 'Toont de eerste 5 elementen', 'Voegt 5 elementen toe', 'Sorteert de eerste 5'], correct: 1, explanation: '[:5] is een slice die de eerste 5 elementen van de items-lijst retourneert zonder ze te verwijderen.' },
  ],
  exercises: [
    { id: 'qe1', type: 'code', language: 'python', prompt: 'Schrijf een functie generate_buy_signals(price_queue) die tuples (huis, prijs, oppervlakte) uit een queue verwerkt en een lijst retourneert met (huis, prijs_per_m2) voor huizen waar prijs/oppervlakte < 3000.', answer: `def generate_buy_signals(price_queue):\n    buy_signals = []\n    while not price_queue.is_empty():\n        house_price_area = price_queue.dequeue()\n        house, price, area = house_price_area\n        if price / area < 3000:\n            buy_signals.append((house, price / area))\n    return buy_signals` },
    { id: 'qe2', type: 'open', prompt: 'Leg uit wat er gebeurt als je dequeue() aanroept op een lege queue.', answer: 'Afhankelijk van de implementatie: het kan een IndexError/exception geven omdat er geen elementen zijn om te verwijderen. Daarom controleer je altijd eerst met is_empty().' },
    { id: 'qe3', type: 'calculation', prompt: 'Een queue bevat: [("A", 100, 50), ("B", 200, 40), ("C", 150, 60)]. Na dequeue() twee keer, wat zit er nog in de queue?', answer: '[("C", 150, 60)] — de eerste twee elementen ("A" en "B") zijn verwijderd via FIFO.' },
  ],
  checklist: [
    { id: 'cq1', label: 'Ik weet wat FIFO betekent en hoe een queue werkt.' },
    { id: 'cq2', label: 'Ik kan enqueue() en dequeue() gebruiken.' },
    { id: 'cq3', label: 'Ik kan een queue volledig verwerken met een while-loop.' },
    { id: 'cq4', label: 'Ik weet wat tuples zijn en kan tuple unpacking toepassen.' },
    { id: 'cq5', label: 'Ik kan voorwaardelijk elementen filteren uit een queue.' },
    { id: 'cq6', label: 'Ik ken het verschil tussen queue, stack en lijst.' },
  ],
};
