class Event {
  constructor(eventName, eventCategory, organiser, eventDate, venue, discipline, startTime, finishTime) {
    this.eventName = eventName;
    this.eventCategory = eventCategory;
    this.organiser = organiser;
    this.eventDate = eventDate ? new Date(eventDate.split('/').reverse().join('-')) : null;
    this.venue = venue;
    this.discipline = discipline;
    this.startTime = startTime || null;
    this.finishTime = finishTime || null;
  }

  toString() {
    return `${this.eventName} - ${this.eventDate}`;
  }
}

function parseEventCsv(csvText) {
  return csvText.split('\n')
    .map(row => row.split(',').map(item => item.trim()))
    .map(columns => new Event(...columns));
}

const eventCsvData = ```
HSAA Academies Cup,Indoor Schools Matches,Herts SAA,13/03/2025,Lee Valley (i),iTF,,
HSAA League,Indoor Schools Matches,Herts SAA,24/03/2025,Lee Valley (i),iTF,,
Hertfordshire Schools Pentathlon Championships,County Schools Champs,Herts SAA,24/04/2025,Stevenage,TF,09:00,16:00
Steeplechase Walks & Endurance Festival,County Champs,West Suffolk AC,26/04/2025,Bury St Edmunds,TF,,
Hertfordshire League Round 1,Schools League,Herts SAA,29/04/2025,Stevenage,TF,16:30,18:30
Hertfordshire League Round 1,Schools League,Herts SAA,29/04/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 1,Schools League,Herts SAA,29/04/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 1,Schools League,Herts SAA,30/04/2025,Ware,TF,16:30,18:30
Hertfordshire League Round 1,Schools League,Herts SAA,30/04/2025,Hemel Hempstead,TF,16:30,18:30
St Albans U20 District Championships,Schools District Champs,Herts SAA,30/04/2025,St Albans,TF,,
Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,Stevenage,TF,16:00,18:00
Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,Ware,TF,16:30,18:30
Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,Watford,TF,16:30,18:30
Herts County Championships Day 1,County Champs,Herts CAAA,05/05/2025,Stevenage,TF,,
Hertfordshire League Round 2,Schools League,Herts SAA,06/05/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 2,Schools League,Herts SAA,06/05/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 2,Schools League,Herts SAA,06/05/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 2,Schools League,Herts SAA,07/05/2025,Stevenage,TF,16:30,18:30
Hertfordshire League Round 2,Schools League,Herts SAA,07/05/2025,Ware,TF,16:30,18:30
Hertfordshire League Round 2,Schools League,Herts SAA,07/05/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 2,Schools League,Herts SAA,07/05/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 2,Schools League,Herts SAA,08/05/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 2,Schools League,Herts SAA,08/05/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 2,Schools League,Herts SAA,08/05/2025,Watford,TF,16:30,18:30
ESAA Cup County Round,ESAA Track & Field Cup,English SAA,09/05/2025,Watford,TF,10:00,16:30
Herts County Championships Day 2,County Champs,Herts CAAA,10/05/2025,Bedford,TF,,
Herts County Championships Day 3,County Champs,Herts CAAA,11/05/2025,Bedford,TF,,
Hertfordshire League Round 3,Schools League,Herts SAA,12/05/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 3,Schools League,Herts SAA,12/05/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 3,Schools League,Herts SAA,12/05/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 3,Schools League,Herts SAA,13/05/2025,Ware,TF,16:30,18:30
Hertfordshire League Round 3,Schools League,Herts SAA,13/05/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 3,Schools League,Herts SAA,13/05/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 3,Schools League,Herts SAA,14/05/2025,Stevenage,TF,16:30,18:30
Hertfordshire League Round 3,Schools League,Herts SAA,14/05/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 3,Schools League,Herts SAA,15/05/2025,Stevenage,TF,16:00,18:00
Hertfordshire League Round 3,Schools League,Herts SAA,15/05/2025,Hemel Hempstead,TF,16:30,18:30
ESAA Cup County Round,ESAA Track & Field Cup,English SAA,16/05/2025,Watford,TF,10:00,16:30
Hertfordshire League Round 4,Schools League,Herts SAA,19/05/2025,Stevenage,TF,16:00,18:00
Hertfordshire League Round 4,Schools League,Herts SAA,19/05/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 4,Schools League,Herts SAA,19/05/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 4,Schools League,Herts SAA,19/05/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 4,Schools League,Herts SAA,20/05/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 4,Schools League,Herts SAA,20/05/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 4,Schools League,Herts SAA,21/05/2025,Stevenage,TF,16:30,18:30
Hertfordshire League Round 4,Schools League,Herts SAA,21/05/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 4,Schools League,Herts SAA,21/05/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 4,Schools League,Herts SAA,22/05/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,03/06/2025,Ware,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,03/06/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,03/06/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,04/06/2025,Stevenage,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,04/06/2025,Ware,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,04/06/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,04/06/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,05/06/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,05/06/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 5,Schools League,Herts SAA,05/06/2025,Watford,TF,16:30,18:30
Hertfordshire Schools Championships,County Schools Champs,Herts SAA,07/06/2025,Hemel Hempstead,TF,09:00,17:00
Hertfordshire League Round 6,Schools League,Herts SAA,09/06/2025,Stevenage,TF,16:00,18:00
Hertfordshire League Round 6,Schools League,Herts SAA,09/06/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 6,Schools League,Herts SAA,09/06/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 6,Schools League,Herts SAA,10/06/2025,St Albans,TF,16:30,18:30
Hertfordshire League Round 6,Schools League,Herts SAA,10/06/2025,Hemel Hempstead,TF,16:30,18:30
Hertfordshire League Round 6,Schools League,Herts SAA,10/06/2025,Watford,TF,16:30,18:30
Hertfordshire League Round 6,Schools League,Herts SAA,11/06/2025,Stevenage,TF,16:30,18:30
Hertfordshire League Round 6,Schools League,Herts SAA,11/06/2025,St Albans,TF,16:30,18:30
ESAA Cup Regional B,ESAA Track & Field Cup,English SAA,11/06/2025,Watford,TF,,
Hertfordshire League Round 6,Schools League,Herts SAA,12/06/2025,Watford,TF,16:30,18:30
St Albans District Championships,Schools District Champs,Herts SAA,12/06/2025,Watford,TF,,
ESAA Cup Regional A,ESAA Track & Field Cup,English SAA,16/06/2025,Watford,TF,,
Hertfordshire League Round 6,Schools League,Herts SAA,17/06/2025,Hemel Hempstead,TF,16:30,18:30
Watford District Championships,Schools District Champs,Herts SAA,18/06/2025,Watford,TF,,
County U13 Challenge,County Champs,Herts CAAA,18/06/2025,Stevenage,TF,19:00,21:00
North Herts District Championships,Schools District Champs,Herts SAA,25/06/2025,Stevenage,TF,,
Mid Herts District Championships,Schools District Champs,Herts SAA,27/06/2025,Stevenage,TF,,
Hertford District Championships,Schools District Champs,Herts SAA,27/06/2025,Ware,TF,,
ESAA Regional Combined Events,ESAA Combined Events,English SAA,28/06/2025,TBC,TF,,
ESAA Regional Combined Events,ESAA Combined Events,English SAA,29/06/2025,TBC,TF,,
Eastern Track & Field Championships,Regional Champs,Eastern AA,19/07/2025,Cambridge Uni,TF,,
Eastern Combined Events Championships,Regional Champs,Eastern AA,28/09/2025,Peterborough,TF,,
Hertfordshire League Plate Final,Schools League,Herts SAA,30/06/2025,Hemel Hempstead,TF,14:00,17:15
Hertfordshire League Final,Schools League,Herts SAA,01/07/2025,Hemel Hempstead,TF,14:00,17:15
Dacorum District Champs,Schools District Champs,Herts SAA,02/07/2025,Hemel Hempstead,TF,,
```

const events = parseEventCsv(eventCsvData)
