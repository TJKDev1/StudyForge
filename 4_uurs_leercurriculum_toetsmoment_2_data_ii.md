# 4-uurs leercurriculum — Toetsmoment 2 Data II

Dit leercurriculum helpt je om in **4 uur** alle belangrijke onderwerpen voor de toets te leren.

## Overzicht van de toetsstof

De toets gaat vooral over:

1. SQL-basisqueries
2. SQL-joins en subqueries
3. KNN-classificatie
4. Overfitting en underfitting
5. Normaliseren en standaardiseren
6. Correlatie en regressie
7. Regressievergelijkingen invullen

---

# Uur 1 — SQL basis: queries op één tabel

## Doel

Je kunt simpele SQL-queries schrijven met filtering, groeperen en tellen.

## Basisstructuur

```sql
SELECT kolommen
FROM tabel
WHERE voorwaarde;
```

## Belangrijke onderdelen

| Onderdeel | Betekenis |
|---|---|
| `SELECT` | Welke kolommen je wilt zien |
| `FROM` | Uit welke tabel |
| `WHERE` | Welke rijen je wilt filteren |
| `LIKE 'Smit%'` | Begint met “Smit” |
| `<`, `>`, `=` | Vergelijken |
| `AND` | Meerdere voorwaarden combineren |
| `COUNT()` | Aantal tellen |
| `GROUP BY` | Groeperen |
| `HAVING` | Filteren ná groeperen |

## Voorbeeldquery

```sql
SELECT doctor_id, COUNT(id) AS aantal_afspraken
FROM appointments
WHERE status = 'Voltooid'
GROUP BY doctor_id
HAVING COUNT(id) > 10;
```

## Belangrijk verschil

- `WHERE` gebruik je vóór groeperen.
- `HAVING` gebruik je ná `GROUP BY`.

## Oefenen

Schrijf queries voor:

1. Toon alle patiënten geboren vóór 1980.
2. Toon alle patiënten waarvan de achternaam begint met `Smit`.
3. Toon artsen met meer dan 10 voltooide afspraken.

---

# Uur 2 — SQL joins en subqueries

## Doel

Je kunt meerdere tabellen koppelen en informatie uit relaties halen.

## Wat is een JOIN?

Een `JOIN` koppelt gegevens uit meerdere tabellen.

Voorbeeld:

```sql
SELECT p.first_name, p.last_name, a.status
FROM patients AS p
JOIN appointments AS a
ON p.id = a.patient_id;
```

## Betekenis

| Deel | Betekenis |
|---|---|
| `patients AS p` | De tabel `patients` krijgt korte naam `p` |
| `appointments AS a` | De tabel `appointments` krijgt korte naam `a` |
| `ON p.id = a.patient_id` | Hier worden de tabellen gekoppeld |

## JOIN-soorten

| Type | Gebruik |
|---|---|
| `JOIN` / `INNER JOIN` | Alleen rijen met een match |
| `LEFT JOIN` | Alles uit de linkertabel, ook zonder match |
| `LEFT JOIN ... WHERE a.id IS NULL` | Zoeken wie géén match heeft |

## Voorbeeld: patiënten zonder afspraak

```sql
SELECT p.first_name, p.last_name
FROM patients AS p
LEFT JOIN appointments AS a
ON p.id = a.patient_id
WHERE a.id IS NULL;
```

## Subquery

Een subquery is een query in een query.

```sql
SELECT medication_name, duration_days
FROM prescriptions
WHERE duration_days > (
    SELECT AVG(duration_days)
    FROM prescriptions
);
```

Dit betekent:

> Toon voorschriften die langer duren dan het gemiddelde.

## Correlated subquery

Hier gebruikt de subquery informatie uit de buitenste query.

```sql
SELECT 
    mr1.patient_id,
    mr1.created_at,
    (
        SELECT COUNT(*)
        FROM medical_records AS mr2
        WHERE mr2.patient_id = mr1.patient_id
    ) AS totaal_dossiers_patient
FROM medical_records AS mr1;
```

## Oefenen

Schrijf queries voor:

1. Tel medical records per afdeling.
2. Vind patiënten zonder afspraak.
3. Toon medicatie met kuurlengte langer dan gemiddeld.
4. Toon per dossier hoeveel dossiers die patiënt totaal heeft.

