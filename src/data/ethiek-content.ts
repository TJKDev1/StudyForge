// Ethiek & Recht content

import type { Flashcard, QuizQuestion, TheoryBlock, ChecklistItem } from './data2-content';

export interface EthiekSectionContent {
  id: string;
  title: string;
  desc: string;
  theory: TheoryBlock[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  checklist: ChecklistItem[];
}

export const ethiekSections: EthiekSectionContent[] = [
  {
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
    checklist: [
      { id: 'eb1', label: 'Ik kan drie redenen noemen waarom recht en ethiek belangrijk zijn.' },
      { id: 'eb2', label: 'Ik ken het verschil tussen recht en ethiek.' },
    ],
  },
  {
    id: 'avg-beginselen',
    title: 'De zes AVG-beginselen',
    desc: 'R D D J O V — Rechtmatig, Doel, Data minimaal, Juist, Opslag kort, Veilig',
    theory: [
      { title: 'Ezelsbrug: R D D J O V', content: `<p><strong>R</strong>echtmatigheid, behoorlijkheid en transparantie<br><strong>D</strong>oelbinding<br><strong>D</strong>ataminimalisatie<br><strong>J</strong>uistheid<br><strong>O</strong>pslagbeperking<br><strong>V</strong>ertrouwelijkheid en integriteit</p><div class="theory__quote">Rechtmatig — Doel — Data minimaal — Juist — Opslag kort — Veilig</div>` },
      { title: '1. Rechtmatigheid, behoorlijkheid en transparantie', content: `<p>Persoonsgegevens alleen verwerken met geldige reden, eerlijk, en met duidelijke uitleg aan betrokkenen.</p><p><em>Casusvragen: Weten mensen dat hun gegevens worden gebruikt? Is er een privacyverklaring?</em></p>` },
      { title: '2. Doelbinding', content: `<p>Gegevens alleen verzamelen voor een duidelijk en vooraf bepaald doel. Niet zomaar voor een ander doel gebruiken.</p><p><em>Casusvragen: Waarom zijn de gegevens verzameld? Worden ze voor hetzelfde doel gebruikt?</em></p>` },
      { title: '3. Dataminimalisatie', content: `<p>Alleen gegevens verzamelen die echt nodig zijn. Niet meer dan noodzakelijk.</p><p><em>Casusvragen: Zijn alle gegevens echt nodig? Kan het met minder?</em></p>` },
      { title: '4. Juistheid', content: `<p>Gegevens moeten kloppen en actueel zijn. Foute of verouderde gegevens moeten worden verbeterd of verwijderd.</p><p><em>Casusvragen: Zijn de gegevens actueel? Kunnen mensen fouten laten aanpassen?</em></p>` },
      { title: '5. Opslagbeperking', content: `<p>Gegevens niet langer bewaren dan nodig. Er moet een bewaartermijn zijn.</p><p><em>Casusvragen: Hoe lang worden gegevens bewaard? Worden ze verwijderd als niet meer nodig?</em></p>` },
      { title: '6. Vertrouwelijkheid en integriteit', content: `<p>Gegevens goed beveiligen tegen verlies, misbruik, hacks, onbevoegde toegang.</p><p><em>Casusvragen: Wie heeft toegang? Is er encryptie, logging, toegangsbeheer?</em></p>` },
    ],
    flashcards: [
      { id: 'af1', front: 'Noem de zes AVG-beginselen.', back: '1. Rechtmatigheid, behoorlijkheid en transparantie\n2. Doelbinding\n3. Dataminimalisatie\n4. Juistheid\n5. Opslagbeperking\n6. Vertrouwelijkheid en integriteit' },
      { id: 'af2', front: 'Wat betekent doelbinding?', back: 'Gegevens alleen verzamelen voor een duidelijk en vooraf bepaald doel. Niet zomaar voor een ander doel gebruiken.' },
      { id: 'af3', front: 'Wat betekent dataminimalisatie?', back: 'Alleen gegevens verzamelen die echt nodig zijn voor het doel. Niet meer dan noodzakelijk.' },
      { id: 'af4', front: 'Wat betekent opslagbeperking?', back: 'Gegevens niet langer bewaren dan nodig. Er moet een bewaartermijn zijn.' },
      { id: 'af5', front: 'Wat is de ezelsbrug voor de AVG-beginselen?', back: 'R D D J O V: Rechtmatig, Doel, Data minimaal, Juist, Opslag kort, Veilig.' },
      { id: 'af6', front: 'Wat valt onder vertrouwelijkheid en integriteit?', back: 'Beveiliging: toegangsbeheer, encryptie, logging, bescherming tegen verlies/misbruik/hacks.' },
    ],
    quiz: [
      { id: 'aq1', question: 'Welk AVG-beginsel gaat over het niet langer bewaren dan nodig?', options: ['Dataminimalisatie', 'Doelbinding', 'Opslagbeperking', 'Juistheid'], correct: 2, explanation: 'Opslagbeperking = gegevens niet langer bewaren dan noodzakelijk.' },
      { id: 'aq2', question: 'Doelbinding betekent...', options: ['Gegevens moeten kloppen', 'Gegevens alleen voor het oorspronkelijke doel gebruiken', 'Gegevens goed beveiligen', 'Zo min mogelijk gegevens verzamelen'], correct: 1, explanation: 'Doelbinding: gegevens alleen gebruiken voor het doel waarvoor ze verzameld zijn.' },
      { id: 'aq3', question: 'Welk beginsel wordt geschonden als te veel medewerkers toegang hebben?', options: ['Rechtmatigheid', 'Dataminimalisatie', 'Vertrouwelijkheid en integriteit', 'Opslagbeperking'], correct: 2, explanation: 'Vertrouwelijkheid en integriteit: gegevens moeten beschermd zijn tegen onbevoegde toegang.' },
      { id: 'aq4', question: 'Wat hoort bij het beginsel "juistheid"?', options: ['Gegevens versleutelen', 'Gegevens actueel en correct houden', 'Zo min mogelijk verzamelen', 'Een bewaartermijn instellen'], correct: 1, explanation: 'Juistheid: gegevens moeten kloppen en actueel zijn.' },
    ],
    checklist: [
      { id: 'ea1', label: 'Ik kan de zes AVG-beginselen opnoemen.' },
      { id: 'ea2', label: 'Ik kan elk beginsel uitleggen.' },
      { id: 'ea3', label: 'Ik kan elk beginsel toepassen op een casus.' },
      { id: 'ea4', label: 'Ik ken de ezelsbrug R D D J O V.' },
    ],
  },
  {
    id: 'avg-grondslagen',
    title: 'AVG-grondslagen',
    desc: 'De zes juridische redenen om persoonsgegevens te verwerken',
    theory: [
      { title: 'Wat is een grondslag?', content: `<p>Een grondslag is de <strong>juridische reden</strong> waarom een organisatie persoonsgegevens mag verwerken. Zonder geldige grondslag mag je geen persoonsgegevens verwerken.</p>` },
      { title: 'De zes grondslagen', content: `<table><tr><th>Grondslag</th><th>Wanneer geschikt?</th></tr><tr><td>1. Toestemming</td><td>Persoon kan echt vrij ja/nee zeggen</td></tr><tr><td>2. Overeenkomst</td><td>Nodig om contract uit te voeren</td></tr><tr><td>3. Wettelijke verplichting</td><td>Verplicht volgens de wet</td></tr><tr><td>4. Vitale belangen</td><td>Levensgevaar of noodsituatie</td></tr><tr><td>5. Algemeen belang</td><td>Publieke/overheidstaak</td></tr><tr><td>6. Gerechtvaardigd belang</td><td>Logisch belang, privacy-impact beperkt</td></tr></table>` },
      { title: 'Beslisboom', content: `<ol style="margin:var(--space-2) 0;padding-left:var(--space-5);color:var(--text-secondary)"><li>Concrete wet? → Wettelijke verplichting</li><li>Nodig voor contract? → Overeenkomst</li><li>Overheidstaak? → Algemeen belang</li><li>Levensgevaar? → Vitale belangen</li><li>Vrije keuze? → Toestemming</li><li>Logisch belang, beperkte impact? → Gerechtvaardigd belang</li></ol>` },
      { title: 'Gerechtvaardigd belang (let op!)', content: `<p>Bij gerechtvaardigd belang altijd drie dingen uitleggen:</p><ol style="margin:var(--space-2) 0;padding-left:var(--space-5);color:var(--text-secondary)"><li>Wat is het belang van de organisatie?</li><li>Is de verwerking noodzakelijk?</li><li>Wegen de belangen van betrokkenen niet zwaarder?</li></ol>` },
    ],
    flashcards: [
      { id: 'gf1', front: 'Noem de zes AVG-grondslagen.', back: '1. Toestemming\n2. Overeenkomst\n3. Wettelijke verplichting\n4. Vitale belangen\n5. Algemeen belang / openbaar gezag\n6. Gerechtvaardigd belang' },
      { id: 'gf2', front: 'Wanneer past toestemming NIET goed?', back: 'Als mensen zich verplicht voelen om ja te zeggen, of als de organisatie afhankelijk is van de verwerking.' },
      { id: 'gf3', front: 'Wanneer past vitale belangen?', back: 'Alleen bij noodsituaties / levensgevaar. Past bijna nooit bij gewone data-casussen.' },
      { id: 'gf4', front: 'Wat moet je uitleggen bij gerechtvaardigd belang?', back: '1. Wat is het belang?\n2. Is verwerking noodzakelijk?\n3. Wegen privacybelangen niet zwaarder?' },
      { id: 'gf5', front: 'Wanneer past wettelijke verplichting?', back: 'Als er een concrete wet is die de verwerking verplicht stelt (bijv. belastingadministratie).' },
    ],
    quiz: [
      { id: 'gq1', question: 'Een webshop heeft een adres nodig voor bezorging. Welke grondslag?', options: ['Toestemming', 'Overeenkomst', 'Gerechtvaardigd belang', 'Wettelijke verplichting'], correct: 1, explanation: 'De verwerking is noodzakelijk om het contract (bestelling) uit te voeren.' },
      { id: 'gq2', question: 'Vitale belangen past het best bij...', options: ['Een chatbot', 'Fraudedetectie', 'Een bewusteloze patiënt', 'Belastingadministratie'], correct: 2, explanation: 'Vitale belangen: levensgevaar of medische noodsituatie.' },
      { id: 'gq3', question: 'Hoeveel dingen moet je uitleggen bij gerechtvaardigd belang?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'Drie: het belang, de noodzakelijkheid, en of privacybelangen niet zwaarder wegen.' },
      { id: 'gq4', question: 'Toestemming is minder geschikt als...', options: ['Het om gezondheidsdata gaat', 'Mensen niet vrij kunnen weigeren', 'Er geen contract is', 'De data geanonimiseerd is'], correct: 1, explanation: 'Toestemming vereist een echte vrije keuze. Als mensen zich verplicht voelen, past het niet.' },
    ],
    checklist: [
      { id: 'eg1', label: 'Ik kan de zes grondslagen opnoemen.' },
      { id: 'eg2', label: 'Ik kan bij elke grondslag uitleggen wanneer die past.' },
      { id: 'eg3', label: 'Ik kan uitleggen waarom andere grondslagen NIET passen.' },
      { id: 'eg4', label: 'Ik weet wat ik bij gerechtvaardigd belang moet uitleggen.' },
    ],
  },
  {
    id: 'ai-act',
    title: 'AI Act Risicocategorieën',
    desc: 'Verboden, hoog-risico, laag risico, minimaal risico',
    theory: [
      { title: 'Overzicht', content: `<p>De AI Act deelt AI-systemen in op basis van risico. Hoe groter het risico voor mensen, hoe strenger de regels.</p><table><tr><th>Categorie</th><th>Betekenis</th><th>Voorbeeld</th></tr><tr><td>Verboden AI</td><td>Mag niet</td><td>Social scoring door overheid</td></tr><tr><td>Hoog-risico</td><td>Strenge eisen</td><td>AI die sollicitanten selecteert</td></tr><tr><td>Laag risico</td><td>Transparantie nodig</td><td>Klantenservice-chatbot</td></tr><tr><td>Minimaal risico</td><td>Weinig regels</td><td>Spamfilter</td></tr></table>` },
      { title: 'Verboden AI', content: `<p>AI die fundamentele rechten, vrijheid of veiligheid ernstig aantast.</p><div class="theory__quote">Voorbeeld: een overheidssysteem dat burgers een sociale score geeft op basis van gedrag, inkomen en persoonlijke kenmerken.</div>` },
      { title: 'Hoog-risico AI', content: `<p>AI met grote gevolgen voor iemands leven, kansen of rechten. Mag soms, maar alleen onder strenge voorwaarden.</p><div class="theory__quote">Voorbeeld: een AI-systeem dat sollicitanten automatisch selecteert of afwijst.</div>` },
      { title: 'Laag risico', content: `<p>AI met beperkt risico. Mensen moeten weten dat ze met AI te maken hebben.</p><div class="theory__quote">Voorbeeld: een klantenservice-chatbot op een website.</div>` },
      { title: 'Minimaal risico', content: `<p>AI met weinig of geen risico voor mensenrechten of veiligheid.</p><div class="theory__quote">Voorbeeld: een spamfilter in je e-mail.</div>` },
    ],
    flashcards: [
      { id: 'rf1', front: 'Noem de vier AI Act-risicocategorieën.', back: '1. Verboden AI\n2. Hoog-risico AI\n3. Laag risico / beperkt risico\n4. Minimaal risico' },
      { id: 'rf2', front: 'Voorbeeld van verboden AI?', back: 'Social scoring door de overheid — burgers beoordelen op gedrag/inkomen.' },
      { id: 'rf3', front: 'Voorbeeld van hoog-risico AI?', back: 'AI die sollicitanten automatisch selecteert of afwijst.' },
      { id: 'rf4', front: 'Waarom is een chatbot "laag risico"?', back: 'Neemt meestal geen grote beslissingen over mensen, maar moet wel transparant zijn (mensen moeten weten dat ze met AI praten).' },
      { id: 'rf5', front: 'Hoofdregel AI Act?', back: 'Hoe groter het risico voor mensenrechten, veiligheid of kansen, hoe strenger de regels.' },
    ],
    quiz: [
      { id: 'rq1', question: 'In welke categorie valt een AI die automatisch sollicitanten afwijst?', options: ['Verboden', 'Hoog-risico', 'Laag risico', 'Minimaal risico'], correct: 1, explanation: 'Sollicitatie-AI heeft grote invloed op kansen → hoog-risico.' },
      { id: 'rq2', question: 'Social scoring door de overheid is...', options: ['Hoog-risico', 'Laag risico', 'Verboden', 'Minimaal risico'], correct: 2, explanation: 'Social scoring tast vrijheid en gelijke behandeling aan → verboden AI.' },
      { id: 'rq3', question: 'Een spamfilter valt onder...', options: ['Verboden AI', 'Hoog-risico', 'Laag risico', 'Minimaal risico'], correct: 3, explanation: 'Spamfilters hebben weinig invloed op rechten → minimaal risico.' },
      { id: 'rq4', question: 'Bij laag-risico AI is vooral belangrijk:', options: ['Verbieden', 'Strenge certificering', 'Transparantie', 'Niets'], correct: 2, explanation: 'Bij laag risico moet duidelijk zijn dat de gebruiker met AI te maken heeft.' },
    ],
    checklist: [
      { id: 'er1', label: 'Ik kan de vier AI Act-risicocategorieën noemen.' },
      { id: 'er2', label: 'Ik kan bij elke categorie een voorbeeld geven.' },
      { id: 'er3', label: 'Ik kan uitleggen waarom een voorbeeld in die categorie valt.' },
    ],
  },
];

// Casus-aanpak template (shared across ethiek sections)
export const casusFormule = `Dit betekent dat...\nIn de casus zie je dat...\nDit is wel/niet voldoende, omdat...\nEen verbetering zou zijn dat...`;
