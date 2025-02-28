let officials = [];

class Official {
  constructor(officialID, firstName, lastName) {
    if (isNaN(officialID)) {
      throw new Error("officialID must be a number");
    }
    this.officialID = Number(officialID);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

function parseOfficialCsv(csvText) {
  return csvText.split('\n')
    .map(row => row.split(',').map(item => item.trim()))
    .map(columns => new Official(...columns));
}

async function loadOfficialCsvData() {
  const response = await fetch('data/officials.csv');
  if (!response.ok) {
    console.error('Error fetching officials CSV file');
    return;
  }
  const csvText = await response.text();
  officials = parseOfficialCsv(csvText);
}

function selectOfficialById(officialID) {
  return officials.find(official => official.officialID === officialID);
}

function eventsForOfficial(officialID) {
  const availableEvents = availabilityForOfficialID(officialID)
  return availableEvents.map(availability => selectEventById(availability.eventID));
}
