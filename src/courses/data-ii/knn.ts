// Data II — KNN & Classificatie sectie

import type { SectionContent } from '../../core/types';

export const knn: SectionContent = {
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
  exercises: [],
  checklist: [
    { id: 'ck1', label: 'Ik weet wat KNN doet.' },
    { id: 'ck2', label: 'Ik weet wat k betekent.' },
    { id: 'ck3', label: 'Ik weet waarom oneven k handig is.' },
    { id: 'ck4', label: 'Ik weet wat er mis kan gaan bij even k.' },
    { id: 'ck5', label: 'Ik kan uitleggen hoe je gelijkspel oplost.' },
    { id: 'ck6', label: 'Ik weet dat lage k vaak overfitting geeft.' },
    { id: 'ck7', label: 'Ik weet dat hoge k vaak underfitting geeft.' },
  ],
};
