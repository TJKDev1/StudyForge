// Ethiek & Recht — AI Act Risicocategorieën sectie

import type { SectionContent } from '../../core/types';

export const aiAct: SectionContent = {
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
  exercises: [],
  checklist: [
    { id: 'er1', label: 'Ik kan de vier AI Act-risicocategorieën noemen.' },
    { id: 'er2', label: 'Ik kan bij elke categorie een voorbeeld geven.' },
    { id: 'er3', label: 'Ik kan uitleggen waarom een voorbeeld in die categorie valt.' },
  ],
};
