const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let arrayOfWords = [];
for (let j = 0; j < 1000; j += 1) {
  const wordLenght = Math.round(Math.random() * (10 - 1) + 1);
  // console.log(wordLenght);
  let wordArray = [];
  for (let i = 0; i <= wordLenght; i += 1) {
    const alphabetIndex = Math.round(Math.random() * (26 - 1) + 1);
    // console.log(alphabetIndex);
    const letter = alphabet[alphabetIndex - 1];
    // console.log(letter);

    wordArray[i] = letter;
  }
  let newWord = wordArray.join('');

  arrayOfWords[j] = newWord;
}
console.log(arrayOfWords);
arrayOfWords = arrayOfWords.sort();

for (let j = 0; j < arrayOfWords.length; j += 1) {
  // console.log(arrayOfWords[j]);
  console.log(
    `${arrayOfWords[j][0].toUpperCase()}${arrayOfWords[j].slice(
      1,
      arrayOfWords[j].length
    )}`
  );
}
// alert(
//   `${newWord[0].toUpperCase()}${newWord.slice(1, newWord.length).toLowerCase()}`
// );

// const userInput = prompt('Input the word', 'tEsT');
// userInput === null || userInput === 'tEsT'
//   ? alert('Input text!!!')
//   : alert(
//       `${userInput[0].toUpperCase()}${userInput
//         .slice(1, userInput.length)
//         .toLowerCase()}`
//     );
// console.log(userInput);

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum = sum + i;
//     console.log(i, sum, typeof i, typeof sum);
//   }
//   return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(5));

function findLongestWord(string) {
  // Change code below this line
  const strArray = string.split(' ');
  const numArray = [];
  let max = 0;
  let letterPosition = 0;
  for (let i = 0; i < strArray.length; i += 1) {
    numArray[i] = strArray[i].length;
    if (numArray[i] > max) {
      max = numArray[i];
      letterPosition = i;
    }
  }
  return strArray[letterPosition];

  // Change code above this line
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}
console.log(createArrayOfNumbers(1, 5));

function getCommonElements(array1, array2) {
  // Change code below this line
  let newArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;

  // Change code above this line
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const a of numbers) {
    // const number = numbers[i];
    console.log('a=', a);
    if (a > value) {
      filteredNumbers.push(a);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
console.log(filterArray([1, 2, 3, 4, 5], 3));

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }

  // propCount = Object.keys(object).length;

  const objectProperty = Object.keys(object);
  console.log(objectProperty);
  for (const key of objectProperty) {
    propCount += 1;
  }
  console.log(propCount);
  return propCount;

  // Change code above this line
}

countProps({ name: 'Mango', age: 2 });

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  console.log(color);
  hexColors.push(color.hex);
}

console.log(hexColors);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let prodPrice = null;
//   for (const prod of products) {
//     console.log(prod);
//     if (prod.name === productName) {
//       prodPrice = prod.price;
//     }
//     console.log(prodPrice);
//   }
//   return prodPrice;

//   // Change code above this line
// }
// console.log(getProductPrice('Droid'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// console.log(products[0]);
// function getAllPropValues(propName) {
//   // Change code below this line
//   let arrProperty = [];

//   for (const prod of products) {
//     arrProperty.push(prod[propName]);
//   }
//   if (arrProperty[0] === undefined) arrProperty = [];

//   return arrProperty;
// }
// // Change code above this line

// console.log('gh', getAllPropValues('price'));

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice = 0;
  for (const prod of products) {
    if (prod.name === productName) {
      console.log(prod.name === productName);
      return (totalPrice = prod.price * prod.quantity);
    }
  }
  return totalPrice;

  // Пиши код выше этой строки
}
console.log(calculateTotalPrice('Drodid'));
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;