---

# Uur 3 — KNN, classificatie, overfitting en underfitting

## Doel

Je kunt uitlegvragen over KNN beantwoorden.

## Wat is KNN?

KNN betekent **k-Nearest Neighbors**.

Het model kijkt naar de `k` dichtstbijzijnde punten en kiest de meest voorkomende klasse.

## Voorbeeld bij `k = 3`

| Buur | Klasse |
|---|---|
| 1 | ziek |
| 2 | ziek |
| 3 | gezond |

Meeste stemmen: **ziek**.

De voorspelling is dus: **ziek**.

## Oneven en even k

Bij een **oneven k** is er meestal een duidelijke winnaar.

Bij een **even k** kan er gelijkspel ontstaan.

Voorbeeld bij `k = 4`:

| Klasse | Aantal stemmen |
|---|---|
| ziek | 2 |
| gezond | 2 |

Dan weet het model niet wat het moet kiezen.

## Oplossing bij even k

Extra code kan bijvoorbeeld:

- de dichtstbijzijnde buur laten winnen;
- stemmen wegen op afstand;
- een willekeurige keuze maken;
- een vaste voorkeursklasse gebruiken.

## Goed toetsantwoord

> Bij een even k kan er gelijkspel ontstaan bij majority voting. Extra code kan dit oplossen door dichterbij gelegen punten zwaarder te laten meetellen.

## Overfitting en underfitting

| Situatie | Gevolg |
|---|---|
| Lage k | Vaak overfitting |
| Hoge k | Vaak underfitting |

## Lage k

Bij lage `k`, bijvoorbeeld `k = 1`, kijkt het model heel precies naar één punt.

Daardoor neemt het model ruis en toevallige patronen over.

Goed toetsantwoord:

> Lage k geeft vaak overfitting, omdat het model te veel leert van specifieke details in de trainingsdata.

## Hoge k

Bij hoge `k` kijkt het model naar veel buren.

Daardoor worden patronen gladgestreken.

Goed toetsantwoord:

> Hoge k kan underfitting geven, omdat het model te algemeen wordt.

---

# Uur 4 — Normaliseren, standaardiseren, correlatie en regressie

## Doel

Je kunt de theorievragen en rekensommen beantwoorden.

---

## Deel A — Normaliseren en standaardiseren

# Normaliseren

Normaliseren heet ook **min-max scaling**.

Formule:

```text
(x - x_min) / (x_max - x_min)
```

Het resultaat ligt meestal tussen **0 en 1**.

## Voorbeeld normaliseren

Als:

```text
x = 50
x_min = 0
x_max = 100
```

Dan:

```text
(50 - 0) / (100 - 0) = 0.5
```

---

# Standaardiseren

Formule:

```text
(x - gemiddelde) / standaarddeviatie
```

Je berekent hoeveel standaarddeviaties een waarde van het gemiddelde afligt.

## Voorbeeld standaardiseren

Als:

```text
x = 80
gemiddelde = 70
standaarddeviatie = 5
```

Dan:

```text
(80 - 70) / 5 = 2
```

De waarde ligt dus **2 standaarddeviaties boven het gemiddelde**.

## Welke methode heeft voorkeur?

Meestal heeft **standaardiseren** de voorkeur.

Reden:

> Standaardiseren is minder gevoelig voor outliers dan normaliseren.

## Eenheid na standaardiseren

De eenheid is:

> standaarddeviaties

---

## Deel B — Correlatiecoëfficiënt en regressiecoëfficiënt

# Correlatiecoëfficiënt

De correlatiecoëfficiënt geeft aan hoe sterk twee variabelen samenhangen.

Mogelijkheden:

- Positief verband: als `x` stijgt, stijgt `y`.
- Negatief verband: als `x` stijgt, daalt `y`.
- Geen verband: er is geen duidelijk patroon.

# Regressiecoëfficiënt

Een regressiecoëfficiënt geeft aan hoeveel `y` verandert als `x` met 1 toeneemt.

Voorbeeld:

```text
y = 4 + 2x
```

De regressiecoëfficiënt is `2`.

Dat betekent:

> Als x met 1 stijgt, stijgt y met 2.

