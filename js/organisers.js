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
    .map(columns => new Event(...columns));
}

const organiserCsvData = `Herts SAA,Hertfordshire Schools Athletics Association,The HSAA is responsible for organising county schools championships within Hertfordshire, and also puts on a schools league.
Herts CAAA,Hertfordshire County Amateur Athletic Association,The HCAAA is the county body for athletics within Hertfordshire, organising championships across various disciplines`;

const organisers = parseOrganiserCsv(organiserCsvData);

function selectOrganiserByShortName(shortName) {
  return organisers.find(organiser => organiser.shortName === shortName);
}
