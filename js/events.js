let events = [];

class Event {
  constructor(eventID, eventName, eventCategory, organiser, eventDate, venue, discipline, startTime, finishTime) {
    if (isNaN(eventID)) {
      throw new Error("eventID must be a number");
    }
    this.eventID = Number(eventID);
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

  officials(officials, status) {
    return officialsByEventID(this.eventID, officials, status);
  }
}

function parseEventCsv(csvText) {
  return csvText.split('\n')
    .map(row => row.split(',').map(item => item.trim()))
    .map(columns => new Event(...columns));
}

async function loadEventCsvData() {
  const response = await fetch('data/events.csv');
  if (!response.ok) {
    console.error('Error fetching events CSV file');
    return;
  }
  const csvText = await response.text();
  if (!csvText.trim()) {
    console.warn('CSV file is empty');
    events = [];
    return;
  }
  events = parseEventCsv(csvText);
}

function selectEventById(eventID) {
  return events.find(event => event.eventID === eventID);
}

function selectEventsByOrganiser(shortName) {
  return events.filter(event => event.organiser === shortName);
}
