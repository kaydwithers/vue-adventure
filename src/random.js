
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

export default {
  randomName,
};
