const findTheOldest = function(people) {
  const age = people.map((x) => x.yearOfDeath === undefined ?
    new Date().getFullYear() - x.yearOfBirth : x.yearOfDeath - x.yearOfBirth);
  let oldestAge = 0;
  let oldestIndex = 0;
  for (let i = 0; i < age.length; i++) {
    if (age[i] > oldestAge) {
      oldestAge = age[i];
      oldestIndex = i;
    }
  }
  const oldest = people[oldestIndex];
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
