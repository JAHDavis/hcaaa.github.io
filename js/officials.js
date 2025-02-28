class Official {
  constructor(officialID, firstName, lastName) {
    this.officialID = officialID;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullname() {
    return `${this.firstName} ${this.lastName}`
  }
}

function parseOfficialCsv(csvText) {
  return csvText.split('\n')
    .map(row => row.split(',').map(item => item.trim()))
    .map(columns => new Official(...columns));
}

const officialCsvData = `1,James,Davis`;

const officials = parseOfficialCsv(officialCsvData);

function selectOfficialById(officialID) {
  return officials.find(official => official.officialID === officialID);
}
