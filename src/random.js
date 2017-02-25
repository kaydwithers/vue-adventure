
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
  return names[index];
}

export default {
  randomName,
};
