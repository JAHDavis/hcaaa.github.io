let availabilities = [];

class Availability {
  constructor(eventID, officialID, status) {
    if (isNaN(eventID) || isNaN(officialID)) {
      throw new Error("eventID and officialID must be numbers");
    }
    this.eventID = Number(eventID);
    this.officialID = Number(officialID);
    this.status = status
  }
}

function parseAvailabilityCsv(csvText) {
  return csvText.split('\n')
    .map(row => row.split(',').map(item => item.trim()))
    .map(columns => new Availability(...columns));
}

async function loadAvailabilityCsvData() {
  const response = await fetch('data/availability.csv');
  if (!response.ok) {
    console.error('Error fetching availability CSV file');
    return;
  }
  const csvText = await response.text();
  availabilities = parseAvailabilityCsv(csvText);
}

function officialsByEventID(eventID, officials, status) {
  const officialIDs = availabilities
    .filter(avail => avail.eventID == eventID && avail.status === status)
    .map(avail => avail.officialID);

  return officials.filter(official => officialIDs.includes(official.officialID));
}

function officialCountByEventId(eventID) {
  const yesCount = availabilities.filter(avail => avail.eventID == eventID && avail.status === "Yes").length;
  const maybeCount = availabilities.filter(avail => avail.eventID == eventID && avail.status === "Maybe").length;

  return {yesCount, maybeCount};
}

function availabilityForOfficialID(officialID) {
  return availabilities.filter(availability => availability.officialID === officialID);
}

function availabilityForOfficialAndEventID(officialID, eventID) {
  return availabilities.find(availability => availability.officialID === officialID && availability.eventID === eventID);
}
