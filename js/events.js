class Event {
  constructor(eventID, eventName, eventCategory, organiser, eventDate, venue, discipline, startTime, finishTime) {
    this.eventID = eventID;
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

  prettyDate() {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return this.eventDate.toLocaleDateString('en-GB', options);
  }

  prettyTimings() {
    if (this.startTime && this.finishTime) {
      return `${this.startTime}-${this.finishTime}`;
    } else if (this.startTime) {
      return `${this.startTime} onwards`;
    } else if (this.finishTime) {
      return `Until ${this.finishTime}`;
    } else {
      return '';
    }
  }
}

function parseEventCsv(csvText) {
  return csvText.split('\n')
    .map(row => row.split(',').map(item => item.trim()))
    .map(columns => new Event(...columns));
}

const eventCsvData = `1,HSAA Academies Cup,Indoor Schools Matches,Herts SAA,13/03/2025,Lee Valley (i),iTF,,
2,University of Leicester Open Meeting,Open Meeting,Uni of Leicester,22/03/2025,Saffron Lane,TF,,
3,HSAA League,Indoor Schools Matches,Herts SAA,24/03/2025,Lee Valley (i),iTF,,
4,Hertfordshire Schools Pentathlon Championships,County Schools Champs,Herts SAA,24/04/2025,Stevenage,TF,09:00,16:00
5,Steeplechase Walks & Endurance Festival,County Champs,West Suffolk AC,26/04/2025,Bury St Edmunds,TF,,
6,Hertfordshire League Round 1,Schools League,Herts SAA,29/04/2025,Stevenage,TF,16:30,18:30
7,Hertfordshire League Round 1,Schools League,Herts SAA,29/04/2025,Hemel Hempstead,TF,16:30,18:30
8,Hertfordshire League Round 1,Schools League,Herts SAA,29/04/2025,Watford,TF,16:30,18:30
9,Hertfordshire League Round 1,Schools League,Herts SAA,30/04/2025,Ware,TF,16:30,18:30
10,Hertfordshire League Round 1,Schools League,Herts SAA,30/04/2025,Hemel Hempstead,TF,16:30,18:30
11,St Albans U20 District Championships,Schools District Champs,Herts SAA,30/04/2025,St Albans,TF,,
12,Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,Stevenage,TF,16:00,18:00
13,Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,Ware,TF,16:30,18:30
14,Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,St Albans,TF,16:30,18:30
15,Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,Hemel Hempstead,TF,16:30,18:30
16,Hertfordshire League Round 1,Schools League,Herts SAA,01/05/2025,Watford,TF,16:30,18:30
17,Herts County Championships Day 1,County Champs,Herts CAAA,05/05/2025,Stevenage,TF,,
18,Hertfordshire League Round 2,Schools League,Herts SAA,06/05/2025,St Albans,TF,16:30,18:30
19,Hertfordshire League Round 2,Schools League,Herts SAA,06/05/2025,Hemel Hempstead,TF,16:30,18:30
20,Hertfordshire League Round 2,Schools League,Herts SAA,06/05/2025,Watford,TF,16:30,18:30
21,Hertfordshire League Round 2,Schools League,Herts SAA,07/05/2025,Stevenage,TF,16:30,18:30
22,Hertfordshire League Round 2,Schools League,Herts SAA,07/05/2025,Ware,TF,16:30,18:30
23,Hertfordshire League Round 2,Schools League,Herts SAA,07/05/2025,St Albans,TF,16:30,18:30
24,Hertfordshire League Round 2,Schools League,Herts SAA,07/05/2025,Hemel Hempstead,TF,16:30,18:30
25,Hertfordshire League Round 2,Schools League,Herts SAA,08/05/2025,St Albans,TF,16:30,18:30
26,Hertfordshire League Round 2,Schools League,Herts SAA,08/05/2025,Hemel Hempstead,TF,16:30,18:30
27,Hertfordshire League Round 2,Schools League,Herts SAA,08/05/2025,Watford,TF,16:30,18:30
28,ESAA Cup County Round,ESAA Track & Field Cup,English SAA,09/05/2025,Watford,TF,10:00,16:30
29,Herts County Championships Day 2,County Champs,Herts CAAA,10/05/2025,Bedford,TF,,
30,Herts County Championships Day 3,County Champs,Herts CAAA,11/05/2025,Bedford,TF,,
31,Hertfordshire League Round 3,Schools League,Herts SAA,12/05/2025,St Albans,TF,16:30,18:30
32,Hertfordshire League Round 3,Schools League,Herts SAA,12/05/2025,Hemel Hempstead,TF,16:30,18:30
33,Hertfordshire League Round 3,Schools League,Herts SAA,12/05/2025,Watford,TF,16:30,18:30
34,Hertfordshire League Round 3,Schools League,Herts SAA,13/05/2025,Ware,TF,16:30,18:30
35,Hertfordshire League Round 3,Schools League,Herts SAA,13/05/2025,Hemel Hempstead,TF,16:30,18:30
36,Hertfordshire League Round 3,Schools League,Herts SAA,13/05/2025,Watford,TF,16:30,18:30
37,Hertfordshire League Round 3,Schools League,Herts SAA,14/05/2025,Stevenage,TF,16:30,18:30
38,Hertfordshire League Round 3,Schools League,Herts SAA,14/05/2025,St Albans,TF,16:30,18:30
39,Hertfordshire League Round 3,Schools League,Herts SAA,15/05/2025,Stevenage,TF,16:00,18:00
40,Hertfordshire League Round 3,Schools League,Herts SAA,15/05/2025,Hemel Hempstead,TF,16:30,18:30
41,ESAA Cup County Round,ESAA Track & Field Cup,English SAA,16/05/2025,Watford,TF,10:00,16:30
42,Hertfordshire League Round 4,Schools League,Herts SAA,19/05/2025,Stevenage,TF,16:00,18:00
43,Hertfordshire League Round 4,Schools League,Herts SAA,19/05/2025,St Albans,TF,16:30,18:30
44,Hertfordshire League Round 4,Schools League,Herts SAA,19/05/2025,Hemel Hempstead,TF,16:30,18:30
45,Hertfordshire League Round 4,Schools League,Herts SAA,19/05/2025,Watford,TF,16:30,18:30
46,Hertfordshire League Round 4,Schools League,Herts SAA,20/05/2025,St Albans,TF,16:30,18:30
47,Hertfordshire League Round 4,Schools League,Herts SAA,20/05/2025,Watford,TF,16:30,18:30
48,Hertfordshire League Round 4,Schools League,Herts SAA,21/05/2025,Stevenage,TF,16:30,18:30
49,Hertfordshire League Round 4,Schools League,Herts SAA,21/05/2025,St Albans,TF,16:30,18:30
50,Hertfordshire League Round 4,Schools League,Herts SAA,21/05/2025,Hemel Hempstead,TF,16:30,18:30
51,Hertfordshire League Round 4,Schools League,Herts SAA,22/05/2025,Watford,TF,16:30,18:30
52,Hertfordshire League Round 5,Schools League,Herts SAA,03/06/2025,Ware,TF,16:30,18:30
53,Hertfordshire League Round 5,Schools League,Herts SAA,03/06/2025,St Albans,TF,16:30,18:30
54,Hertfordshire League Round 5,Schools League,Herts SAA,03/06/2025,Watford,TF,16:30,18:30
55,Hertfordshire League Round 5,Schools League,Herts SAA,04/06/2025,Stevenage,TF,16:30,18:30
56,Hertfordshire League Round 5,Schools League,Herts SAA,04/06/2025,Ware,TF,16:30,18:30
57,Hertfordshire League Round 5,Schools League,Herts SAA,04/06/2025,St Albans,TF,16:30,18:30
58,Hertfordshire League Round 5,Schools League,Herts SAA,04/06/2025,Hemel Hempstead,TF,16:30,18:30
59,Hertfordshire League Round 5,Schools League,Herts SAA,05/06/2025,St Albans,TF,16:30,18:30
60,Hertfordshire League Round 5,Schools League,Herts SAA,05/06/2025,Hemel Hempstead,TF,16:30,18:30
61,Hertfordshire League Round 5,Schools League,Herts SAA,05/06/2025,Watford,TF,16:30,18:30
62,East Area Prep Athletics Championships,Regional Schools Champs,Unknown,06/06/2025,Bedford,TF,11:00,18:15
63,Hertfordshire Schools Championships,County Schools Champs,Herts SAA,07/06/2025,Hemel Hempstead,TF,09:00,17:00
64,Hertfordshire League Round 6,Schools League,Herts SAA,09/06/2025,Stevenage,TF,16:00,18:00
65,Hertfordshire League Round 6,Schools League,Herts SAA,09/06/2025,St Albans,TF,16:30,18:30
66,Hertfordshire League Round 6,Schools League,Herts SAA,09/06/2025,Watford,TF,16:30,18:30
67,Hertfordshire League Round 6,Schools League,Herts SAA,10/06/2025,St Albans,TF,16:30,18:30
68,Hertfordshire League Round 6,Schools League,Herts SAA,10/06/2025,Hemel Hempstead,TF,16:30,18:30
69,Hertfordshire League Round 6,Schools League,Herts SAA,10/06/2025,Watford,TF,16:30,18:30
70,Hertfordshire League Round 6,Schools League,Herts SAA,11/06/2025,Stevenage,TF,16:30,18:30
71,Hertfordshire League Round 6,Schools League,Herts SAA,11/06/2025,St Albans,TF,16:30,18:30
72,ESAA Cup Regional B,ESAA Track & Field Cup,English SAA,11/06/2025,Watford,TF,,
73,Hertfordshire League Round 6,Schools League,Herts SAA,12/06/2025,Watford,TF,16:30,18:30
74,St Albans District Championships,Schools District Champs,Herts SAA,12/06/2025,Watford,TF,,
75,ESAA Cup Regional A,ESAA Track & Field Cup,English SAA,16/06/2025,Watford,TF,,
76,Hertfordshire League Round 6,Schools League,Herts SAA,17/06/2025,Hemel Hempstead,TF,16:30,18:30
77,Watford District Championships,Schools District Champs,Herts SAA,18/06/2025,Watford,TF,,
78,County U13 Challenge,County Champs,Herts CAAA,18/06/2025,Stevenage,TF,19:00,21:00
79,North Herts District Championships,Schools District Champs,Herts SAA,25/06/2025,Stevenage,TF,,
80,Mid Herts District Championships,Schools District Champs,Herts SAA,27/06/2025,Stevenage,TF,,
81,Hertford District Championships,Schools District Champs,Herts SAA,27/06/2025,Ware,TF,,
82,ESAA Regional Combined Events,ESAA Combined Events,English SAA,28/06/2025,TBC,TF,,
83,ESAA Regional Combined Events,ESAA Combined Events,English SAA,29/06/2025,TBC,TF,,
84,Eastern Track & Field Championships,Regional Champs,Eastern AA,19/07/2025,Cambridge Uni,TF,,
85,Eastern Combined Events Championships,Regional Champs,Eastern AA,28/09/2025,Peterborough,TF,,
86,Hertfordshire League Plate Final,Schools League,Herts SAA,30/06/2025,Hemel Hempstead,TF,14:00,17:15
87,Hertfordshire League Final,Schools League,Herts SAA,01/07/2025,Hemel Hempstead,TF,14:00,17:15
88,Dacorum District Champs,Schools District Champs,Herts SAA,02/07/2025,Hemel Hempstead,TF,,`

const events = parseEventCsv(eventCsvData)

function selectEventById(eventID) {
  return events.find(event => event.eventID === eventID);
}
