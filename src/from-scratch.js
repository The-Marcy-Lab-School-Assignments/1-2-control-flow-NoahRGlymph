const measureRain = (inches) => {
  if (inches === 0) {
      console.log('drought');
  } else if (inches < 2) {
      console.log('dry');
  } else if (inches < 4) {
      console.log('average');
  } else if (inches < 6) {
      console.log('rainy');
  } else {
      console.log('flood');
  }
};
measureRain(0); // Output: drought
measureRain(1); // Output: dry
measureRain(3); // Output: average
measureRain(5); // Output: rainy
measureRain(7); // Output: flood

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
      console.log('Hiss hiss!');
  } else if (breed === 'cat') {
      if (age < 5) {
          console.log('Mew mew!');
      } else {
          console.log('Meow meow!');
      }
  } else if (breed === 'dog') {
      if (age < 5) {
          console.log('Arf arf!');
      } else if (age >= 5 && age < 10) {
          console.log('Woof woof!');
      } else {
          console.log('Boof!');
      }
  } else {
      console.log('Happy birthday!');
  }
};
happyBirthdayPet('snake', 3); // Output: Hiss hiss!
happyBirthdayPet('cat', 6); // Output: Meow meow!
happyBirthdayPet('dog', 8); // Output: Woof woof!
happyBirthdayPet('rabbit', 2); // Output: Happy birthday!


const funTypes = (jsType) => {
    if (isNaN(jsType)) {
      console.log("Well, now you're just showing off.");
    } else if (typeof jsType === 'string') {
      console.log("That's just some text.");
    } else if (typeof jsType === 'number') {
      console.log("That's a good number.");
    } else if (typeof jsType === 'boolean') {
      console.log("To bool, or not to bool?");
    } else if (typeof jsType === 'undefined') {
      console.log("Nothing, but I didn't set that.");
    } else if (jsType === null) {
      console.log("Nothing, and I did set that.");
    } else if (typeof jsType === 'object') {
      if (Array.isArray(jsType)) {
        console.log("I order you to be indexed.");
      } else {
        console.log("Anybody got the key?");
      }
    }
  };
  
  
funTypes("Hello"); // Output: That's just some text.
funTypes(42); // Output: That's a good number.
funTypes(true); // Output: To bool, or not to bool?
funTypes(undefined); // Output: Nothing, but I didn't set that.
funTypes(null); // Output: Nothing, and I did set that.
funTypes({}); // Output: Anybody got the key?
funTypes([1, 2, 3]); // Output: I order you to be indexed.
funTypes(NaN); // Output: Well, now you're just showing off.

const rounder = (float, roundingSetting) => {
  switch (roundingSetting) {
      case 'up':
          return Math.ceil(float);
      case 'down':
          return Math.floor(float);
      case 'honest':
          return Math.round(float);
      default:
          return null; // Invalid roundingSetting
  }
};
console.log(rounder(5.4, 'up')); // Output: 6
console.log(rounder(5.6, 'down')); // Output: 5
console.log(rounder(5.4, 'honest')); // Output: 5
console.log(rounder(5.6, 'honest')); // Output: 6

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
      console.log('fizzBuzz!');
  } else if (num % 3 === 0) {
      console.log('fizz');
  } else if (num % 5 === 0) {
      console.log('buzz');
  } else {
      console.log(num);
  }
};
fizzBuzzish(3); // Output: fizz
fizzBuzzish(5); // Output: buzz
fizzBuzzish(15); // Output: fizzBuzz!
fizzBuzzish(7); // Output: 7

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
