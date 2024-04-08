const findTheOldest = function(arrayOfPersons) {
    let arrayOfAges = arrayOfPersons.map((persons) => persons.yearOfDeath - persons.yearOfBirth);
    const indexOfLargestAge = arrayOfAges.reduce((maxIndex, currentValue, currentIndex, array) => currentValue > array[maxIndex] ? currentIndex : maxIndex, 0);
    return arrayOfPersons[indexOfLargestAge];
};

// Do not edit below this line
module.exports = findTheOldest;
