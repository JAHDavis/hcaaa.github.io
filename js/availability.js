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

const availabilityCsvData = `17,1,Yes`;

const availabilities = parseAvailabilityCsv(availabilityCsvData);

function officialsByEventID(eventID, officials, status) {
  const officialIDs = availabilities
    .filter(avail => avail.eventID == eventID && avail.status === status)
    .map(avail => avail.officialID);

  return officials
    .filter(official => officialIDs.includes(official.officialID))
    .map(official => official.fullName());
}

function officialCountByEventId(eventID) {
  const yesCount = availabilities.filter(avail => avail.eventID == eventID && avail.status === "Yes").length;
  const maybeCount = availabilities.filter(avail => avail.eventID == eventID && avail.status === "Maybe").length;

  return {yesCount, maybeCount};
}
