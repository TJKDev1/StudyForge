// Wiskunde 2 — Meetniveaus & Data-analyse sectie

import type { SectionContent } from '../../core/types';

export const meetniveaus: SectionContent = {
  id: 'meetniveaus',
  title: 'Meetniveaus & Data-analyse',
  desc: 'Nominaal, ordinaal, interval, ratio en passende beschrijvende statistieken',
  theory: [
    { title: 'De vier meetniveaus', content: `<p>Elk datapunt heeft een <strong>meetniveau</strong> dat bepaalt welke bewerkingen en statistieken je mag toepassen:</p><table><tr><th>Meetniveau</th><th>Betekenis</th><th>Voorbeelden</th></tr><tr><td><strong>Nominaal</strong></td><td>Categorieën zonder volgorde</td><td>Product (Brood, Kaas), kleur, geslacht</td></tr><tr><td><strong>Ordinaal</strong></td><td>Categorieën mét volgorde, maar ongelijke afstanden</td><td>Nutri-Score (A-E), opleidingsniveau, tevredenheid</td></tr><tr><td><strong>Interval</strong></td><td>Gelijke afstanden, geen absoluut nulpunt</td><td>Temperatuur (°C), jaartal</td></tr><tr><td><strong>Ratio</strong></td><td>Gelijke afstanden mét absoluut nulpunt</td><td>Gewicht, lengte, vet (g), eiwitten (g), suikers (g)</td></tr></table>` },
    { title: 'Nutri-Score dataset voorbeeld', content: `<table><tr><th>Kolom</th><th>Meetniveau</th><th>Waarom?</th></tr><tr><td>Product</td><td>Nominaal</td><td>Categorieën zonder volgorde</td></tr><tr><td>Nutri-Score (A-E)</td><td>Ordinaal</td><td>Er is een volgorde (A > B > C), maar afstanden zijn niet gelijk</td></tr><tr><td>Verzadigd vet (g), Onverzadigd vet (g), Eiwitten (g), Koolhydraten (g), Suikers (g), Vezels (g)</td><td>Ratio</td><td>Numeriek met absoluut nulpunt (0 gram = geen)</td></tr></table><div class="theory__quote">Er is in deze dataset geen interval-niveau kolom. Interval vereist gelijke afstanden zonder absoluut nulpunt (bijv. temperatuur in °C).</div>` },
    { title: 'Beschrijvende statistieken per meetniveau', content: `<table><tr><th>Meetniveau</th><th>Geschikte statistieken</th></tr><tr><td>Nominaal</td><td>Modus, frequentietabel</td></tr><tr><td>Ordinaal</td><td>Modus, mediaan, percentiel</td></tr><tr><td>Interval</td><td>Modus, mediaan, gemiddelde, SD, variantie</td></tr><tr><td>Ratio</td><td>Alles: modus, mediaan, gemiddelde, SD, variantie, CV</td></tr></table><p>Voor de kolom <strong>Eiwitten</strong> (ratio-niveau) bereken je:</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li><strong>Gemiddelde</strong>: (8+25+5+1+0+6)/6 = 45/6 = 7.5 g</li><li><strong>Standaarddeviatie</strong>: wortel van de gemiddelde kwadratische afwijking</li><li><strong>Mediaan</strong>: gesorteerd {0, 1, 5, 6, 8, 25} → (5+6)/2 = 5.5 g</li><li><strong>Range</strong>: 25 − 0 = 25 g</li></ul>` },
    { title: 'Verdelingen herkennen', content: `<p>Een verdeling beschrijft hoe data verspreid is. Belangrijke vormen:</p><table><tr><th>Vorm</th><th>Kenmerk</th><th>Relatie centrummaten</th></tr><tr><td><strong>Symmetrisch</strong></td><td>Links = rechts</td><td>Gemiddelde ≈ mediaan ≈ modus</td></tr><tr><td><strong>Rechts scheef</strong> (positief)</td><td>Staart naar rechts</td><td>Modus < mediaan < gemiddelde</td></tr><tr><td><strong>Links scheef</strong> (negatief)</td><td>Staart naar links</td><td>Gemiddelde < mediaan < modus</td></tr></table><div class="theory__quote">Bij een <strong>rechts scheve</strong> verdeling trekt de staart het gemiddelde omhoog. Tip: de staart wijst naar de kant die de naam geeft.</div>` },
    { title: 'Voorbeeld: suikerkolom', content: `<p>De verdeling van suikers in een producten-dataset is typisch <strong>rechts scheef</strong>: veel producten hebben weinig suiker, maar een paar hebben heel veel (chocolade, frisdrank).</p><p>Bij een rechts scheve verdeling:</p><ul style="margin:var(--space-2) 0 var(--space-3) var(--space-5);color:var(--text-secondary)"><li><strong>Modus</strong>: laagste piek (meest voorkomende waarde, links)</li><li><strong>Mediaan</strong>: iets rechts van de modus</li><li><strong>Gemiddelde</strong>: verder naar rechts getrokken door uitschieters</li></ul>` },
  ],
  flashcards: [
    { id: 'wmn1', front: 'Vier meetniveaus van laag naar hoog?', back: 'Nominaal → Ordinaal → Interval → Ratio (NOIR).' },
    { id: 'wmn2', front: 'Verschil interval en ratio?', back: 'Ratio heeft een absoluut nulpunt (0 = niets). Interval niet (0°C ≠ geen temperatuur).' },
    { id: 'wmn3', front: 'Nutri-Score (A t/m E) is welk meetniveau?', back: 'Ordinaal. Er is een volgorde, maar de afstanden tussen A, B, C zijn niet per se gelijk.' },
    { id: 'wmn4', front: 'Welke statistieken zijn geschikt bij nominaal niveau?', back: 'Alleen modus en frequentietabel. Gemiddelde/mediaan hebben geen zin bij namen/categorieën.' },
    { id: 'wmn5', front: 'Bij welke scheefheid is gemiddelde > mediaan?', back: 'Rechts scheef (positief scheef). De staart naar rechts trekt het gemiddelde omhoog.' },
    { id: 'wmn6', front: 'Wat kenmerkt een rechts scheve verdeling?', back: 'De staart wijst naar rechts. Veel waarden links (laag), enkele uitschieters rechts (hoog). Modus < mediaan < gemiddelde.' },
    { id: 'wmn7', front: 'Eiwitten (in gram) is welk meetniveau?', back: 'Ratio. Het is numeriek en 0 gram betekent daadwerkelijk geen eiwit.' },
    { id: 'wmn8', front: 'Bij een symmetrische verdeling geldt...', back: 'Gemiddelde ≈ mediaan ≈ modus.' },
  ],
  quiz: [
    { id: 'wmq1', question: '"Productnaam" (Brood, Kaas, Chocolade) is welk meetniveau?', options: ['Nominaal', 'Ordinaal', 'Interval', 'Ratio'], correct: 0, explanation: 'Productnamen zijn categorieën zonder volgorde → nominaal.' },
    { id: 'wmq2', question: '"Nutri-Score (A-E)" is welk meetniveau?', options: ['Nominaal', 'Ordinaal', 'Interval', 'Ratio'], correct: 1, explanation: 'Er is een volgorde (A is beter dan E), maar afstanden niet gelijk → ordinaal.' },
    { id: 'wmq3', question: '"Suikers (g)" is welk meetniveau?', options: ['Nominaal', 'Ordinaal', 'Interval', 'Ratio'], correct: 3, explanation: 'Suikers in gram is numeriek met absoluut nulpunt → ratio.' },
    { id: 'wmq4', question: 'Bij een rechts scheve verdeling geldt...', options: ['Gemiddelde < mediaan', 'Gemiddelde = mediaan', 'Gemiddelde > mediaan', 'Mediaan = modus'], correct: 2, explanation: 'De staart naar rechts trekt het gemiddelde omhoog: modus < mediaan < gemiddelde.' },
    { id: 'wmq5', question: 'Welke statistiek mag je NIET berekenen bij ordinale data?', options: ['Modus', 'Mediaan', 'Gemiddelde', 'Frequentie'], correct: 2, explanation: 'Het gemiddelde vereist gelijke afstanden (interval/ratio). Bij ordinaal is dat niet gegarandeerd.' },
    { id: 'wmq6', question: 'De kolom Eiwitten (g) voor {8, 25, 5, 1, 0, 6}. Wat is de mediaan?', options: ['5', '5.5', '6', '7.5'], correct: 1, explanation: 'Gesorteerd: {0,1,5,6,8,25}. Mediaan = (5+6)/2 = 5.5.' },
  ],
  exercises: [
    { id: 'wme1', type: 'open', prompt: 'Geef alle vier meetniveaus en geef voor elke kolom in de Nutri-Score dataset aan welk meetniveau het is. Kolommen: Product, Verzadigd vet (g), Onverzadigd vet (g), Eiwitten (g), Koolhydraten (g), Suikers (g), Vezels (g), Nutri-Score (A-E).', answer: 'Nominaal: Product. Ordinaal: Nutri-Score. Interval: (geen in deze dataset). Ratio: Verzadigd vet, Onverzadigd vet, Eiwitten, Koolhydraten, Suikers, Vezels.' },
    { id: 'wme2', type: 'calculation', prompt: 'Bereken de meest geschikte beschrijvende statistieken voor de kolom "Eiwitten" met waarden {8, 25, 5, 1, 0, 6}.', answer: 'Ratio-niveau → gemiddelde, mediaan, SD, range. Gemiddelde = 45/6 = 7.5. Mediaan = (5+6)/2 = 5.5. Range = 25−0 = 25. De verdeling is rechts scheef (uitschieter 25), dus mediaan is een betere centrummaat.' },
    { id: 'wme3', type: 'open', prompt: 'De verdeling van de kolom "Suiker" is rechts scheef. Geef een schatting van gemiddelde, modus en mediaan en leg uit.', answer: 'Modus: laagste waarde bij de piek (veel producten met weinig suiker). Mediaan: iets hoger dan de modus. Gemiddelde: het hoogst, naar rechts getrokken door uitschieters (chocolade, frisdrank). Bij rechts scheef geldt: modus < mediaan < gemiddelde.' },
  ],
  checklist: [
    { id: 'cwm1', label: 'Ik ken de vier meetniveaus (NOIR).' },
    { id: 'cwm2', label: 'Ik kan voor elke kolom het juiste meetniveau bepalen.' },
    { id: 'cwm3', label: 'Ik weet welke statistieken bij welk meetniveau passen.' },
    { id: 'cwm4', label: 'Ik kan verdelingen herkennen (symmetrisch, rechts/links scheef).' },
    { id: 'cwm5', label: 'Ik weet hoe scheefheid de relatie gemiddelde-mediaan-modus beïnvloedt.' },
    { id: 'cwm6', label: 'Ik kan onderbouwen waarom ik een bepaalde beschrijvende statistiek kies.' },
  ],
};
