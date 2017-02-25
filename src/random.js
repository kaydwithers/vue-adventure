
function randomName() {
  const names = [
    'Dusty',
    'Tiberius Facebutt',
    'Herbert Deathrump Flamebeard',
    'Bloodnutt the Flatulant IV',
    'Grumpf the Angry',
    'Prince Ludwig the Indestructible',
    'Weasley Wigglebottom',
    'Theodore Thornheart',
  ];
  const index = Math.floor(Math.random() * names.length);
  this.name = names[index];
}

function randomNameFirst() {
  const namesFirst = [
    'Dusty',
    'Tiberius',
    'Herbert',
    'Grumpf',
    'Prince',
    'Weasley',
    'Winston',
  ];
  const index = Math.floor(Math.random() * namesFirst.length);
  this.nameFirst = namesFirst[index];
}

function randomNameMiddle() {
  const namesMiddle = [
    'the Flatulant',
    'Ludwig',
    'Deathrump',
  ];
  const index = Math.floor(Math.random() * namesMiddle.length);
  this.nameMiddle = namesMiddle[index];
}

function randomNameLast() {
  const namesLast = [
    'Deathrump',
    'Wellington',
    'IV',
    'Thornheart',
    'Flamebeard',
    'Facebutt',
    'the Angry',
  ];
  const index = Math.floor(Math.random() * namesLast.length);
  this.nameLast = namesLast[index];
}

function randomAlignment() {
  const alignments = [
    'good',
    'evil',
    'really evil',
    'psychopathic',
  ];
  const index = Math.floor(Math.random() * alignments.length);
  this.alignment = alignments[index];
}

function randomAge() {
  const index = Math.floor(Math.random() * 1000);
  this.age = index;
}

function randomGender() {
  const genders = [
    'male',
    'female',
    'transsexual',
    'bigender',
    'genderqueer',
    'androgyne',
    'drag king',
    'drag queen',
  ];
  const index = Math.floor(Math.random() * genders.length);
  this.gender = genders[index];
}

function randomRace() {
  const races = [
    'hobbit',
    'ork',
    'pixie',
    'owlbear',
    'satyr',
    'reptillian',
    'goblin',
    'monopod',
    'giant',
    'hobbit',
    'kerbal',
    'undead',
  ];
  const index = Math.floor(Math.random() * races.length);
  this.race = races[index];
}

function randomOccupation() {
  const occupations = [
    'knight',
    'wizard',
    'sorcerer',
    'peasent',
  ];
  const index = Math.floor(Math.random() * occupations.length);
  this.occupation = occupations[index];
}

function randomLocation() {
  const locations = [
    'King\'s landing',
    'Brobdingnag',
    'Another Dimension',
    'Hell',
  ];
  const index = Math.floor(Math.random() * locations.length);
  this.location = locations[index];
}

export default {
  randomName,
  randomNameFirst,
  randomNameMiddle,
  randomNameLast,
  randomAlignment,
  randomAge,
  randomGender,
  randomRace,
  randomOccupation,
  randomLocation,
};
