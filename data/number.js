// Contains all the category conversions required to generate the number

let number = "";
let arrayOfNumbers = [];

export const getNumber = (category) => {
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

/* ROMAN Numbers
Easy - Max 999 -> 6 Roman digits
Medium - Max 1999 -> 7 Roman digits
Hard - Max 2999 -> 8 Roman digits
*/
export const convertToRoman = (number) => {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanString = "";

  for (let i of Object.keys(roman)) {
    let q = Math.floor(number / roman[i]);
    number -= q * roman[i];
    romanString += i.repeat(q);
  }

  return romanString;
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
  return (number >>> 0).toString(2);
};

/* Percent */
export const convertToPercent = (number) => {
  return parseFloat(number).toFixed(1) + "%";
};

/* Currency */
export const convertToCurrency = (number) => {
  return "$" + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const generateNumber = () => {
  // UPDATE THIS WITH SPECIFIC NUMBER FOR EACH CATEGORY
  return Math.floor(Math.random() * Math.floor(1000.0));
};

export const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}