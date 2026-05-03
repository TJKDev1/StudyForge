// Ethiek & Recht — AVG-grondslagen sectie

import type { SectionContent } from '../../core/types';

export const avgGrondslagen: SectionContent = {
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
  exercises: [],
  checklist: [
    { id: 'eg1', label: 'Ik kan de zes grondslagen opnoemen.' },
    { id: 'eg2', label: 'Ik kan bij elke grondslag uitleggen wanneer die past.' },
    { id: 'eg3', label: 'Ik kan uitleggen waarom andere grondslagen NIET passen.' },
    { id: 'eg4', label: 'Ik weet wat ik bij gerechtvaardigd belang moet uitleggen.' },
  ],
};
