// Programmeren 2 — Klassen & OOP sectie

import type { SectionContent } from '../../core/types';

export const klassenOop: SectionContent = {
  id: 'klassen-oop',
  title: 'Klassen & OOP',
  desc: 'Python classes, constructors (__init__), attributen en methodes',
  theory: [
    { title: 'Wat is een klasse?', content: `<p>Een <strong>klasse</strong> is een blauwdruk (template) voor het maken van objecten. Een klasse definieert welke <em>attributen</em> (eigenschappen) en <em>methodes</em> (functies) een object heeft.</p><pre><code><span class="kw">class</span> Club:
    <span class="kw">def</span> __init__(self, name, league, country, points=0):
        self.name = name
        self.league = league
        self.country = country
        self.points = points
        self.matches_played = 0</code></pre><p>Het keyword <code>class</code> gevolgd door de naam definieert de klasse. Conventie: klasse-namen beginnen met een hoofdletter (PascalCase).</p>` },
    { title: 'De constructor: __init__', content: `<p>De <code>__init__</code> methode is de <strong>constructor</strong>. Deze wordt automatisch aangeroepen wanneer je een nieuw object maakt.</p><pre><code>liverpool = Club("Liverpool", "Premier League", "England")</code></pre><p>Parameters:</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li><code>self</code> — verwijst naar het object zelf (altijd eerste parameter)</li><li>Overige parameters worden doorgegeven bij het aanmaken</li><li>Parameters met standaardwaarde (bv. <code>points=0</code>) zijn optioneel</li></ul>` },
    { title: 'Attributen', content: `<p><strong>Attributen</strong> zijn variabelen die aan een object zijn gekoppeld via <code>self</code>.</p><pre><code>self.name = name       <span class="cmt"># wordt ingesteld via parameter</span>
self.matches_played = 0 <span class="cmt"># wordt vast ingesteld</span></code></pre><p>Je kunt attributen opvragen met de <strong>dot-notatie</strong>:</p><pre><code>print(liverpool.name)           <span class="cmt"># "Liverpool"</span>
print(liverpool.matches_played) <span class="cmt"># 0</span></code></pre><div class="theory__quote">Let op: attributen die niet als parameter worden meegegeven (zoals <code>matches_played</code>) krijgen een vaste beginwaarde in <code>__init__</code>.</div>` },
    { title: 'Methodes', content: `<p>Een <strong>methode</strong> is een functie die bij een klasse hoort. De eerste parameter is altijd <code>self</code>.</p><pre><code><span class="kw">def</span> add_points(self, goals_for, goals_against):
    <span class="kw">if</span> goals_for > goals_against:
        self.points += 3       <span class="cmt"># winst</span>
    <span class="kw">elif</span> goals_for == goals_against:
        self.points += 1       <span class="cmt"># gelijkspel</span>
    <span class="cmt"># verlies: geen punten</span>
    self.matches_played += 1</code></pre><p>Aanroepen:</p><pre><code>liverpool.add_points(3, 1) <span class="cmt"># winst → +3 punten</span>
liverpool.add_points(2, 2) <span class="cmt"># gelijk → +1 punt</span>
print([liverpool.points, liverpool.matches_played])
<span class="cmt"># Output: [4, 2]</span></code></pre>` },
    { title: 'Standaardwaarden (default parameters)', content: `<p>Je kunt parameters een <strong>standaardwaarde</strong> geven. Als de aanroeper geen waarde meegeeft, wordt de standaard gebruikt.</p><pre><code><span class="kw">def</span> __init__(self, name, league, country, points=0):
    ...</code></pre><p>Hierdoor kun je schrijven:</p><pre><code>Club("Liverpool", "Premier League", "England")     <span class="cmt"># points = 0</span>
Club("Liverpool", "Premier League", "England", 10) <span class="cmt"># points = 10</span></code></pre><div class="theory__quote">Standaardwaarden staan altijd <em>na</em> verplichte parameters.</div>` },
    { title: 'Voorbeeld: volledige uitwerking', content: `<p>Oefentoets vraag 1 & 2 — volledige uitwerking:</p><pre><code><span class="kw">class</span> Club:
    <span class="kw">def</span> __init__(self, name, league, country, points=0):
        self.name = name
        self.league = league
        self.country = country
        self.points = points
        self.matches_played = 0

    <span class="kw">def</span> add_points(self, goals_for, goals_against):
        <span class="kw">if</span> goals_for > goals_against:
            self.points += 3
        <span class="kw">elif</span> goals_for == goals_against:
            self.points += 1
        self.matches_played += 1

liverpool = Club("Liverpool", "Premier League", "England")
print([liverpool.name, liverpool.league, liverpool.country,
       liverpool.points, liverpool.matches_played])
<span class="cmt"># ['Liverpool', 'Premier League', 'England', 0, 0]</span>

liverpool.add_points(3, 1) <span class="cmt"># winst</span>
liverpool.add_points(2, 2) <span class="cmt"># gelijk</span>
print([liverpool.points, liverpool.matches_played])
<span class="cmt"># [4, 2]</span></code></pre>` },
  ],
  flashcards: [
    { id: 'po1', front: 'Wat is de constructor in Python?', back: 'De __init__ methode. Wordt automatisch aangeroepen bij het aanmaken van een object.' },
    { id: 'po2', front: 'Wat is self?', back: 'Een verwijzing naar het huidige object. Altijd de eerste parameter van een methode.' },
    { id: 'po3', front: 'Hoe maak je een attribuut aan?', back: 'Met self.attribuut_naam = waarde in de __init__ methode.' },
    { id: 'po4', front: 'Wat is het verschil tussen een attribuut en een parameter?', back: 'Een parameter wordt meegegeven aan een functie/methode. Een attribuut wordt opgeslagen op het object via self.' },
    { id: 'po5', front: 'Hoe geef je een parameter een standaardwaarde?', back: 'Door = waarde achter de parameter te zetten, bv: def __init__(self, name, points=0)' },
    { id: 'po6', front: 'Hoe roep je een methode aan op een object?', back: 'Met dot-notatie: object.methode(argumenten). Bv: liverpool.add_points(3, 1)' },
    { id: 'po7', front: 'Wat is een klasse?', back: 'Een blauwdruk voor objecten die attributen (eigenschappen) en methodes (functies) definieert.' },
    { id: 'po8', front: 'Waar moeten standaardwaarden staan in een parametrlijst?', back: 'Na alle verplichte parameters. Anders krijg je een SyntaxError.' },
  ],
  quiz: [
    { id: 'pq1', question: 'Welke methode wordt automatisch aangeroepen bij het aanmaken van een object?', options: ['__str__', '__init__', '__new__', 'create'], correct: 1, explanation: '__init__ is de constructor en wordt automatisch aangeroepen bij Club("...").' },
    { id: 'pq2', question: 'Wat is de output van: Club("Ajax", "Eredivisie", "NL").points als points=0 de standaardwaarde is?', options: ['None', '"Eredivisie"', '0', 'Error'], correct: 2, explanation: 'De standaardwaarde van points is 0, dus bij geen meegegeven waarde is het 0.' },
    { id: 'pq3', question: 'Wat doet self.matches_played += 1?', options: ['Maakt een nieuwe variabele aan', 'Verhoogt het attribuut matches_played met 1', 'Print de waarde', 'Geeft een error'], correct: 1, explanation: '+= 1 verhoogt de bestaande waarde van het attribuut met 1.' },
    { id: 'pq4', question: 'Liverpool wint (3-1) en speelt gelijk (2-2). Hoeveel punten?', options: ['3', '4', '5', '6'], correct: 1, explanation: 'Winst = 3 punten, gelijk = 1 punt → 3 + 1 = 4 punten.' },
    { id: 'pq5', question: 'Wat is de juiste manier om een klasse te definiëren?', options: ['def Club:', 'class Club:', 'new Club:', 'create Club:'], correct: 1, explanation: 'In Python gebruik je het keyword "class" gevolgd door de naam en een dubbele punt.' },
    { id: 'pq6', question: 'Welke parameter moet altijd de eerste zijn in een methode?', options: ['name', 'this', 'self', 'cls'], correct: 2, explanation: 'self verwijst naar het huidige object en is altijd de eerste parameter van een instance method.' },
  ],
  exercises: [
    { id: 'pe1', type: 'code', language: 'python', prompt: 'Schrijf een klasse Student met attributen: naam, studentnummer en een lijst van cijfers (standaard leeg). Voeg een methode gemiddelde() toe die het gemiddelde berekent.', answer: `class Student:\n    def __init__(self, naam, studentnummer, cijfers=None):\n        self.naam = naam\n        self.studentnummer = studentnummer\n        self.cijfers = cijfers if cijfers else []\n\n    def gemiddelde(self):\n        if not self.cijfers:\n            return 0\n        return sum(self.cijfers) / len(self.cijfers)` },
    { id: 'pe2', type: 'code', language: 'python', prompt: 'Schrijf de add_points methode voor de Club klasse: 3 punten bij winst, 1 bij gelijk, 0 bij verlies. Verhoog matches_played.', answer: `def add_points(self, goals_for, goals_against):\n    if goals_for > goals_against:\n        self.points += 3\n    elif goals_for == goals_against:\n        self.points += 1\n    self.matches_played += 1` },
    { id: 'pe3', type: 'open', prompt: 'Leg uit wat het verschil is tussen een klasse-attribuut en een instance-attribuut.', answer: 'Een klasse-attribuut wordt gedeeld door alle instanties van de klasse (gedefinieerd buiten __init__). Een instance-attribuut is uniek per object (gedefinieerd met self.x in __init__).' },
  ],
  checklist: [
    { id: 'co1', label: 'Ik kan een klasse definiëren met class.' },
    { id: 'co2', label: 'Ik kan een __init__ constructor schrijven met parameters.' },
    { id: 'co3', label: 'Ik weet wat self betekent en hoe ik attributen maak.' },
    { id: 'co4', label: 'Ik kan methodes schrijven die attributen wijzigen.' },
    { id: 'co5', label: 'Ik weet hoe standaardwaarden werken bij parameters.' },
    { id: 'co6', label: 'Ik kan een object aanmaken en methodes aanroepen.' },
  ],
};
