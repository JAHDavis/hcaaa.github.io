let organisers = [];

class Organiser {
  constructor(shortName, fullName, description) {
    this.shortName = shortName;
    this.fullName = fullName;
    this.description = description;
  }
}

function parseOrganiserCsv(csvText) {
  return csvText.split('\n')
    .map(row => row.split(',').map(item => item.trim()))
    .map(columns => new Organiser(...columns));
}

async function loadOrganiserCsvData() {
  const response = await fetch('data/organisers.csv');
  if (!response.ok) {
    console.error('Error fetching organisers CSV file');
    return;
  }
  const csvText = await response.text();
  organisers = parseOrganiserCsv(csvText);
}

function selectOrganiserByShortName(shortName) {
  return organisers.find(organiser => organiser.shortName === shortName);
}
