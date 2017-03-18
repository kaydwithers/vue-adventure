
/* eslint-disable no-param-reassign */

export const setAge = (state) => {
  state.random.age = Math.floor(Math.random() * 1000);
};

export const setAlignment = (state) => {
  const index = Math.floor(Math.random() * state.random.alignments.length);
  state.random.alignment = state.random.alignments[index];
};

export const setAppearance = (state) => {
  const index = Math.floor(Math.random() * state.random.appearances.length);
  state.random.appearance = state.random.appearances[index];
};

export const setEnemyNameFirst = (state) => {
  const index = Math.floor(Math.random() * state.enemies.enemyNamesFirst.length);
  state.enemies.enemyNameFirst = state.enemies.enemyNamesFirst[index];
};

export const setEnemyNameLast = (state) => {
  const index = Math.floor(Math.random() * state.enemies.enemyNamesLast.length);
  state.enemies.enemyNameLast = state.enemies.enemyNamesLast[index];
};

export const setEnemyBasicWeapon = (state) => {
  const index = Math.floor(Math.random() * state.enemies.enemyBasicWeapons.length);
  state.enemies.enemyBasicWeapon = state.enemies.enemyBasicWeapons[index];
};

export const setEnemyBasicWeaponMaterial = (state) => {
  const index = Math.floor(Math.random() * state.enemies.enemyBasicWeaponMaterials.length);
  state.enemies.enemyBasicWeaponMaterial = state.enemies.enemyBasicWeaponMaterials[index];
};

export const setEnemyBasicWeaponQuality = (state) => {
  const index = Math.floor(Math.random() * state.enemies.enemyBasicWeaponQualitys.length);
  state.enemies.enemyBasicWeaponQuality = state.enemies.enemyBasicWeaponQualitys[index];
};

export const setEnemyWeaponSize = (state) => {
  const index = Math.floor(Math.random() * state.enemies.enemyWeaponSizes.length);
  state.enemies.enemyWeaponSize = state.enemies.enemyWeaponSizes[index];
};

export const setGender = (state) => {
  const index = Math.floor(Math.random() * state.random.genders.length);
  state.random.gender = state.random.genders[index];
};

export const setLocation = (state) => {
  const index = Math.floor(Math.random() * state.random.locations.length);
  state.random.location = state.random.locations[index];
};

export const setNameFirst = (state) => {
  const index = Math.floor(Math.random() * state.random.namesFirst.length);
  state.random.nameFirst = state.random.namesFirst[index];
};

export const setNameLast = (state) => {
  const index = Math.floor(Math.random() * state.random.namesLast.length);
  state.random.nameLast = state.random.namesLast[index];
};

export const setOccupation = (state) => {
  const index = Math.floor(Math.random() * state.random.occupations.length);
  state.random.occupation = state.random.occupations[index];
};

export const setAnimalName = (state) => {
  const index = Math.floor(Math.random() * state.random.animalNames.length);
  state.random.animalName = state.random.animalNames[index];
};

export const setAnimalType = (state) => {
  const index = Math.floor(Math.random() * state.random.animalTypes.length);
  state.random.animalType = state.random.animalTypes[index];
};

export const setRace = (state) => {
  const index = Math.floor(Math.random() * state.random.races.length);
  state.random.race = state.random.races[index];
};

export const setSpeedType = (state) => {
  const index = Math.floor(Math.random() * state.random.speedTypes.length);
  state.random.speedType = state.random.speedTypes[index];
};

export const setStrengthType = (state) => {
  const index = Math.floor(Math.random() * state.random.strengthTypes.length);
  state.random.strengthType = state.random.strengthTypes[index];
};

export const setTitle = (state) => {
  const index = Math.floor(Math.random() * state.random.titles.length);
  state.random.title = state.random.titles[index];
};

