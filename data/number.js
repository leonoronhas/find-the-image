// NUMBER FUNCTIONS
// SET CHOSEN NUMBER AND CONVERT IT BASED ON CATEGORY line: 12
// NUMBER CONVERSIONS lines from 35 - 98
// FILL UP ARRAY BASED ON CATEGORY line: 103

let arrayOfNumbers = new Set();

const EASY = 59;
const MEDIUM = 89;
const HARD = 119;

export const getNumber = (category, number) => {
  let randomNumber = generateNumber();
  if (category === "ROMAN") {
    number = convertToRoman(randomNumber);
  }
  if (category === "DECIMAL") {
    number = generateNumber(randomNumber);
  }
  if (category === "HEXADECIMAL") {
    number = convertToHex(randomNumber);
  }
  if (category === "BINARY") {
    number = convertToBinary(randomNumber);
  }
  if (category === "PERCENT") {
    number = convertToPercent(randomNumber);
  }
  if (category === "CURRENCY") {
    number = convertToCurrency(randomNumber);
  }

  return number;
};

/* ROMAN Numbers */
export const convertToRoman = function (num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

/* Hexadecimal Number */
export const convertToHex = (number) => {
  let hexString = "";
  return (hexString = number.toString(16).toUpperCase());
};

/* Decimal */
export const generateDecimal = (number) => {
  return Math.floor(Math.random() * Math.floor(number)).toString();
};

/* Binary */
export const convertToBinary = (number) => {
  return parseInt(number).toString(2);
};

/* Percent */
export const convertToPercent = (number) => {
  return parseFloat(number).toFixed(1) + "%";
};

/* Currency */
export const convertToCurrency = (number) => {
  return "$" + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/);
};

/* Generate number to be matched */
export const generateNumber = () => {
  return Math.floor(Math.random() * Math.floor(200));
};

/* Randomize the array of numbers by min and max */
export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Fill up the array based on the category
export const getNumberArray = (category, difficulty, chosenNumber) => {
  arrayOfNumbers.clear();
  let level = "";

  // DIFFICULTY BY LEVEL
  if (difficulty === "EASY") {
    level = EASY;
  }
  if (difficulty === "MEDIUM") {
    level = MEDIUM;
  }
  if (difficulty === "HARD") {
    level = HARD;
  }

  // ROMAN
  if (category == "ROMAN") {
    arrayOfNumbers.add(convertToRoman(chosenNumber));

    while (arrayOfNumbers.size != level + 1) {
      let randomNumber = randomIntFromInterval(33, 499);
      let random = convertToRoman(randomNumber);
      if (!arrayOfNumbers.has(chosenNumber)) {
        arrayOfNumbers.add(chosenNumber);
      } else {
        arrayOfNumbers.add(random);
      }
    }
  }

  // DECIMAL
  if (category === "DECIMAL") {
    arrayOfNumbers.add(generateDecimal(chosenNumber));

    while (arrayOfNumbers.size != level + 1) {
      let randomNumber = randomIntFromInterval(10, 1000);

      if (!arrayOfNumbers.has(chosenNumber)) {
        arrayOfNumbers.add(chosenNumber);
      } else {
        arrayOfNumbers.add(randomNumber);
      }
    }
  }

  // BINARY
  if (category == "BINARY") {
    arrayOfNumbers.add(convertToBinary(chosenNumber));

    while (arrayOfNumbers.size != level + 1) {
      let randomNumber = convertToBinary(randomIntFromInterval(100, 300));
      if (!arrayOfNumbers.has(chosenNumber)) {
        arrayOfNumbers.add(chosenNumber);
      } else {
        arrayOfNumbers.add(randomNumber);
      }
    }
  }

  // HEXADECIMAL
  if (category === "HEXADECIMAL") {
    arrayOfNumbers.add(convertToHex(chosenNumber));

    while (arrayOfNumbers.size != level + 1) {
      let random = randomIntFromInterval(50, 999);
      let randomNumber = convertToHex(random);
      if (!arrayOfNumbers.has(chosenNumber)) {
        arrayOfNumbers.add(chosenNumber);
      } else {
        arrayOfNumbers.add(randomNumber);
      }
    }
  }

  // PERCENT
  if (category === "PERCENT") {
    arrayOfNumbers.add(convertToPercent(chosenNumber));

    while (arrayOfNumbers.size != level + 1) {
      let random = randomIntFromInterval(20, 220);
      let randomNumber = convertToPercent(random);
      if (!arrayOfNumbers.has(chosenNumber)) {
        arrayOfNumbers.add(chosenNumber);
      } else {
        arrayOfNumbers.add(randomNumber);
      }
    }
  }

  // CURRENCY
  if (category === "CURRENCY") {
    arrayOfNumbers.add(convertToCurrency(chosenNumber));

    while (arrayOfNumbers.size != level + 1) {
      let random = randomIntFromInterval(20, 220);
      let randomNumber = convertToCurrency(random);
      if (!arrayOfNumbers.has(chosenNumber)) {
        arrayOfNumbers.add(chosenNumber);
      } else {
        arrayOfNumbers.add(randomNumber);
      }
    }
  }

  const array = [...arrayOfNumbers];
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  shuffle(array);
  return array;
};
