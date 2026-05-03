// Ethiek & Recht — AVG-beginselen sectie

import type { SectionContent } from '../../core/types';

export const avgBeginselen: SectionContent = {
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
  exercises: [],
  checklist: [
    { id: 'ea1', label: 'Ik kan de zes AVG-beginselen opnoemen.' },
    { id: 'ea2', label: 'Ik kan elk beginsel uitleggen.' },
    { id: 'ea3', label: 'Ik kan elk beginsel toepassen op een casus.' },
    { id: 'ea4', label: 'Ik ken de ezelsbrug R D D J O V.' },
  ],
};