## Wanneer zijn correlatiecoëfficiënt en regressiecoëfficiënt gelijk?

Bij:

1. enkelvoudige lineaire regressie;
2. `x` is gestandaardiseerd;
3. `y` is gestandaardiseerd.

Kort toetsantwoord:

> Ze zijn gelijk wanneer zowel X als y zijn gestandaardiseerd bij enkelvoudige lineaire regressie.

---

# Meervoudige regressie en stabiliteit

Bij meervoudige regressie gebruik je meerdere features.

Voorbeeld:

```text
y = 4 + 2x1 - 1.5x2 + 0.5x3
```

Regressiecoëfficiënten kunnen minder stabiel zijn door **multicollineariteit**.

## Multicollineariteit

Multicollineariteit betekent:

> Features lijken sterk op elkaar of hangen sterk met elkaar samen.

Gevolg:

> Het model weet minder goed welke feature welk effect veroorzaakt. Daardoor kunnen regressiecoëfficiënten sterk veranderen als er nieuwe data bijkomt.

---

## Deel C — Regressiesom oefenen

Je moet een regressievergelijking kunnen invullen.

Voorbeeld:

```text
Y = 4 + 2 * 3 - 1.5 * 2 + 0.5 * 5
```

Stap voor stap:

```text
Y = 4 + 6 - 3 + 2.5
Y = 9.5
```

Antwoord:

```text
Y = 9.5
```

---

# Laatste 15 minuten — Herhaalchecklist

## SQL

Je bent klaar voor SQL als je dit kunt:

- Ik kan `SELECT`, `FROM`, `WHERE` gebruiken.
- Ik kan filteren met `LIKE`, `<`, `>`, `=`, `AND`.
- Ik kan tellen met `COUNT()`.
- Ik kan groeperen met `GROUP BY`.
- Ik weet wanneer ik `HAVING` gebruik.
- Ik kan een `JOIN` schrijven.
- Ik kan een `LEFT JOIN` schrijven.
- Ik kan rijen zonder match vinden met `IS NULL`.
- Ik kan een subquery gebruiken.
- Ik kan `AVG()` gebruiken in een subquery.
- Ik begrijp tabelaliassen zoals `p`, `a`, `mr`.

## KNN

Je bent klaar voor KNN als je dit kunt:

- Ik weet wat KNN doet.
- Ik weet wat `k` betekent.
- Ik weet waarom oneven `k` handig is.
- Ik weet wat er mis kan gaan bij even `k`.
- Ik kan uitleggen hoe je gelijkspel oplost.
- Ik weet dat lage `k` vaak overfitting geeft.
- Ik weet dat hoge `k` vaak underfitting geeft.

## Normaliseren en standaardiseren

Je bent klaar voor dit onderdeel als je dit kunt:

- Ik ken de formule van normaliseren.
- Ik ken de formule van standaardiseren.
- Ik weet dat standaardiseren meestal voorkeur heeft.
- Ik weet dat de eenheid na standaardiseren standaarddeviaties is.

## Regressie

Je bent klaar voor regressie als je dit kunt:

- Ik weet wat correlatie betekent.
- Ik weet wat een regressiecoëfficiënt betekent.
- Ik weet wanneer correlatie- en regressiecoëfficiënt gelijk zijn.
- Ik weet wat multicollineariteit is.
- Ik kan een regressievergelijking invullen.

---

# Beste volgorde om te leren

Gebruik deze volgorde:

| Tijd | Onderdeel |
|---|---|
| 60 minuten | SQL basis |
| 60 minuten | JOINs en subqueries |
| 45 minuten | KNN theorie |
| 60 minuten | Normaliseren, standaardiseren en regressie |
| 15 minuten | Alles herhalen met checklist |

---

# Belangrijkste focus

Focus vooral op **SQL**, want daar zitten veel punten en je moet zelf queries kunnen schrijven.

De belangrijkste SQL-onderwerpen zijn:

1. `SELECT`, `FROM`, `WHERE`
2. `LIKE`
3. `COUNT`
4. `GROUP BY`
5. `HAVING`
6. `JOIN`
7. `LEFT JOIN`
8. `IS NULL`
9. Subqueries
10. `AVG`
11. Correlated subqueries
