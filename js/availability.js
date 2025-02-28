class Availability {
  constructor(eventID, officialID, status) {
    this.eventID = eventID;
    this.officialID = officialID;
    this.status = status
  }
}

function parseAvailabilityCsv(csvText) {
  return csvText.split('\n')
    .map(row => row.split(',').map(item => item.trim()))
    .map(columns => new Availability(...columns));
}

const availabilityCsvData = `17,1,Yes`;

const availabilities = parseAvailabilityCsv(availabilityCsvData);

function availableOfficialsByEventID(eventID, officials) {
  const availableOfficialIDs = availabilities
    .filter(avail => avail.eventID == eventID && avail.status === "Yes")
    .map(avail => avail.officialID);

  return officials
    .filter(official => availableOfficialIDs.includes(official.officialID))
    .map(official => official.fullName());
}

