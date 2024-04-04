const getRandomIntInRange = (min, max) => {
  if (min >= max) throw new Error('min must be less than max'); // Adjusted the condition to min >= max
  return Math.floor(Math.random() * (max - min)) + min; // Corrected the calculation to generate a random number within the range
};
console.log(getRandomIntInRange(5, 10)); // Output: Random integer between 5 and 9 (inclusive)
console.log(getRandomIntInRange(10, 20)); // Output: Random integer between 10 and 19 (inclusive)

const coolnessGauge = (numOfFridges) => {
  return numOfFridges > 5 ? 'You are downright chilly!' : 'You need more fridges.'; // Reversed the return values
};
console.log(coolnessGauge(3)); // Output: 'You need more fridges.'
console.log(coolnessGauge(8)); // Output: 'You are downright chilly!'

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops > 20) {
    console.log('You need help!');
  } else if (numOfFunkoPops > 10) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops >= 1) {
    console.log('Only a few? Keep having fun!');
  } else {
    console.log('You need an intervention!!!');
  }
};

const getWeatherReport = (temperature) => {
  let weatherReport; // Declare the weatherReport variable outside of the if statements

  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
  }
  
  console.log("And that's your report!");
  return weatherReport;
};

const returnPositiveNegativeZero = (num) => {
  return num === 0 ? "Zero" : num < 0 ? "Negative" : "Positive";
};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
